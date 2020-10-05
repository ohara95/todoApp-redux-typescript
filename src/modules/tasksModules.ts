import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, State } from "../components/Types";
import shortid from "shortid";

// Stateの初期状態
const initialState: Todo[] = [];

// id: shortid.generate(),
// content: "",
// done: false,

// Sliceを生成する
const taskModule = createSlice({
  name: "todo",
  initialState,
  // 返り値はstateになる
  reducers: {
    // PayloadActionには何が入るか分からないからジェネリクス
    addTodo: (state: Todo[], action: PayloadAction<string>) => {
      return [
        ...state,
        { id: shortid.generate(), content: action.payload, done: false },
      ];
    },
    doneTask: (state: Todo[], action: PayloadAction<Todo>) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) {
        return [...state, { ...task, done: !task.done }];
      } else {
        // もしundefinedが入った時にstateがそのまま返る
        return state;
      }
    },
    deleteTask: (state: Todo[], action: PayloadAction<Todo>) => {
      state = state.filter((t) => t.id !== action.payload.id);
      return state;
    },
  },
});

// Action Creatorsをエクスポートする
export const { addTodo, doneTask, deleteTask } = taskModule.actions;
// Reducerをエクスポートする
export default taskModule;
