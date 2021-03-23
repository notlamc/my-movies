export interface AddMovieActionInterface {
  type: string;

  name: string;
}

export interface RemoveMovieActionInterface {
  type: string;

  id: string;
}

export interface ResetMoviesActionInterface {
  type: string;
}
