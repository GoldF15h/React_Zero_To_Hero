import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log("🚀 ~ file: App.tsx:9 ~ todos", todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      let newTodo: Todo = {
        id: Date.now(),
        todo: todo,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-400 font-sans flex flex-col items-center">
      <span className="text-3xl p-8">TaskManager</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* <TodoList todos={todos} /> */}
    </div>
  );
};

export default App;
