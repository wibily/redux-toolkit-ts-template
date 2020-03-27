import React from "react";
import { Route, Switch } from "react-router";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Counter from "../components/Counter";

interface AppProps {
  history: History;
}

export default ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Counter} />
      </Switch>
    </ConnectedRouter>
  );
};
