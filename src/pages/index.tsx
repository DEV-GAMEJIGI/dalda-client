import { GetServerSideProps } from 'next';
import CommentList from '~/components/comment/CommentList';
import BaseLayout from '~/components/layout/BaseLayout';
import { getMyInfo } from '~/libs/api/auth';
import { getComments } from '~/libs/api/comment';
import { PaginationComment } from '~/libs/api/types';
import { withClientCookie } from '~/libs/client';
import { json } from '~/libs/json';

interface Props {
  comments: PaginationComment;
}

export default function HomePage({ comments }: Props) {
  return (
    <BaseLayout>
      <CommentList comments={comments.list} />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const user = await withClientCookie(() => getMyInfo(), context);

  /** @todo api select mode -> trending or recent */
  const mode = context.query.mode ?? 'trending';
  const comments = await getComments();

  return json({ user, comments });
};
