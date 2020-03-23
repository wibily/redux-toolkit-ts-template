import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./components/Counter";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
