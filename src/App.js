import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import "tachyons";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

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
