import React from "react";

export const TodoItem = ({ content }: { content: string }) => {
  return (
    <>
      <li>
        <input type="checkbox" />
        <span>{content}</span>
      </li>
    </>
  );
};

export default TodoItem;
