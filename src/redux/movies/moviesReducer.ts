import { v4 as uuid } from "uuid";

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

export interface IMovie {
  id: string;

  name: string;
}

interface IState {
  movies: IMovie[];
}

const initialState: IState = {
  movies: [
    {
      id: uuid(),

      name: "Armageddon",
    },

    {
      id: uuid(),

      name: "Jurassic Park",
    },

    {
      id: uuid(),

      name: "A Few Good Men",
    },
  ],
};

const reducer = (
  state = initialState,

  action:
    | AddMovieActionInterface
    | RemoveMovieActionInterface
    | ResetMoviesActionInterface
) => {
  switch (action.type) {
    case ADD_MOVIE_ACTION_TYPE: {
      const typedAction = action as AddMovieActionInterface;

      return {
        ...state,

        movies: [...state.movies, { id: uuid(), name: typedAction.name }],
      };
    }

    case REMOVE_MOVIE_ACTION_TYPE: {
      const typedAction = action as RemoveMovieActionInterface;

      return {
        ...state,

        movies: state.movies.filter((movie) => movie.id !== typedAction.id),
      };
    }

    case RESET_MOVIES_ACTION_TYPE: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};

export default reducer;
