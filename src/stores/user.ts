import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "えりか",
};

const slice = createSlice({
  // sliceの名称
  name: "user",
  // 初期値
  initialState,
  // キーがactionCreater関数の名前になる(actionCreaterの自動生成)
  reducers: {
    setName: (state, action) => {
      return Object.assign({}, state, { name: action.payload });
    },
  },
});

export default slice.reducer;

export const { setName } = slice.actions;
