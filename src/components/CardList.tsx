import { Pokemon } from "../types/pokemons.d";
import { Card } from "./Card";

type CardListProps = {
  pokemons: Pokemon[];
};

export const CardList = ({ pokemons }: CardListProps) => {
  return (
    <>
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => {
          return <Card key={pokemon.name} pokemon={pokemon} />;
        })}
    </>
  );
};
