
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


class Main extends Component{
  
  back = (event) => {
    event.stopPropagation();
    this.props.history.goBack();
  }
  
  render() {
    const { posts, classes } = this.props;
    
    return (
      <div className="movie-card-wrapper">
        <GridList cellHeight={600} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          </GridListTile>
          {posts.map(tile => (
            <GridListTile key={tile.img}>
              <img src={`http://image.tmdb.org/t/p/w185/${tile.poster_path}`} />
              <Link
                key={tile.id}
                to={{
                  pathname: `/movie/${tile.id}`}}
              >
                <GridListTileBar
                  title={tile.title}
                />
              </Link>
            </GridListTile>
          
          ))}
        </GridList>
        
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);