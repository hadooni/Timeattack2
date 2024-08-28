import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, onAdd }) => {
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();
  return (
    <>
      <StPokemonCard onClick={() => navigate(`/pokemon-detail?id=${id}`)}>
        <img src={img_url} alt={korean_name} />
        <p>{korean_name}</p>
        <p>No. {id}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        >
          추가
        </button>
      </StPokemonCard>
    </>
  );
};

export default PokemonCard;

const StPokemonCard = styled.div`
  width: 150px;
  height: 220px;
  text-align: center;
  cursor: pointer;
`;
