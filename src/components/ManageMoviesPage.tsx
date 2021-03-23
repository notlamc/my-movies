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
      <Title>Manage Movies</Title>

      <Message>On this page, you can manage the list of movies.</Message>

      <AddMovieContainer>
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
          disabled={!movieName}
        >
          Add Movie
        </button>
      </AddMovieContainer>

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
                <DeleteMovieButton
                  onClick={() => dispatch(removeMovieActionCreator(movie.id))}
                >
                  Delete Movie
                </DeleteMovieButton>

                <MovieName>
                  Movie #{index + 1}:{movie.name}
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

      <ResetMoviesButton onClick={() => dispatch(resetMoviesActionCreator())}>
        Reset Movies
      </ResetMoviesButton>

      <Link to="/">Home</Link>
    </Container>
  );
};

export default ManageMoviesPage;

const Container = styled.div`
  display: grid;

  grid-gap: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Message = styled.div``;

const AddMovieContainer = styled.div``;

const DeleteMovieButton = styled.button``;

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

const ResetMoviesButton = styled.button`
  width: 20rem;
`;
