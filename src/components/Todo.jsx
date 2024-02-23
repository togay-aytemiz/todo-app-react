import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize rounded`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize rounded`,
  row: `flex w-full font-medium item-center`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex item-center`,
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
          className="w-4"
        />
        <p
          className={!completed ? style.text : style.textComplete}
          onClick={() => toggleComplete(todo)}
        >
          {text}
        </p>
      </div>
      <button onClick={() => deleteTodo(id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};
export default Todo;
