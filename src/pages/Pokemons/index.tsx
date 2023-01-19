import { useContext, useEffect } from "react";
import { PokemonContext, PokemonModel } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";
import { CardList } from "../../components/Card/CardList";
import { getPokemons } from "../../repository/pokeapi";

export const Pokemons = () => {
  const { pokemonList, setLoading, setPokemonList, setError } = useContext(
    PokeContext
  ) as PokemonContext;

  useEffect(() => {
    getPokemons()
      .then((data: PokemonModel) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <CardList pokemons={pokemonList} />
    </>
  );
};
