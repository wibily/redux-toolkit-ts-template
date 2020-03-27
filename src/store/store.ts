import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useTypedSelector
} from "react-redux";

import { createBrowserHistory, History } from "history";

import { connectRouter, routerMiddleware } from "connected-react-router";
export const history = createBrowserHistory();

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });

const store = (preloadedState?: any) =>
  configureStore({
    reducer: rootReducer(history),
    preloadedState,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
  });

export type AppDispatch = ReturnType<typeof store>["dispatch"];
export type AppState = ReturnType<ReturnType<typeof rootReducer>>;
export const useSelector: TypedUseSelectorHook<AppState> = useTypedSelector;

export default store;
