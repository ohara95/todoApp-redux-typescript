import React, { useState } from "react";
import { Search } from "../pages/Search";

const SearchApp = () => {
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");

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
    </>
  );
};

export default SearchApp;
