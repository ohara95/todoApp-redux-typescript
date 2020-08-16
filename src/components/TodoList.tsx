import React from "react";
import { TodoItem } from "./TodoItem";
import { todo } from "./App";

export const TodoList = ({ todos }: { todos: todo[] }) => {
  const content = todos.map((todo) => {
    return (
      <>
        <TodoItem content={todo.content} />
      </>
    );
  });
  return <>{content}</>;
};

export default TodoList;
