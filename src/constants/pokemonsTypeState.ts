import { IPokemonsType } from 'interfaces';

const initialPokemonsTypeState: IPokemonsType = {
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

export default initialPokemonsTypeState;
