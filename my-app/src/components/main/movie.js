import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {fetchGenres} from "../../actions/fetchMovies/genres";



const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  genres: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center"
    
  }
};

class Movie extends Component {
  
  
  componentDidMount() {
    const { fetchMoviesIfNeeded, pageChange, fetchGenres } = this.props;
    fetchMoviesIfNeeded(pageChange);
    fetchGenres();
  }
  
  back = (event) => {
    event.stopPropagation();
    this.props.history.goBack();
  }
  
  render() {
    const { posts, match, classes, genres } = this.props;
    
    let url = +match.url.slice(7);
    const elements = posts.filter(el => el.id === url);
    
    if (!elements) {
      return null;
    }
    
    return (
      <div>
        {
          elements.map(elem => {
            return(
              <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image= {`http://image.tmdb.org/t/p/w185/${elem.poster_path}`}
              />
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {elem.title}
              </Typography>
            <Typography component="p">
              {elem.overview}
            </Typography>
            </CardContent>
                {
                  elem.genre_ids.map((element, i) => {
                    const genre = Object.keys(this.props.genres);
                    return (
                      genre.map(elems => {
                        const e = +elems;
                        if (e === element) {
                          return (
                            <div key={elem.id} className={classes.genres}>
                              {this.props.genres[elems]}
                            </div>
                          )
                        }
                      })
                    )
                  })
                }
                
                
                  <button  className="btn" onClick={()=> {this.props.addToFavs(url)}} >add to favs</button>
                
                <button type="button" onClick={this.back} className="close-btn" >
                  Close
                </button>

          </Card>
            )
          }
          
         )}
        
      </div>
    );
  }
  
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Movie);
