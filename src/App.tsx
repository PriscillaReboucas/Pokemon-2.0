import { useEffect, useState } from "react";
import { allPokemons } from "./repo/pokeapi";
import { PokemonModel } from "./interfaces/pokemons.d";

function App() {
  const [pokemonList, setPokemonList] = useState<Array<string>>([]);

  useEffect(()=> {
    allPokemons().then((data: PokemonModel)=> {
      setPokemonList(data.results)
    })
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  )
}

export default App
