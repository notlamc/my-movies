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
      <Title>List Movies</Title>

      {movies.length > 0 ? (
        <>
          <Message>
            There{" "}
            {movies.length === 1 ? "is 1 movie" : `are ${movies.length} movies`}
            .
          </Message>

          <MovieListContainer>
            {movies.map((movie: IMovie, index: number) => (
              <MovieContainer>
                <MovieName>
                  Movie #{index + 1}: {movie.name} ({movie.id})
                </MovieName>
              </MovieContainer>
            ))}
          </MovieListContainer>
        </>
      ) : (
        <>
          <Message>There are no Movies.</Message>
        </>
      )}

      <Link to="/">Home</Link>
    </Container>
  );
};

export default ListMoviesPage;

const Container = styled.div`
  display: grid;

  grid-gap: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Message = styled.div``;

const MovieName = styled.span`
  font-weight: 600;
`;

const MovieListContainer = styled.div`
  display: grid;

  grid-gap: 1rem;
`;

const MovieContainer = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;

  grid-gap: 1rem;

  align-items: center;
`;
