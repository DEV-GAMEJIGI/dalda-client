import { UseMutationOptions } from '@tanstack/react-query';

// All api function cover
type CustomFunction = (arg: any) => any;

// https://guiyomi.tistory.com/137
// options: UseMutationOptions<TData, TError, TVariables, TContext>
export type UseMutationOptionsOf<T extends CustomFunction, E = any> = UseMutationOptions<
  Awaited<ReturnType<T>>, // TData
  E, // TError
  Parameters<T>[0] // TVariables
>;
