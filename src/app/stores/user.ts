import { CustomStateCreator } from '.';

export interface UserState {
  user: any;
  setUser: () => void;
}

export const createUserSlice: CustomStateCreator<UserState> = (set) => ({
  user: null,
  setUser: () => set({ user: 'User' }),
});
