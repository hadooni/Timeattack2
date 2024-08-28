import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ MOCK_DATA, addPokemon }) => {
  return (
    <>
      <StContainer>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => {
              addPokemon(pokemon);
            }}
          />
        ))}
      </StContainer>
    </>
  );
};

export default PokemonList;

const StContainer = styled.div`
  background-color: yellow;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
