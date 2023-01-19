import { PokemonModel } from "../interfaces/pokemons";

const API_HOST = "https://pokeapi.co/api/v2";

export const getPokemons = async (
  limit = "151",
  offset = "0"
): Promise<PokemonModel> => {
  const response = await fetch(
    `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
};

export async function profile(name: string): Promise<PokemonModel> {
  const response = await fetch(`${API_HOST}/pokemon/${name}`);
  return response.json();
}

export async function ability(name: string): Promise<PokemonModel> {
  const response = await fetch(`${API_HOST}/ability/${name}`);
  return response.json();
}
