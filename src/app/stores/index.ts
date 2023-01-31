import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createUserSlice, UserState } from './user';

export type RootState = UserState;

export type CustomStateCreator<T> = StateCreator<RootState, [], [], T>;

const devtoolsMiddleware = (f: CustomStateCreator<RootState>): any => {
  return process.env.NODE_ENV === 'production' ? f : devtools(f);
};

export const useRootStore = create<RootState>()(
  devtoolsMiddleware((...a) => ({
    ...createUserSlice(...a),
  }))
);
