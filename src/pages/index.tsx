import { GetServerSideProps } from 'next';
import CommentList from '~/components/comment/CommentList';
import BaseLayout from '~/components/layout/BaseLayout';
import { getMyInfo } from '~/libs/api/auth';
import { withClientCookie } from '~/libs/api/client';
import { Comment } from '~/libs/api/types';
import { json } from '~/libs/json';

interface Props {
  comments: Comment[];
}

export default function HomePage({ comments }: Props) {
  return (
    <BaseLayout>
      <CommentList comments={comments} />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const user = await withClientCookie(() => getMyInfo(), context);

  /** @todo api select mode -> trending or recent */
  const mode = context.query.mode ?? 'trending';
  const comments: Comment[] = [];

  return json({ user, comments });
};
