import fetch from 'cross-fetch';

import { NEXT_PAGE, PREVIOUS_PAGE, RECEIVE_MOVIE, REQUEST_MOVIE } from "../../constants";

function requestMoviess(movies) {
  return {
    type: REQUEST_MOVIE,
    movies
  }
}

function recieveMovies(json) {
  return {
    type: RECEIVE_MOVIE,
    movies: json.results.map(movie => movie)
  }
}

export function nextPage (movies) {
  return {
    type: NEXT_PAGE,
    movies
  }
}

export function prevPage(movies) {
  return {
    type: PREVIOUS_PAGE,
    movies
  }
}

const  fetchMovies = (movies) => {
  return dispatch => {
    dispatch(requestMoviess(movies));
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US&page=${movies}`)
      .then(response => response.json())
      .then(json => dispatch(recieveMovies(json)))
  }
};

export function fetchMoviesIfNeeded(movies) {
  return (dispatch) => {
    return dispatch(fetchMovies(movies));
  };
}



