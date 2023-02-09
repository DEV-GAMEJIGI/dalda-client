import { useEffect } from 'react';
import { User } from '~/libs/api/types';
import { useRootStore } from '~/stores';

export function useAuthEffect(user: User | null) {
  const { setUser } = useRootStore();

  useEffect(() => {
    setUser(user);
  }, [setUser, user]);
}
