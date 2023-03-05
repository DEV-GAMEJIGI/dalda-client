import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createUserSlice, UserState } from './user';
import { createWriteSlice, WriteState } from './write';

type RootState = UserState & WriteState;

export type CustomStateCreator<T> = StateCreator<RootState, [], [], T>;

const devtoolsMiddleware = (fn: CustomStateCreator<RootState>): any => {
  return process.env.NODE_ENV === 'production' ? fn : devtools(fn);
};

export const useRootStore = create<RootState>()(
  devtoolsMiddleware((...rest) => ({
    ...createUserSlice(...rest),
    ...createWriteSlice(...rest),
  }))
);
