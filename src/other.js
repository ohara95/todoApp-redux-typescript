// import React, { useState } from "react";
// import { TodoList } from "./components/TodoList";
// import { TodoForm } from "./components/TodoForm";
// import shortid from "shortid";
// import { useSelector, useDispatch } from "react-redux";
// import { Search } from "./pages/Search";
// import { State, Todo } from "./components/Types";
// import { RootState } from "./rootReducer";

// // export interface todo {
// //   content: string;
// //   id: string;
// // }

// const App = () => {
//   const dispatch = useDispatch();
//   // const [todos, setTodos] = useState<todo[]>([]);
//   // const [text, setText] = useState("");
//   const [userData, setUserData] = useState([]);
//   const [searchUser, setSearchUser] = useState("");
//   // const { todos } = useSelector((state: Todo) => state.todos);

//   // const addTodo = (text: string): void => {
//   //   setTodos([...todos, { content: text, id: shortid.generate() }]);
//   // };

//   const fetchData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.preventDefault();
//     const baseUrl = "https://jsonplaceholder.typicode.com/users";
//     const keyword = `?username=${searchUser}`;
//     const URL = baseUrl + keyword;

//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => setUserData(data));
//   };

//   return (
//     <>
//       <form>
//         <label>メアド検索</label>
//         <input
//           type="text"
//           value={searchUser}
//           onChange={(e) => {
//             setSearchUser(e.target.value);
//           }}
//           placeholder="ユーザー名を入れてね"
//         />
//         <button onClick={fetchData}>おしてね</button>
//       </form>
//       {userData.map(({ email }) => {
//         return <>{email}</>;
//       })}
//       <Search />
//       <TodoForm
//         text={text}
//         setText={setText}
//         todos={todos}
//         setTodos={setTodos}
//         addTodo={addTodo}
//       />
//       <TodoList todos={todos} setTodos={setTodos} />
//     </>
//   );
// };

// export default App;

// import React, { FormEvent } from "react";
// import { todo } from "../App";

// interface TodoFormProps {
//   text: string;
//   setText: (param: string) => void;
//   todos: todo[];
//   setTodos: (param: todo[]) => void;
//   addTodo: (param: string) => void;
// }

// export const TodoForm = ({ text, setText, addTodo }: TodoFormProps) => {
//   const onClickBtn = (event: FormEvent) => {
//     event.preventDefault();
//     setText("");
//     addTodo(text);
//   };

//   return (
//     <>
//       <h1>TodoApp</h1>
//       <form>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
//         <button onClick={onClickBtn}>追記</button>
//       </form>
//     </>
//   );
// };

// export default TodoForm;

// import React, { FC } from "react";
// import { todo } from "../App";

// interface TodoItemProps {
//   content: string;
//   id: string;
//   todos: todo[];
//   setTodos: (param: todo[]) => void;
// }
// // 同じエラー
// // const x:string =20
// // TodoItem:TodoItemProps
// export const TodoItem: FC<TodoItemProps> = ({
//   content,
//   id,
//   todos,
//   setTodos,
// }) => {
//   const deleteItem = (id: string): void => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <>
//       <li>
//         <input type="checkbox" />
//         <span>{content}</span>
//         <button
//           onClick={() => {
//             deleteItem(id);
//           }}
//         >
//           削除
//         </button>
//       </li>
//     </>
//   );
// };

// export default TodoItem;

// import React from "react";
// import { TodoItem } from "./TodoItem";
// import { todo } from "../App";

// export const TodoList = ({
//   todos,
//   setTodos,
// }: {
//   todos: todo[],
//   setTodos: (param: todo[]) => void,
// }) => {
//   return (
//     <>
//       {todos.map((todo) => {
//         return (
//           <ul key={todo.id} style={{ listStyle: "none" }}>
//             <TodoItem
//               content={todo.content}
//               id={todo.id}
//               todos={todos}
//               setTodos={setTodos}
//             />
//           </ul>
//         );
//       })}
//     </>
//   );
// };

// export default TodoList;

export {};
