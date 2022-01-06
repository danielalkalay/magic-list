import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Music from "../pages/Music";
import Sport from "../pages/Sport";
import Todo from "../pages/Todo";

const MainScreen = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/magic-list" element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="music" element={<Music />} />
        <Route path="sport" element={<Sport />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default MainScreen;
