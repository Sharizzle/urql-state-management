import { useQuery } from "urql";
import React from "react";
import { Todo } from "./Todo";

const TodosQuery = `
  query {
    todos {
      id
      text
      complete
    }
  }
`;

export const Todos = () => {
  const [result] = useQuery({ query: TodosQuery });

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Oh no... {result.error.message}</p>;

  return (
    <ul>
      {result.data.todos.map(({ id, text, complete }) => (
        <Todo
          key={id}
          text={text}
          id={id}
          complete={complete}
          disabled={result.fetching}
        />
      ))}
    </ul>
  );
};
