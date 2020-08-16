import React, { useState } from "react";
// import { connect } from "react-redux";
// import  addTodo  from "../actions";
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
  // const addTodo:<T> =(text:T):void=> {
  //   setTodos([...todos, { content: text }]);
  // };

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

{
  /* const mapStateToProps(state){
   return {todos: state.todos}
 } */
}

export default App;
{
  /* export default connect(mapStateToProps,{addTodo})(App); */
}
