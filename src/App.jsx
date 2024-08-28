import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import DetailPokemon from "./pages/DetailPokemon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemon-detail" element={<DetailPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
