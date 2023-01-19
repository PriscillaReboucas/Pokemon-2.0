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

export interface PokemonContext {
  error: string;
  setError: (err: string) => void;
  loading: boolean;
  setLoading: (load: boolean) => void;
  pokemonList: Pokemon[];
  setPokemonList: (list: Pokemon[]) => void;
};

export interface DevicesProviderProps {
  children: ReactNode | ReactElement;
}
