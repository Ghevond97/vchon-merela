import fetch from 'cross-fetch';

import { SEARCH_MOVIE, REQUEST_MOVIE, RECEIVE_MOVIE } from "../../constants";

export function searchMovie(movies) {
  return {
    type: SEARCH_MOVIE,
    movies
  }
}

function requestMovies(movies) {
  return {
    type: REQUEST_MOVIE,
    movies
  }
}

function receiveMovies(movies, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.results.map(child => child),
    receivedAt: Date.now()
  }
}

function fetchMovies(movies) {
  return dispatch => {
    dispatch(requestMovies(moives));
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US&query=${movies}`)
    .then(response => response.json())
    .then(json => dispatch(receiveMovies(movies, json)))
  }
}

export function fetchMoviesIfNeeded(movies) {
  return (dispatch) => {
    return dispatch(fetchMovies(movies));
  };
}