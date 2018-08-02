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
import './styles.css';


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

class Favs extends Component {
  
  componentDidMount() {
    const { fetchFavMovies, favoriteIds } = this.props;
    fetchFavMovies(favoriteIds)
  }
  
  
  componentDidUpdate(prevProps) {
    if (this.props.favoriteIds !== prevProps.favoriteIds) {
      const { fetchFavMovies } = this.props;
      fetchFavMovies(this.props.favoriteIds)
    }
  }
  
  
  back = (event) => {
    event.stopPropagation();
    this.props.history.goBack();
  }
  
  
  render(){
  
    const { movies, removeFav, favoriteIds, classes } = this.props;
    
       return(<div>
         <button type="button" onClick={this.back} className="close-btn back" >
           Back
         </button>
         <div>
           {
             movies.length !== 0 ?
               movies.map((elem, i) => {
                 return( <Card className={classes.card}>
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
                     elem.genres.map(el=> <h1>{el.name}</h1>)
                   }
                   <button type="button" onClick={this.back} className="close-btn" >
                     Close
                   </button>

                 </Card>)
                 
               })
               :<h1>List is empty</h1>
           }
         </div>
       </div>)
     }
}

export default withStyles(styles)(Favs);