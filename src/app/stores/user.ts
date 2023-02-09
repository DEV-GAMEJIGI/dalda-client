import { User } from '~/libs/api/types';
import { CustomStateCreator } from '.';

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const createUserSlice: CustomStateCreator<UserState> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
});
