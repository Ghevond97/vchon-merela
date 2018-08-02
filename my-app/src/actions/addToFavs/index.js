import { ADD_FAV, REMOVE_FAV, RECEIVE_FAV_MOVIES, REQUEST_FAV_MOVIES } from '../../constants';

const addFav = id => ({
  type: ADD_FAV,
  payload: {
    id: id.toString(),
  },
});

const removeFav = id => ({
  type: REMOVE_FAV,
  payload: {
    id: id.toString(),
  },
});


const requestFavMovies = () => ({
  type: REQUEST_FAV_MOVIES,
});

const receiveFavMovies = movies => {
  return {
    type: RECEIVE_FAV_MOVIES,
    payload: {
      movies,
    },
  };
};

const fetchFavMovies = ids => dispatch => {
  dispatch(requestFavMovies());
  
  Promise.resolve(
    ids.map(id => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US`
    );
    })
    )
    .then(arrOfFetchPromises => Promise.all(arrOfFetchPromises))
    .then(arrOfFetchResponses => arrOfFetchResponses.map(response => response.json()))
    .then(arrOfResolvedPromises => Promise.all(arrOfResolvedPromises))
    .then(elem => dispatch(receiveFavMovies(elem)));
};

export { addFav, removeFav, fetchFavMovies };
