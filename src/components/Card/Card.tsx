import { Pokemon } from "../../interfaces/pokemons";
import { Link } from "react-router-dom";
import { findID } from "../../helpers";
import styled from "styled-components";

type CardProps = {
  pokemon: Pokemon;
};

export const Card = ({ pokemon }: CardProps) => {
  const id = findID(pokemon);

  return (
    <CardContainer>
      <Link to={`/pokemons/${pokemon?.name}`}>
        <h3>{pokemon?.name}</h3>
        <img
          className="card__image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemon?.name}
        />
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  display: flex;
  width: 200px;
  border: 1px solid green;

  .card__image {
    max-width: 100%;
    object-position: 50% 50%;
  }
`;
