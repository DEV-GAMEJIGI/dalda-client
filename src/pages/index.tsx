import { GetServerSideProps } from 'next';
import CommentList from '~/components/comment/CommentList';
import BaseLayout from '~/components/layout/BaseLayout';
import { useAuthEffect } from '~/hooks/useAuthEffect';
import { getMyInfo } from '~/libs/api/auth';
import { Comment, User } from '~/libs/api/types';
import { json } from '~/libs/json';

interface Props {
  user: User | null;
  comments: Comment[];
}

export default function HomePage({ user, comments }: Props) {
  useAuthEffect(user);

  return (
    <BaseLayout>
      <CommentList comments={comments} />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  /** @todo api select mode -> trending or recent */
  const mode = context.query.mode ?? 'trending';

  const comments: Comment[] = [];

  try {
    const user = await getMyInfo();
    return json({ user, comments });
  } catch (e) {
    return json({ user: null, comments });
  }
};
