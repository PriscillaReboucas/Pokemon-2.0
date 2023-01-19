import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={"/pokemons"}>
        <h1>Pokemóns</h1>
      </Link>
    </header>
  );
};
