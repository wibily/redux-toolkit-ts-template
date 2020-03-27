import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Router from "./router/router";
import { history } from "./store/store";

import "./styles.css";

function App() {
  return (
    <Provider store={store()}>
      <div className="App">
        <Router history={history} />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
