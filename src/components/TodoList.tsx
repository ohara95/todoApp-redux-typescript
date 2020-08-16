import React from "react";
import { TodoItem } from "./TodoItem";
import { todo } from "./App";

export const TodoList = ({ todos }: { todos: todo[] }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <ul style={{ listStyle: "none" }}>
            <TodoItem content={todo.content} />
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
