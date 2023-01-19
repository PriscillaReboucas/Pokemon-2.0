import { Pokemon } from "../../interfaces/pokemons";
import { Link } from "react-router-dom";
import { findID } from "../../helpers";

type CardProps = {
  pokemon: Pokemon;
};

export const Card = ({ pokemon }: CardProps) => {
  const id = findID(pokemon);

  return (
    <Link to={`/pokemons/${pokemon?.name}`}>
      <h3>{pokemon?.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={pokemon?.name}
      />
    </Link>
  );
};
