import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./elementos/Navbar";
import Juego from "./paginas/Juego";
import Home from "./paginas/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego/:juego" element={<Juego />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
