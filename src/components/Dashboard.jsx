import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);
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
              <img
                src={pokemon.img_url}
                alt={`${pokemon.korean_name} 이미지`}
              />
              <p>{pokemon.korean_name}</p>
              <p>{pokemon.id}</p>
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
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
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
  cursor: pointer;
`;
