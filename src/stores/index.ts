import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todo";
import userReducer from "./user";

// 各sliceのreducerを結合
// キーがstateのオブジェクトのキーになる
// {todos:{...}, user:{...}}
const reducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

// 結合したreducerが渡されstoreを生成
const store = configureStore({ reducer });

export default store;
