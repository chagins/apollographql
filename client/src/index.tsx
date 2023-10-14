import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo";
import GlobalStyles from "./styles";
import Pages from "./pages";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <GlobalStyles />
      <Pages />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
