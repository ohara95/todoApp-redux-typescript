import React, { useState } from "react";

export const Search = () => {
  const [searchWord, setSearchWord] = useState("");
  const [image, setImage] = useState([]);

  // 検索ワードを入れてURLを生成
  const createURL = (word: string) => {
    const API_KEY = "18372394-97cd741cc7c269ecc64b2c86f";
    const baseUrl = `https://pixabay.com/api/?key=${API_KEY}`;
    const keyword = "&q=" + encodeURIComponent(word);
    var URL = baseUrl + keyword;
    return URL;
  };

  const searchResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchWord("");
    fetch(createURL(searchWord))
      .then((data) => data.json())
      .then((json) => setImage(json.hits));
  };

  return (
    <>
      <form onSubmit={searchResult}>
        <label>画像検索</label>
        <input
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          placeholder="検索ワードを入力してください"
        />
        <button type="submit">検索</button>
      </form>
      <div>
        {image.map((photo: { [key: string]: string }) => {
          return (
            <>
              <img src={photo.previewURL} />
            </>
          );
        })}
      </div>
    </>
  );
};
