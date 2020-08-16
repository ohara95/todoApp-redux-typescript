import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  text: "",
};

const slice = createSlice({
  // sliceの名称
  name: "todos",
  // 初期値
  initialState,
  // キーがactionCreater関数の名前になる(actionCreaterの自動生成)
  reducers: {
    setTodo: (state, action) => {
      return Object.assign({}, state, { todos: action.payload });
    },
    setText: (state, action) => {
      return Object.assign({}, state, { text: action.payload });
    },
  },
});

// reducerをエクスポート
export default slice.reducer;

// actionCreaterをエクスポート
export const { setTodo, setText } = slice.actions;
