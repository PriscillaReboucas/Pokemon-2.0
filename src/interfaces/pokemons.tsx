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

interface Ability {
  ability: Pokemon
}

interface Indices {
  game_index: number,
  version: Pokemon
}

interface Sprites {
  back_default: string,
  back_female: null,
  back_shiny: string,
  back_shiny_female: null,
  front_default: string,
  front_female: null,
  front_shiny: string,
  front_shiny_female: null,
  other: Object,
  versions: Object
}

interface Stats {
  base_stat: number,
  effort: number,
  stat: Pokemon
}

interface Types {
  slot: number,
  type: Pokemon
}

export interface Profile {
  abilities: Ability[],
  base_experience: number,
  forms: Pokemon[],
  game_indices: Indices[],
  height: number,
  held_items: Array<string>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<string>,
  name: string,
  order: number,
  past_types: Array<string>,
  species: Pokemon[],
  sprites: Sprites,
  stats: Stats[],
  types: Types[],
  weight: number
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
