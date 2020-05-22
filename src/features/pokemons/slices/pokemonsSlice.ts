import { createSlice } from "@reduxjs/toolkit";
import { loadPokemons } from "../thunks/pokemonsThunks";
import { Pokemon } from "../types/pokemonsTypings";

export interface PokemonsState {
  count: number;
  offset: number;
  limit: number;
  status: "idle" | "pending" | "error";
  entities: Pokemon[];
}

const initialState: PokemonsState = {
  count: 0,
  offset: 954,
  limit: 20,
  status: "idle",
  entities: [],
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadPokemons.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(loadPokemons.fulfilled, (state, { meta, payload }) => {
      state.entities = payload.results;
      state.count = payload.count;
      state.limit = meta.arg.limit;
      state.offset = meta.arg.offset;
      state.status = "idle";
    });

    builder.addCase(loadPokemons.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const pokemonsReducer = pokemonsSlice.reducer;
