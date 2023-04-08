import { useInfiniteQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { useCallback, useMemo, useRef } from 'react';
import CommentList from '~/components/comment/CommentList';
import BaseLayout from '~/components/layout/BaseLayout';
import { queryKeys } from '~/constant';
import { useInfiniteScroll } from '~/hooks/useInfiniteScroll';
import { getMyInfo } from '~/libs/api/auth';
import { getComments } from '~/libs/api/comment';
import { PaginationComment } from '~/libs/api/types';
import { withClientCookie } from '~/libs/client';
import { json } from '~/libs/json';

interface Props {
  comments: PaginationComment;
}

export default function HomePage({ comments }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKeys.getCommentsKey],
    ({ pageParam = 1 }) => getComments(pageParam, 20),
    {
      initialData: {
        pageParams: [undefined],
        pages: [comments],
      },
      getNextPageParam: (data) => (!data.isLast ? data.nextPage : undefined),
    }
  );

  const fetchNext = useCallback(async () => {
    if (hasNextPage && !isFetching) {
      await fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching]);

  useInfiniteScroll(ref, fetchNext);

  const items = useMemo(() => (data ? data.pages.flatMap(({ list }) => list) : []), [data]);

  return (
    <BaseLayout>
      <CommentList comments={items} />
      <div ref={ref}></div>
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const user = await withClientCookie(() => getMyInfo(), context);

  /** @todo api select mode -> trending or recent */
  const mode = context.query.mode ?? 'trending';
  const comments = await getComments(1, 20);

  return json({ user, comments });
};
