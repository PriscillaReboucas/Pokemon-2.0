import { createContext, useEffect, useState } from "react";
import { getPokemons } from "./repository/pokeapi";
import {
  DevicesProviderProps,
  Pokemon,
  PokemonContextType,
  PokemonModel,
} from "./types/pokemons.d";

export const PokeContext = createContext<PokemonContextType | null>(null);

export const PokeProvider = ({ children }: DevicesProviderProps) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPokemons()
      .then((data: PokemonModel) => {
        setPokemonList(data.results);
      })
      .catch((err) => setError(err));
  }, []);

  const contextValues = {
    pokemonList,
    setPokemonList,
    error,
    setError,
  };

  return (
    <PokeContext.Provider value={contextValues}>
      {children}
    </PokeContext.Provider>
  );
};
