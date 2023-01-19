import { Pokemon } from "../interfaces/pokemons";

export const findID = (pokemon: Pokemon) : string | undefined => pokemon.url.match(/\/(\d{1,})\//)?.at(1)