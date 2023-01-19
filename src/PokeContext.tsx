import { createContext, useState } from "react";
import {
  DevicesProviderProps,
  Pokemon,
  PokemonContext,
} from "./interfaces/pokemons";

export const PokeContext = createContext<PokemonContext | null>(null);

export const PokeProvider = ({ children }: DevicesProviderProps) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const contextValues = {
    error,
    setError,
    loading,
    setLoading,
    pokemonList,
    setPokemonList,
  };

  return (
    <PokeContext.Provider value={contextValues}>
      {children}
    </PokeContext.Provider>
  );
};
