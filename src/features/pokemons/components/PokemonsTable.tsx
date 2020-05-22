import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPokemons,
  selectPokemonsStatus,
} from "../selectors/pokemonsSelectors";
import { loadPokemons } from "../thunks/pokemonsThunks";
import { PokemonsPagination } from "./PokemonsPagination";
import PokemonTableRow from "./PokemonTableRow";

export const PokemonsTable: FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(selectAllPokemons);
  useEffect(() => {
    dispatch(loadPokemons({ limit: 10, offset: 0 }));
  }, [dispatch]);

  const status = useSelector(selectPokemonsStatus);
  const tableRows = pokemons.map((pokemon) => {
    return <PokemonTableRow key={pokemon.name} pokemon={pokemon} />;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        {status === "pending" && (
          <tr>
            <td colSpan={2} rowSpan={10} className="text-center">
              Carregando...
            </td>
          </tr>
        )}
        {status === "error" && (
          <tr>
            <td colSpan={2} rowSpan={10} className="text-center">
              Ocorreu um erro ao carregar os Pokemons.
            </td>
          </tr>
        )}
        {status === "idle" && tableRows}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            <PokemonsPagination />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
