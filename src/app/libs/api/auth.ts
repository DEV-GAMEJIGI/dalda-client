import { client } from './client';
import { User } from './types';

export async function getMyInfo() {
  try {
    const response = await client.get<User>('/users/myinfo');
    return response.data;
  } catch (e) {
    return null;
  }
}
