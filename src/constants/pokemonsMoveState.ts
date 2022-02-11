import { IPokemonsMove } from 'interfaces';

const initialPokemonsMoveState: IPokemonsMove = {
  count: 0,
  next: '',
  previous: '',
  results: [
    {
      name: '',
      url: '',
    },
  ],
};

export default initialPokemonsMoveState;
