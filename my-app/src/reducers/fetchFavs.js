import { RECEIVE_FAV_MOVIES, REQUEST_FAV_MOVIES, } from '../constants';


const initialState = {
  isFetching: false,
  movies: [],
};

export const movies = (state = initialState.movies, action) => {
  switch (action.type) {
    case RECEIVE_FAV_MOVIES:
      return action.payload.movies;
    default:
      return state;
  }
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case REQUEST_FAV_MOVIES:
      return true;
    case RECEIVE_FAV_MOVIES:
      return false;
    default:
      return state;
  }
};