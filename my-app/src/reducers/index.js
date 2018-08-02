import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { pageChange, postsByMovie } from './movies';
import postsByGenres from './genres';
import loginlogout from './login';
import authState from './logInState'
import favIds from './favs';
import { movies, isFetching } from './fetchFavs';

const reducer = combineReducers({
  form: reduxFormReducer,
  loginlogout,
  authState,
  postsByMovie,
  pageChange,
  postsByGenres,
  favIds,
  movies,
  isFetching
});

export default reducer;