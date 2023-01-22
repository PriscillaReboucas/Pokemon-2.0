import { createContext, useState } from "react";
import {
  DevicesProviderProps,
  Pokemon,
  PokemonContext,
  PokemonModel,
} from "./interfaces/pokemons";

export const PokeContext = createContext<PokemonContext | null>(null);

export const PokeProvider = ({ children }: DevicesProviderProps) => {
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");

  const contextValues = {
    error,
    setError,
    filter,
    setFilter,
    loading,
    setLoading,
    pokemonList,
    setPokemonList,
    pokemonTypes,
    setPokemonTypes,
    search,
    setSearch,
  };

  return (
    <PokeContext.Provider value={contextValues}>
      {children}
    </PokeContext.Provider>
  );
};
