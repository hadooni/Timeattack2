import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../../mock";

const DetailPokemon = () => {
  const [params, setParams] = useSearchParams();
  const pokemonId = params.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === +pokemonId);
  const navigate = useNavigate();
  return (
    <>
      <img src={pokemon.img_url} alt={`${pokemon.korean_name} 이미지`} />
      <p>{pokemon.korean_name}</p>
      <p>{pokemon.types}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate("/dex")}>뒤로가기</button>
    </>
  );
};

export default DetailPokemon;
