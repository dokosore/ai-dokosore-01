import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const API_ENDPOINT = 'https://flyby-router-demo.herokuapp.com/'; //　ApolloClientのデモ用エンドポイント
const AUTH_TOKEN = '';

const httpLink = createHttpLink({
  uri: API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // ここでlocalStorageからtokenを取得する
  const token = AUTH_TOKEN;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  };
});

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
