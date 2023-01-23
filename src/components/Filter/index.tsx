import { useContext, useEffect } from "react";
import { PokemonContext } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";
import { allTypes } from "../../repository/pokeapi";

export const Filter = () => {
  const { filter, setFilter, pokemonTypes, setPokemonTypes } = useContext(
    PokeContext
  ) as PokemonContext;

  useEffect(() => {
    allTypes().then((data) => {
      setPokemonTypes(data.results);
    });
  }, []);

  console.log(pokemonTypes);
  console.log(filter, "filter");

  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      {pokemonTypes.map((type) => {
        return <option key={type.name}>{type.name}</option>;
      })}
    </select>
  );
};
