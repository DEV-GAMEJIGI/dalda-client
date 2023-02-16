import { GetServerSideProps } from 'next';
import CommentList from '~/components/comment/CommentList';
import BaseLayout from '~/components/layout/BaseLayout';
import { getMyInfo } from '~/libs/api/auth';
import { withClientCookie } from '~/libs/api/client';
import { PaginationComment } from '~/libs/api/types';
import { json } from '~/libs/json';

interface Props {
  comments: PaginationComment;
}

export default function HomePage({ comments }: Props) {
  return (
    <BaseLayout>
      <CommentList comments={comments.items} />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const user = await withClientCookie(() => getMyInfo(), context);

  /** @todo api select mode -> trending or recent */
  const mode = context.query.mode ?? 'trending';
  const comments: PaginationComment = {
    page: 1,
    size: 20,
    isLast: false,
    items: [
      {
        id: 1,
        content: 'Hello!',
        tags: ['Tag1', 'Tag2'],
        subCommentsCount: 10,
        likes: 20,
        isModified: false,
        createdAt: 'Date',
        updatedAt: 'Date',
        writer: { handle: 'Jungma', username: '중마' },
        mentionUser: null,
      },
    ],
  };

  return json({ user, comments });
};
