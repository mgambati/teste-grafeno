import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemons } from "../apis/pokemonsApis";

export interface LoadPokemonsOptions {
  offset: number;
  limit: number;
}

export const loadPokemons = createAsyncThunk(
  "pokemons/loadPokemons",
  ({ offset, limit }: LoadPokemonsOptions) => {
    return fetchPokemons(offset, limit);
  }
);
