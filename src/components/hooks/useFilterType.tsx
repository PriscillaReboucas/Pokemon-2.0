import { useContext, useEffect, useState } from "react";
import { Pokemon, PokemonContext } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";
import { pokemonType } from "../../repository/pokeapi";

interface Props {
  name: string;
}

export const useFilterType = ({ name }: Props) => {
  const { filter } = useContext(PokeContext) as PokemonContext;
  const [type, setType] = useState<Pokemon[]>([]);

  useEffect(() => {
    pokemonType(name).then((data) => {
      setType(data.pokemon);
    });
  }, [filter]);

  return { type };
};
