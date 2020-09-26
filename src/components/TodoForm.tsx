import React, { FormEvent } from "react";
import { todo } from "./App";

interface TodoFormProps {
  text: string;
  setText: (param: string) => void;
  todos: todo[];
  setTodos: (param: todo[]) => void;
  addTodo: (param: string) => void;
}

export const TodoForm = ({ text, setText, addTodo }: TodoFormProps) => {
  const onClickBtn = (event: FormEvent) => {
    event.preventDefault();
    setText("");
    addTodo(text);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={onClickBtn}>追記</button>
      </form>
    </>
  );
};

export default TodoForm;
