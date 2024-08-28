import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pokemonContext } from "../pages/Dex";

const PokemonCard = () => {
  const { addPokemon, MOCK_DATA } = useContext(pokemonContext);
  const navigate = useNavigate();
  return (
    <>
      {MOCK_DATA.map((pokemon) => (
        <StPokemonCard
          key={pokemon.id}
          onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}
        >
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <p>{pokemon.korean_name}</p>
          <p>No. {pokemon.id}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addPokemon(pokemon);
            }}
          >
            추가
          </button>
        </StPokemonCard>
      ))}
    </>
  );
};

export default PokemonCard;

const StPokemonCard = styled.div`
  background-color: white;
  width: 130px;
  height: 220px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;
