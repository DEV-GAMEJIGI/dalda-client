import { useMutation } from '@tanstack/react-query';
import { postComment } from '~/libs/api/comment';
import { UseMutationOptionsOf } from '~/libs/types';

export function usePostCommentMutation(options: UseMutationOptionsOf<typeof postComment> = {}) {
  return useMutation(postComment, options);
}
