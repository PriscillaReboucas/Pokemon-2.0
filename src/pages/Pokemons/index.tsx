import { useContext } from "react";
import { PokemonContextType } from "../../types/pokemons.d";
import { PokeContext } from "../../PokeContext";
import { CardList } from "../../components/CardList";

export const Pokemons = () => {
  const { pokemonList } = useContext(PokeContext) as PokemonContextType;

  return (
    <>
      <h2>Pokemóns</h2>
      <CardList pokemons={pokemonList} />
    </>
  );
};
