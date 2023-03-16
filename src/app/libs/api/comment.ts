import { client } from '../client';
import { PaginationComment, PostCommentRequest } from './types';

export const getComments = async () => {
  const response = await client.get<PaginationComment>('/comments');
  return response.data;
};

export const postComment = async (form: PostCommentRequest) => {
  const response = await client.post('/comments', form);
  return response.data;
};
