import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        className=" w-96 h-10 text-center rounded-xl drop-shadow-lg mr-5"
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Task"
      ></input>
      <button
        className="w-10 h-10 bg-white rounded-xl drop-shadow-lg active:bg-blue-300"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputFeild;
