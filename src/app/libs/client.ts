import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const client = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
});

type AsyncFn<T> = () => Promise<T>;
type Context = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;

const setClientCookie = (context: Context) => {
  client.defaults.headers.common['Cookie'] = context.req.headers.cookie;
};

export const withClientCookie = async <T>(fn: AsyncFn<T>, context: Context) => {
  setClientCookie(context);
  const result = await fn();
  return result;
};
