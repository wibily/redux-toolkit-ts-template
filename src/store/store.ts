import { configureStore, combineReducers } from "@reduxjs/toolkit";
import count from "./countSlice";
import {
  TypedUseSelectorHook,
  useSelector as useTypedSelector
} from "react-redux";

const rootReducer = combineReducers({
  count
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<AppState> = useTypedSelector;

export default store;
