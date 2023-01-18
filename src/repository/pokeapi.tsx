import { PokemonModel } from "../types/pokemons.d";

export const getPokemons = async (): Promise<PokemonModel> => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const results = response.json();
  return results;
};
