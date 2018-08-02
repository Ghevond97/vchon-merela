import { connect } from 'react-redux';

import { fetchFavMovies, addFav, removeFav  } from '../actions/addToFavs'
import {fetchGenres} from "../actions/fetchMovies/genres";

import Favs from '../components/favs/';

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies || [],
  favoriteIds: state.favIds,
  genres: state.postsByGenres.genres || []
});


const mapDispatchToProps = dispatch => ({
  fetchFavMovies: ids => dispatch(fetchFavMovies(ids)),
  addFav: id => dispatch(addFav(id)),
  removeFav: id => dispatch(removeFav(id)),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(Favs);