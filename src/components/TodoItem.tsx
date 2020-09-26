import React, { FC } from "react";
import { todo } from "./App";

interface TodoItemProps {
  content: string;
  id: string;
  todos: todo[];
  setTodos: (param: todo[]) => void;
}
// 同じエラー
// const x:string =20
// TodoItem:TodoItemProps
export const TodoItem: FC<TodoItemProps> = ({
  content,
  id,
  todos,
  setTodos,
}) => {
  const deleteItem = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <li>
        <input type="checkbox" />
        <span>{content}</span>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          削除
        </button>
      </li>
    </>
  );
};

export default TodoItem;
