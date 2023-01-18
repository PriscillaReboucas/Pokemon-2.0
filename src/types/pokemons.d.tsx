import { ReactElement, ReactNode } from "react";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export type PokemonContextType = {
  pokemonList: Pokemon[];
  setPokemonList: (list: Pokemon[]) => void;
  error: string;
  setError: (err: string) => void;
};

export interface DevicesProviderProps {
  children: ReactNode | ReactElement;
}
