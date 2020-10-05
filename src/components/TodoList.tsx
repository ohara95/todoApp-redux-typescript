import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // todosはrootReducerの名前
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <TodoItem todo={todo} />
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
