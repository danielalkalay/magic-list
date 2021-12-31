import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import "tachyons";
import {
  BrowserRouter as Router,
  // , Switch, Link, Route
} from "react-router-dom";
// const LOCAL_STORAGE_KEY = "magic-listApp.items";

function App() {
  // const [inputText, setInputText] = useState("");
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedItems) setItems(storedItems);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  // }, [items]);

  // did it, i'm starting to understand

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <MainScreen />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
