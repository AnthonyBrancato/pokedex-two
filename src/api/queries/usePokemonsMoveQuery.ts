import React from 'react';

import { initialPokemonsMoveState } from '../../constants';
import { IPokemonsMove } from 'interfaces';
import { REACT_APP_API_BASE_URL } from 'config';

const usePokemonsMoveQuery = () => {
  const [pokemonsMove, setPokemonsMove] = React.useState<IPokemonsMove>(
    initialPokemonsMoveState
  );
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(`${REACT_APP_API_BASE_URL}/move/`);
        const result = await res.json();

        setPokemonsMove(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return {
    pokemonsMove,
    isError,
    isLoading,
  };
};
export default usePokemonsMoveQuery;
