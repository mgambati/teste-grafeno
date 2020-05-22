import React, { FC } from "react";
import { PokemonsTable } from "../components/PokemonsTable";

export const PokemonsIndex: FC = () => {
  return (
    <div className="row">
      <div className="col-md-12 my-4">
        <h2>Tabela de Pokemons</h2>
      </div>
      <div className="col-md-12">
        <PokemonsTable />
      </div>
    </div>
  );
};
