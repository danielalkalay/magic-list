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
import Home from "./pages/Home";
// const LOCAL_STORAGE_KEY = "magic-listApp.items";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <MainScreen></MainScreen>
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
