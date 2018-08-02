import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Main from "../components/main";
import { prevPage, nextPage, fetchMoviesIfNeeded,  } from "../actions/fetchMovies/movies";
import { fetchGenres } from "../actions/fetchMovies/genres";
import {pageChange} from "../reducers/movies";
import './styles.css';
class MoviesContainer extends Component {
  
  componentDidMount() {
    this.props.fetchMoviesIfNeeded(pageChange);
    this.props.fetchGenres(this.props.a);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.a!== prevProps.a) {
      const { fetchMoviesIfNeeded } = this.props;
      fetchMoviesIfNeeded(this.props.a)
    }
  }
  render () {
    const { posts, genres } = this.props;
      return (
        <div>
            <Link to="favs" style={{color: 'white', textDecoration: 'none', fontSize:"32px"}}>
              Fav Movies
            </Link>
        <div className='pagination'>
          <button className="btn" onClick={()=>this.props.prevPage()}>prev</button>
          <span>{this.props.count}</span>
          <button className='btn' onClick={() => this.props.nextPage()}>next</button>
          <Main posts={posts} genres={genres}/>
        </div>
        </div>
      )
  }
}

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
    a: pageChange,
    genres,
    posts,
    isFetching
  };
}


const mapDispatchToProps = dispatch => ({
  fetchMoviesIfNeeded: (value) => dispatch(fetchMoviesIfNeeded(value)),
  fetchGenres: (value) => dispatch(fetchGenres(value)),
  nextPage: () => dispatch(nextPage()),
  prevPage: () => dispatch(prevPage())
});


export default connect (mapStateToProps, mapDispatchToProps)(MoviesContainer);