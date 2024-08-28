import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = () => {
  return (
    <>
      <StContainer>
        <PokemonCard />
      </StContainer>
    </>
  );
};

export default PokemonList;

const StContainer = styled.div`
  background-color: #ffe4fa;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 10px;
`;
