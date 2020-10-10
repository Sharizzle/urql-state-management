import { useMutation } from "urql";
import React from "react";

const ToggleTodoMutation = `
  mutation($id: ID!) {
    toggleTodo(id: $id) {
      id
      complete
    }
  }
`;

export const Todo = ({ id, text, complete, disabled }) => {
  const [result, toggleTodo] = useMutation(ToggleTodoMutation);

  if (result.error) return <p>Something went wrong while toggling</p>;

  return (
    <li>
      <p onClick={() => toggleTodo({ id })}>{text}</p>
      <p>{complete ? "Completed" : "Todo"}</p>
      <button
        onClick={() => toggleTodo({ id })}
        disabled={disabled || result.fetching}
        type="button"
      >
        {" "}
        {complete ? "Toggle todo" : "Complete todo"}
      </button>
    </li>
  );
};
