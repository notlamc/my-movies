import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import {
  addMovieActionCreator,
  removeMovieActionCreator,
  resetMoviesActionCreator,
} from "../redux";

import { RootState } from "../redux/rootReducer";

import { IMovie } from "../redux/movies/moviesReducer";

import { RouteComponentProps } from "react-router";

const ManageMoviesPage = (props: RouteComponentProps) => {
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState<string | null>(null);

  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  useEffect(() => setMovieName(null), [movies]);

  return (
    <Container>
      <StyledTitle>Manage Movies</StyledTitle>

      <StyledMessage>
        On this page, you can manage the list of movies.
      </StyledMessage>

      <StyledAddMovie>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName ? movieName : ""}
          onChange={(e) => setMovieName(e.target.value ? e.target.value : null)}
        ></input>

        <button
          onClick={() =>
            dispatch(addMovieActionCreator(movieName ? movieName : ""))
          }
          disabled={
            !movieName ||
            movies.findIndex(
              (movie) => movie.name.toLowerCase() === movieName.toLowerCase()
            ) > -1
          }
        >
          Add Movie
        </button>
      </StyledAddMovie>

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
                <StyledDeleteMovieButton
                  onClick={() => dispatch(removeMovieActionCreator(movie.id))}
                >
                  Delete Movie
                </StyledDeleteMovieButton>

                <StyledMovieName>
                  Movie #{index + 1}:{movie.name}
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

      <StyledResetMoviesButton
        onClick={() => dispatch(resetMoviesActionCreator())}
      >
        Reset Movies
      </StyledResetMoviesButton>

      <StyledLink to="/">Home</StyledLink>
    </Container>
  );
};

export default ManageMoviesPage;

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

const StyledAddMovie = styled.div`
  display: flex;

  gap: 1rem;
`;

const StyledDeleteMovieButton = styled.button``;

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

const StyledResetMoviesButton = styled.button`
  width: 20rem;
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
