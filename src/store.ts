import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// rootReducerを登録
const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
