import React from "react";
import { Todos } from "./Todos";
import { cacheExchange } from '@urql/exchange-graphcache';
import { devtoolsExchange } from '@urql/devtools';


import { createClient, Provider, dedupExchange, fetchExchange } from "urql";

const cache = cacheExchange({})

const client = createClient({
  url: "https://0ufyz.sse.codesandbox.io",exchanges: [dedupExchange, devtoolsExchange, cache, fetchExchange]
});

export const App = () => (
  <Provider value={client}>
    <Todos />
  </Provider>
);
