import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import "tachyons";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <MainScreen />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
