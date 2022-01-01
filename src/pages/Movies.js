import React, { useEffect, useState } from "react";
import AddBox from "../components/AddBox";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Scroll from "../Scroll";

const LOCAL_STORAGE_KEY = "magic-listApp.items";

const Movies = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  return (
    <div className="page">
      <h1 className="list-header">Movies</h1>
      <h1 className="list-header">or not?</h1>
      <AddBox
        items={items}
        setItems={setItems}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Scroll>
        <CardList items={items} setItems={setItems} />
      </Scroll>
      <Footer />
    </div>
  );
};

export default Movies;
