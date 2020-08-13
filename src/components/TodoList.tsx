import React from "react";
import TodoItem from "./TodoItem";
import { todo } from "./App";

const TodoList = ({ todos }: { todos: todo[] }) => {
  todos.map((todo) => {
    return <TodoItem content={todo.content} />;
  });
};

export default TodoList;
