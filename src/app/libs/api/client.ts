import axios from 'axios';

export const client = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://api.dalda.xyz' : 'https://api.dalda.xyz',
});
