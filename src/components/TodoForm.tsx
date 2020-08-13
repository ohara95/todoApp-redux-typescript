import React from "react";

const TodoList = ({ text, setText, todos, setTodos, addTodo }) => {
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
        <button onClick={onClickBtn}>やるぞ！</button>
      </form>
    </>
  );
};

export default TodoList;
