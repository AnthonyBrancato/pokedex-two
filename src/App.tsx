import { usePokemonsTypeQuery } from "api";

import "./App.css";

function App() {
  const { pokemonsType } = usePokemonsTypeQuery();

  return (
    <div className="App">
      <p>Nb of type: {pokemonsType?.count}</p>
    </div>
  );
}

export default App;
