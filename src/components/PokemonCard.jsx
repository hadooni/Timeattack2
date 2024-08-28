import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../../mock";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/modules/pokemonSlice";

const PokemonCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
              dispatch(addPokemon(pokemon));
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
