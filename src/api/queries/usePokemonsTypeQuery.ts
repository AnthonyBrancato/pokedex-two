import React from "react";

const { REACT_APP_API_BASE_URL } = process.env;

export interface IPokemonsType {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

const initialPokemonsTypeState = {
  count: 0,
  next: "",
  previous: "",
  results: [
    {
      name: "",
      url: "",
    },
  ],
};

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
      setIsLoading(true);
    };
    fetchData();
  }, [isError, isLoading]);
  return {
    pokemonsType,
    isError,
    isLoading,
  };
};
export default usePokemonsTypeQuery;
