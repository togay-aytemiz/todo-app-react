"use client";

import Todo from "@/components/Todo";
import { db } from "@/firebase";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-indigo-500 to-blue-600`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2 mb-4`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl rounded-md shadow-sm font-light outline-none`,
  button: `border p-4 ml-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-md shadow-sm hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-700`,
  count: `text-center p-2 font-light mt-2`,
};

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  // Create todo

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (todoText === "") {
      alert("Please enter a valid todo text");
      return;
    }
    await addDoc(collection(db, "todos"), {
      completed: false,
      text: todoText,
    });
    setTodoText("");
  };

  // Read todo

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    // setTodos(todos.filter((t) => t.id !== todo.id));
  };

  let message =
    todos.length > 0 ? `You have ${todos.length} todos!` : "You have no todo!";

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form} onSubmit={createTodo}>
          <input
            type="text"
            id="taskInput"
            placeholder="What needs to be done?"
            className={style.input}
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
        <p className={style.count}>{message}</p>
      </div>
    </div>
  );
};
export default HomePage;
