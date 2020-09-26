import { combineReducers } from "@reduxjs/toolkit";
import tasksModules from "./modules/tasksModules";

const rootReducer = combineReducers({
  todos: tasksModules.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
