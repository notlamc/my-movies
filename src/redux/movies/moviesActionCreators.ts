import {
  ADD_MOVIE_ACTION_TYPE,
  REMOVE_MOVIE_ACTION_TYPE,
  RESET_MOVIES_ACTION_TYPE,
} from "./moviesActionTypes";

import {
  AddMovieActionInterface,
  RemoveMovieActionInterface,
  ResetMoviesActionInterface,
} from "./moviesActionInterfaces";

export const addMovieActionCreator = (
  name: string
): AddMovieActionInterface => {
  return {
    type: ADD_MOVIE_ACTION_TYPE,

    name,
  };
};

export const removeMovieActionCreator = (
  id: string
): RemoveMovieActionInterface => {
  return {
    type: REMOVE_MOVIE_ACTION_TYPE,

    id,
  };
};

export const resetMoviesActionCreator = (): ResetMoviesActionInterface => {
  return {
    type: RESET_MOVIES_ACTION_TYPE,
  };
};
