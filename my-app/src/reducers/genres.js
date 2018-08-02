import { RECEIVE_GENRE, REQUEST_GENRE } from "../constants";


const initialState = {
  isFetching: false,
  genres: []
};

function fetchGenres(state = initialState , action) {
  switch (action.type) {
    case REQUEST_GENRE:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_GENRE:
      return Object.assign({}, state, {isFetching: false, genres: action.objectOfGenres});
    default:
      return state;
  }
}


function postsByGenres(state = {}, action) {
  switch (action.type) {
    case RECEIVE_GENRE:
    case REQUEST_GENRE:
      return Object.assign({}, state, {
        genres: fetchGenres(state[action.genres], action)
        
      });
    default:
      return state
  }
}
export default postsByGenres;




