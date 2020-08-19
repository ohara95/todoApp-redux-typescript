import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useSelector } from "react-redux";
import { RootState } from "../stores";
import { useDispatch } from "react-redux";
import { setTodo, setText } from "../stores/todo";

export interface todo {
  content: string;
}

interface RootState {
  user: string;
  name: string;
}

const App = () => {
  // const dispatch = useDispatch();
  const [todos, setTodos] = useState<todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = (text: string): void => {
    setTodos([...todos, { content: text }]);
  };

  const user = useSelector((state: RootState) => state.user.name);
  console.log(user);

  return (
    <>
      <TodoForm
        text={text}
        setText={setText}
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
      />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
