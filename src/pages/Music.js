import React, { useEffect, useState } from "react";
import AddBox from "../components/AddBox";
import CardList from "../components/CardList";
import Scroll from "../Scroll";

const LOCAL_STORAGE_KEY3 = "magic-listApp.music";

const Music = () => {
  const [inputText, setInputText] = useState("");
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY3));
    if (storedMovies) setMusic(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY3, JSON.stringify(music));
  }, [music]);
  return (
    <>
      <h1 className="list-header">Music</h1>
      <AddBox
        items={music}
        setItems={setMusic}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Scroll>
        <CardList items={music} setItems={setMusic} />
      </Scroll>
    </>
  );
};

export default Music;
