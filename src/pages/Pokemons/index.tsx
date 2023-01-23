import { useContext, useEffect, useMemo } from "react";
import { PokemonContext, PokemonModel } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";
import { CardList } from "../../components/Card/CardList";
import { getPokemons } from "../../repository/pokeapi";
import { Search } from "../../components/Search";
import { Filter } from "../../components/Filter";

export const Pokemons = () => {
  const {
    filter,
    pokemonList,
    loading,
    setLoading,
    setPokemonList,
    setError,
    search,
  } = useContext(PokeContext) as PokemonContext;

  useEffect(() => {
    getPokemons()
      .then((data: PokemonModel) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch(setError);
  }, []);

  const filteredPokemon = useMemo(() => {
    const searchPokemon = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filter) {
      return searchPokemon.filter((pokemon) => pokemon.url);
    }
    return searchPokemon;
  }, [filter, pokemonList, search]);


  if (loading) <section>Loading...</section>;

  return (
    <>
      <Search />
      <Filter />
      <CardList pokemons={filteredPokemon} />
    </>
  );
};
