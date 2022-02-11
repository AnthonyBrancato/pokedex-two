import { usePokemonsMoveQuery, usePokemonsTypeQuery } from 'api';

import './App.css';

function App() {
  const { pokemonsType } = usePokemonsTypeQuery();
  const { pokemonsMove } = usePokemonsMoveQuery();

  return (
    <div className="App">
      <p>Nb of type: {pokemonsType?.count}</p>
      <p>Nb of move: {pokemonsMove?.count}</p>
    </div>
  );
}

export default App;
