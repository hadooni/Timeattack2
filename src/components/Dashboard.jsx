import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  const navigate = useNavigate();

  return (
    <StContainer>
      <h2>나만의 포켓몬</h2>
      <StPokemonContainer>
        {selectedPokemon.map((pokemon) => {
          return (
            <StPokemonCard
              key={pokemon.id}
              onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}
            >
              <img src={pokemon.img} alt={`${pokemon.name} 이미지`} />
              <p>{pokemon.name}</p>
              <p>{pokemon.number}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removePokemon(pokemon);
                }}
              >
                삭제
              </button>
            </StPokemonCard>
          );
        })}
      </StPokemonContainer>
    </StContainer>
  );
};

export default Dashboard;

const StContainer = styled.div`
  width: 1000px;
  height: 320px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StPokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px 40px;
`;

const StPokemonCard = styled.div`
  background-color: white;
  width: 120px;
  height: 220px;
  text-align: center;
`;
