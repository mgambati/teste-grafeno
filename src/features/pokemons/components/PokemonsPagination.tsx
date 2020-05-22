import React, { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPokemonsPagination,
  selectPokemonsHasPreviousPage,
  selectPokemonsHasNextPage,
} from "../selectors/pokemonsSelectors";
import { loadPokemons } from "../thunks/pokemonsThunks";

export interface PokemonsPaginationProps {}

export const PokemonsPagination: FC<PokemonsPaginationProps> = () => {
  const pagination = useSelector(selectPokemonsPagination);
  const hasPrevious = useSelector(selectPokemonsHasPreviousPage);
  const hasNext = useSelector(selectPokemonsHasNextPage);

  const currentPage = pagination.offset / pagination.limit + 1;
  const totalOfPages = Math.ceil(pagination.count / pagination.limit);

  const dispatch = useDispatch();

  const onClickPrevious = useCallback(() => {
    const newOffset = pagination.offset - pagination.limit;
    dispatch(
      loadPokemons({
        limit: 10,
        // Impede que offset seja um número menor que 0
        offset: newOffset < 0 ? 0 : newOffset,
      })
    );
  }, [dispatch, pagination.limit, pagination.offset]);

  const onClickNext = useCallback(() => {
    const newOffset = pagination.offset + pagination.limit;
    dispatch(
      loadPokemons({
        limit: 10,
        // Impede que offset seja um número menor que 0
        offset: newOffset,
      })
    );
  }, [dispatch, pagination.limit, pagination.offset]);
  return (
    <div className="row justify-content-between">
      <div className="col-md-3">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${!hasPrevious && "disabled"}`}>
              <button className="page-link" onClick={onClickPrevious}>
                Anterior
              </button>
            </li>
            <li
              className={`page-item ${!hasNext && "disabled"}`}
              onClick={onClickNext}
            >
              <button className="page-link">Próximo</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="col-md-3 text-right">
        Exibindo página {currentPage} de {totalOfPages}
      </div>
    </div>
  );
};
