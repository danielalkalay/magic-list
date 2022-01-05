import React, { useEffect, useState } from "react";
import AddBox from "../components/AddBox";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Scroll from "../Scroll";
const LOCAL_STORAGE_KEY3 = "magic-listApp.sports";

const Sport = () => {
  const [inputText, setInputText] = useState("");
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const storedSports = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY3));
    if (storedSports) setSports(storedSports);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY3, JSON.stringify(sports));
  }, [sports]);
  return (
    <>
      <h1 className="list-header">Sport</h1>
      <AddBox
        items={sports}
        setItems={setSports}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Scroll>
        <CardList setItems={setSports} items={sports} />
      </Scroll>
    </>
  );
};

export default Sport;
