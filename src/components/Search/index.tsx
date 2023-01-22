import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { PokemonContext } from "../../interfaces/pokemons";
import { PokeContext } from "../../PokeContext";

export const Search = () => {

  const { setSearch } = useContext(
    PokeContext
  ) as PokemonContext;
  return (
    <SearchContainer>
      <FiSearch color="blue"/>
      <input type="text" onChange={e => setSearch(e.target.value)}/>
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  display: flex;
  align-items: center;
`;
