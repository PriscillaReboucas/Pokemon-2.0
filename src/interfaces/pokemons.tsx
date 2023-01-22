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

export interface TypesPokemon {
  damage_relations: object;
  game_indices: Array<string>;
  generation: Pokemon
  move_damage_class: Pokemon
  moves: Pokemon[]
  name: string;
  names: Array<string>
  past_damage_relations: []
  pokemon: Pokemon[]
}

export interface PokemonContext {
  error: string;
  setError: (err: string) => void;
  filter: string;
  setFilter: (str: string) => void;
  loading: boolean;
  setLoading: (load: boolean) => void;
  pokemonList: Pokemon[];
  setPokemonList: (list: Pokemon[]) => void;
  pokemonTypes: Pokemon[];
  setPokemonTypes: (arr: Pokemon[]) => void;
  search: string;
  setSearch: (str: string) => void;
}

export interface DevicesProviderProps {
  children: ReactNode | ReactElement;
}
