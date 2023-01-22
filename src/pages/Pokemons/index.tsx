import { useContext, useEffect, useMemo } from "react";
import { PokemonContext, PokemonModel } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";
import { CardList } from "../../components/Card/CardList";
import { getPokemons } from "../../repository/pokeapi";
import { Search } from "../../components/Search";
import { Filter } from "../../components/Filter";

export const Pokemons = () => {
  const { filter, pokemonList, setLoading, setPokemonList, setError, search } = useContext(
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

  const filteredPokemon = useMemo(() => {
    const searchPokemon = pokemonList.filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
    if(filter) {
      return searchPokemon.filter(pokemon => pokemon.name)
    }
    return searchPokemon
  }, [search])

  return (
    <>
      <Search />
      <Filter />
      <CardList pokemons={filteredPokemon} />
    </>
  );
};
