import { useContext, useEffect, useState } from "react";
import { Pokemon, PokemonContext } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";
import { pokemonType } from "../../repository/pokeapi";

interface Props {
  id: string;
}

export const usePokemonByType = ({ id }: Props) => {
  const { filter } = useContext(PokeContext) as PokemonContext;
  const [pokemonByType, setType] = useState<Pokemon[]>([]);

  useEffect(() => {
    pokemonType(id).then((data) => {
      setType(data.pokemon);
    });
  }, [filter]);

  return { pokemonByType };
};
