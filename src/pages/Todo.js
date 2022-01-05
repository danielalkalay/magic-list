import React, { useEffect, useState } from "react";
import AddBox from "../components/AddBox";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Scroll from "../Scroll";

const LOCAL_STORAGE_KEY1 = "magic-listApp.todos";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY1));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="page">
      <h1 className="list-header">Todo</h1>
      <AddBox
        items={todos}
        setItems={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Scroll>
        <CardList items={todos} setItems={setTodos} />
      </Scroll>
    </div>
  );
};

export default Todo;
