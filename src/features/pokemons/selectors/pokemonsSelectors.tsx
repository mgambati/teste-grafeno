import { RootState } from "../../../app/store";

export const selectPokemonsStatus = (state: RootState) => {
  return state.pokemons.status;
};

export const selectAllPokemons = (state: RootState) => {
  return state.pokemons.entities;
};

export const selectPokemonsHasPreviousPage = (state: RootState) => {
  return state.pokemons.offset > 0;
};

export const selectPokemonsHasNextPage = (state: RootState) => {
  return state.pokemons.offset + state.pokemons.limit < state.pokemons.count;
};

export const selectPokemonsPagination = (state: RootState) => {
  const { count, limit, offset } = state.pokemons;

  return {
    count,
    limit,
    offset,
  };
};
