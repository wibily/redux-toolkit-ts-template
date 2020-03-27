import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useSelector } from "../store/store";
import { push } from "connected-react-router";
import queryString from "query-string";

const Counter: React.FC = () => {
  const count: number = useSelector(state => {
    const qs = queryString.parse(state.router.location.search);
    if (typeof qs.count !== "string") {
      return 0;
    }
    return parseInt(qs.count);
  });
  const dispatch: AppDispatch = useDispatch();

  const onInc = () => {
    dispatch<any>(push(`/?count=${count + 1}`));
  };
  const onDec = () => {
    dispatch<any>(push(`/?count=${count - 1}`));
  };

  return (
    <div>
      <p>Count is {count}</p>
      <div>
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
