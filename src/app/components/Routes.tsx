import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { PokemonsIndex } from "../../features/pokemons/screens/PokemonsIndex";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PokemonsIndex} />
    </Switch>
  );
};
