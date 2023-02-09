import { client } from './client';
import { User } from './types';

export async function getMyInfo() {
  const response = await client.get<User>('/users/myinfo');
  return response.data;
}
