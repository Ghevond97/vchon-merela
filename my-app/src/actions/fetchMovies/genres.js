import fetch from 'cross-fetch';

import { RECEIVE_GENRE, REQUEST_GENRE } from "../../constants";

function requestGenres(genres) {
  return {
    type: REQUEST_GENRE,
    genres
  }
}

function receiveGenres(json) {
  const genres = json.genres;
  const objectOfGenres = (genres) =>
    genres.reduce((obj,item)=> {
      obj[item.id] = item.name
      return obj
    },{})
  return {
    type: RECEIVE_GENRE,
    objectOfGenres: objectOfGenres(genres)
  }
}

export const  fetchGenres = () => {
  return dispatch => {
    dispatch(requestGenres());
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US`)
      .then(response => response.json())
      .then(json => dispatch(receiveGenres(json)))
  }
}