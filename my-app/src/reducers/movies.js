import { NEXT_PAGE, PREVIOUS_PAGE, RECEIVE_MOVIE, REQUEST_MOVIE } from "../constants";

const initialState = {
  isFetching: false,
  items: []
};


export function pageChange(state = 1, action) {
  switch (action.type) {
    case NEXT_PAGE: {
      if(state === 999) {
        return 1
      }
      return state + 1;
    }
    
    case PREVIOUS_PAGE: {
      if(state === 1) {
        return 1
      }
      return state - 1;
    }
    default:
      return state;
  }
}


function fetchMovies(state = initialState , action) {
  switch (action.type) {
    case REQUEST_MOVIE:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_MOVIE:
      return Object.assign({}, state, {isFetching: false, items: action.movies});
    default:
      return state;
  }
}


export function postsByMovie(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MOVIE:
    case REQUEST_MOVIE:
      return Object.assign({}, state, {
        movie:  fetchMovies(state[action.movies], action)
        
      });
    default:
      return state
  }
}





