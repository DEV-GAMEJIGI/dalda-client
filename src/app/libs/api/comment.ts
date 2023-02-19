import { client } from './client';
import { PaginationComment } from './types';

export const getComments = async () => {
  const response = await client.get<PaginationComment>('/comments');
  return response.data;
};
