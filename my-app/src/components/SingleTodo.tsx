import React from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      {todo.id},{todo.isDone},{todo.todo}
    </div>
  );
};

export default SingleTodo;
