/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Slide from "./component/Slide";
import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="wrap">
          <Routes>
            <Route path="/" element={<Slide />} />
            <Route path="/about" element={<About />} />
            <Route path="/exhibition" element={<div>hi</div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
