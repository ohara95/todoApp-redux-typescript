import React from "react";

export const TodoItem = ({ content }: { content: string }) => {
  return (
    <>
      <ul>
        <input type="checkbox" />
        <li>{content}</li>
      </ul>
    </>
  );
};

export default TodoItem;
