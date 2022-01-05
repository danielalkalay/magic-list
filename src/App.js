import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import "tachyons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
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
