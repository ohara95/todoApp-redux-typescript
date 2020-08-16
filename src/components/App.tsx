import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

export interface todo {
  content: string;
}

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodo = (text: string): void => {
    const test = [...todos, { content: text }];
    setTodos(test);
  };

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
