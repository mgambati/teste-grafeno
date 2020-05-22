import React, { FC } from "react";
import { Pokemon } from "../types/pokemonsTypings";

export interface PokemonTableRowProps {
  pokemon: Pokemon;
}

const PokemonTableRow: FC<PokemonTableRowProps> = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td>{pokemon.url}</td>
    </tr>
  );
};

export default PokemonTableRow;
