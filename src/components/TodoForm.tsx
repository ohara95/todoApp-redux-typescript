import React from "react";
import { addTodo, doneTask, deleteTask } from "../modules/tasksModules";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../rootReducer";

const TodoForm = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const addTodoBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <form onSubmit={addTodoBtn}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>追加！！！！！！</button>
      </form>
    </>
  );
};

export default TodoForm;
