import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

export const Search = () => {
  return (
    <SearchContainer>
      <FiSearch color="blue"/>
      <input type="text" />
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  display: flex;
  align-items: center;
`;
