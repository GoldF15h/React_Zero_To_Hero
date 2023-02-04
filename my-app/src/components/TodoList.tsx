import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      <div>TODO LIST</div>
      <div>
        {todos.map((cur) => {
          return (
            <div>
              <SingleTodo todo={cur}></SingleTodo>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

// import React from "react";
// import { Todo } from "../model";

// const TodoList: React.FC<Todo[]> = (todos) => {
//   return <div>TodoList</div>;
// };

// export default TodoList;
