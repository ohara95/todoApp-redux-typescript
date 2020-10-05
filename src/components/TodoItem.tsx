import React, { FC } from "react";
import { addTodo, doneTask, deleteTask } from "../modules/tasksModules";
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "./Types";

type Props = {
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li style={{ listStyle: "none" }} key={todo.id}>
        <input
          type="checkbox"
          checked={todo.done}
          onClick={() => dispatch(doneTask(todo))}
        />
        {todo.content}
        <button
          onClick={() => {
            dispatch(deleteTask(todo));
          }}
        >
          削除
        </button>
      </li>
    </>
  );
};

export default TodoItem;
