import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todo";

// 各sliceのreducerを結合
const reducer = combineReducers({
  todos: todoReducer,
});

// 結合したreducerが渡されstoreを生成
const store = configureStore({ reducer });

export default store;
