import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { RootState } from "../redux/rootReducer";

import styled from "styled-components";

const HomePage = () => {
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  return (
    <Container>
      <StyledTitle>Main Menu</StyledTitle>

      <StyledMessage>What would you like to do?</StyledMessage>

      <StyledLink to="/manage-movies">Manage Movies</StyledLink>

      {movies.length > 0 && (
        <StyledLink to="/list-movies">
          List Movies (
          {movies.length === 1 ? "1 movie" : `${movies.length} movies`})
        </StyledLink>
      )}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1rem;
`;

const StyledTitle = styled.div`
  font-size: 2rem;

  font-weight: 400;

  color: #3c7ade;
`;

const StyledMessage = styled.div``;

const StyledLink = styled(Link)`
  padding: 5px;

  color: #3c7ade;

  text-decoration: none;

  &:hover {
    color: #ffffff;

    background: #3c7ade;
  }
`;
