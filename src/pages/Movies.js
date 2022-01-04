import React, { useEffect, useState } from "react";
import AddBox from "../components/AddBox";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Scroll from "../Scroll";

const LOCAL_STORAGE_KEY2 = "magic-listApp.movies";

const Movies = () => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2));
    if (storedMovies) setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="page">
      <h1 className="list-header">Movies</h1>
      <AddBox
        items={movies}
        setItems={setMovies}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Scroll>
        <CardList items={movies} setItems={setMovies} />
      </Scroll>
      <Footer />
    </div>
  );
};

export default Movies;
