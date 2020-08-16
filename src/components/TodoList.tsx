import React from "react";
import TodoItem from "./TodoItem";
import { todo } from "./App";

const TodoList = ({ todos }: { todos: todo[] }) => {
  const content = todos.map((todo) => {
    <TodoItem content={todo.content} />;
  });
  return <>{content}</>;
};

export default TodoList;
