import { client } from '../client';
import { PaginationComment, PostCommentRequest } from './types';

export const getComments = async (page: number, size: number) => {
  const response = await client.get<PaginationComment>('/comments', {
    params: { page, size },
  });

  return { ...response.data, nextPage: page + 1 };
};

export const postComment = async (form: PostCommentRequest) => {
  const response = await client.post('/comments', form);
  return response.data;
};

export const deleteComment = async (id: number) => {
  const response = await client.delete(`/comments/${id}`);
  return response.data;
};
