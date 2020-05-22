import { api } from "../../../app/api";
import { Pokemon } from "../types/pokemonsTypings";
import { PaginatedApiResponse } from "../../../app/typings/apiTypings";

export async function fetchPokemons(offset = 0, limit = 10) {
  const params = {
    offset,
    limit,
  };
  const response = await api.get<PaginatedApiResponse<Pokemon>>("/pokemon", {
    params,
  });

  return response.data;
}
