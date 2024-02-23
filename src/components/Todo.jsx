import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize rounded`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize rounded`,
  row: `flex w-full font-medium item-center`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex item-center`,
  input: `h-4 w-4 my-auto rounded border-gray-300 accent-[#4C64EE] focus:ring-[#4C64EE]`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const { id, text, completed } = todo;
  return (
    <li className={!completed ? style.li : style.liComplete}>
      <div className={style.row}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(todo)}
          className={style.input}
        />
        <label
          className={!completed ? style.text : style.textComplete}
          onClick={() => toggleComplete(todo)}
        >
          {text}
        </label>
      </div>
      <button onClick={() => deleteTodo(id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};
export default Todo;
