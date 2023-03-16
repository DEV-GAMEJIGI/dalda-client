import { client } from '../client';
import { User } from './types';

export const getMyInfo = async () => {
  try {
    const response = await client.get<User>('/users/myinfo');
    return response.data;
  } catch (e) {
    return null;
  }
};
