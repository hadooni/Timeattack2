import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    removePokemon: (state, action) => {},
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
