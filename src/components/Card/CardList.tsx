import styled from "styled-components";
import { Pokemon } from "../../interfaces/pokemons";
import { Card } from "./Card";

type CardListProps = {
  pokemons: Pokemon[];
};

export const CardList = ({ pokemons }: CardListProps) => {
  return (
    <CardWrapper>
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => {
          return <Card key={pokemon.name} pokemon={pokemon} />;
        })}
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;

  width: 90vw;
  margin: 2rem auto 0.5rem;
`;
