import { Link } from "react-router-dom";

import styled from "styled-components";

import { useSelector } from "react-redux";

import { RootState } from "../redux/rootReducer";

import { IMovie } from "../redux/movies/moviesReducer";

import { RouteComponentProps } from "react-router";

const ListMoviesPage = (props: RouteComponentProps) => {
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  return (
    <Container>
      <StyledTitle>List Movies</StyledTitle>

      {movies.length > 0 ? (
        <>
          <StyledMessage>
            There{" "}
            {movies.length === 1 ? "is 1 movie" : `are ${movies.length} movies`}
            .
          </StyledMessage>

          <StyledMovieList>
            {movies.map((movie: IMovie, index: number) => (
              <StyledMovie key={movie.id}>
                <StyledMovieName>
                  Movie #{index + 1}: {movie.name} ({movie.id})
                </StyledMovieName>
              </StyledMovie>
            ))}
          </StyledMovieList>
        </>
      ) : (
        <>
          <StyledMessage>There are no Movies.</StyledMessage>
        </>
      )}

      <StyledLink to="/">Home</StyledLink>
    </Container>
  );
};

export default ListMoviesPage;

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

const StyledMovieName = styled.span`
  font-weight: 400;
`;

const StyledMovieList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1rem;
`;

const StyledMovie = styled.div`
  display: flex;

  gap: 1rem;

  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 5px;

  color: #3c7ade;

  text-decoration: none;

  &:hover {
    color: #ffffff;

    background: #3c7ade;
  }
`;
