import React, { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../../mock";

export const pokemonContext = createContext();

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    const newPokemon = [
      ...selectedPokemon,
      {
        id: pokemon.id,
        img: pokemon.img_url,
        name: pokemon.korean_name,
        number: `No. ${pokemon.id}`,
      },
    ];
    const samePokemon = selectedPokemon.find((p) => p.id === pokemon.id);
    if (selectedPokemon.length >= 6) {
      alert("최대 6개 포켓몬만 선택할 수 있습니다!");
    } else if (samePokemon) {
      alert("이미 선택된 포켓몬 입니다!");
    } else {
      setSelectedPokemon(newPokemon);
    }
  };

  const removePokemon = (pokemon) => {
    const deletePokemon = selectedPokemon.filter((p) =>
      p.id === pokemon.id ? false : true
    );
    setSelectedPokemon(deletePokemon);
  };

  return (
    <>
      <pokemonContext.Provider
        value={{ selectedPokemon, removePokemon, addPokemon, MOCK_DATA }}
      >
        <Dashboard />
        <PokemonList />
      </pokemonContext.Provider>
    </>
  );
};

export default Dex;
