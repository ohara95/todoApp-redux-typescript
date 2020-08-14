import React from "react";
import { todo } from "./App";

interface TodoFormProps {
  text: string;
  setText: () => void;
  todos: todo[];
  setTodos: todo[];
  addTodo: () => void;
}

const TodoForm = ({ text, setText, addTodo }: TodoFormProps) => {
  const onClickBtn = (e: any) => {
    e.preventDefault();
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
