import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const client = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://api.dalda.xyz' : 'https://api.dalda.xyz',
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
