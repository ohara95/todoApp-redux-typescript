import React from "react";
import { TodoItem } from "./TodoItem";
import { todo } from "./App";

export const TodoList = ({
  todos,
  setTodos,
}: {
  todos: todo[];
  setTodos: (param: todo[]) => void;
}) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id} style={{ listStyle: "none" }}>
            <TodoItem
              content={todo.content}
              id={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
