import React from 'react';

import { initialPokemonsTypeState } from '../../constants';
import { IPokemonsType } from 'interfaces';
import { REACT_APP_API_BASE_URL } from 'config';

const usePokemonsTypeQuery = () => {
  const [pokemonsType, setPokemonsType] = React.useState<IPokemonsType>(
    initialPokemonsTypeState
  );
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(`${REACT_APP_API_BASE_URL}/type/`);
        const result = await res.json();

        setPokemonsType(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return {
    pokemonsType,
    isError,
    isLoading,
  };
};
export default usePokemonsTypeQuery;
