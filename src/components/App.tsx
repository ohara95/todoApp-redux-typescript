import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "../pages/Search";
import { State, Todo } from "./Types";
import { RootState } from "../rootReducer";

export interface todo {
  content: string;
  id: string;
}

const App = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState<todo[]>([]);
  const [text, setText] = useState("");
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  // const { todos } = useSelector((state: Todo) => state.todos);

  const addTodo = (text: string): void => {
    setTodos([...todos, { content: text, id: shortid.generate() }]);
  };

  const fetchData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const baseUrl = "https://jsonplaceholder.typicode.com/users";
    const keyword = `?username=${searchUser}`;
    const URL = baseUrl + keyword;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };

  return (
    <>
      <form>
        <label>メアド検索</label>
        <input
          type="text"
          value={searchUser}
          onChange={(e) => {
            setSearchUser(e.target.value);
          }}
          placeholder="ユーザー名を入れてね"
        />
        <button onClick={fetchData}>おしてね</button>
      </form>
      {userData.map(({ email }) => {
        return <>{email}</>;
      })}
      <Search />
      <TodoForm
        text={text}
        setText={setText}
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
