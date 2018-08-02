import  { connect } from 'react-redux';

import Movie from "../components/main/movie";
import { fetchMoviesIfNeeded } from "../actions/fetchMovies/movies";
import {fetchGenres} from "../actions/fetchMovies/genres";
import { addFav } from "../actions/addToFavs";

function mapStateToProps(state) {
  const { postsByMovie, pageChange, postsByGenres } = state;
  const {
    isFetching,
    items: posts
  } = postsByMovie.movie || {
    isFetching: true,
    items: []
  };
  
  const {
    genres
  } = postsByGenres.genres || {
    genres: []
  };
  
  
  return {
    genres,
    pageChange,
    posts,
    isFetching
  };
}

const mapDispatchToProps = dispatch => ({
  fetchMoviesIfNeeded:(value) => dispatch(fetchMoviesIfNeeded(value)),
  fetchGenres:(value) => dispatch(fetchGenres(value)),
  addToFavs:(value) => dispatch(addFav(value))
});

export default connect (mapStateToProps, mapDispatchToProps)(Movie);