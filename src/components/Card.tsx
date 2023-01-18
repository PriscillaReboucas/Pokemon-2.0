import { Pokemon } from "../types/pokemons.d";
type CardProps = {
  pokemon: Pokemon;
};

export const Card = ({ pokemon }: CardProps) => {
  return (
    <article>
      <h3>{pokemon.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${1}.png`}
        alt={pokemon.name}
      />
    </article>
  );
};
