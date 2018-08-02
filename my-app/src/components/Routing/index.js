import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import {red800} from 'material-ui/styles/colors';
import { createMuiTheme } from '@material-ui/core/styles';
//


import { logOutAction } from '../../actions/login';
import MoviesContainer from '../../containers/moviesContainer';

const color = {
  backgroundColor:red800
}; // #F44336




const styles = {
  flex: {
    flexGrow: 1
  }
};

class ProtectedRoute extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    const { logOutAction } = this.props;
    logOutAction();
  }
  
  
  render() {
    const { authState } = this.props;
    const { classes } = this.props;
    return (
      <Route
        render={ props =>
           authState ? (
            <div>
              <AppBar position="static">
                <Toolbar style={color}>
                  <Typography variant="display2" color="inherit" className={classes.flex}>
                    <img src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.15752-9/38143503_1861638130549840_1188089865057599488_n.png?_nc_cat=0&oh=024f9906efd0678cddf542ba85cf09da&oe=5BC5A461" style={{width:150, height:60}}/>
                  </Typography>
                  <button className="btn" onClick={this.handleSubmit}>Log Out</button>
                </Toolbar>
              </AppBar>
              <MoviesContainer/>
              </div>
             
            // <div>
            //   <div>
            //     <a >ՎՉՈՆ  u Tigranuhin ՄԵՌԵԼԱ</a>
            //     <button className="btn" onClick={this.handleSubmit}>Log Out</button>
            //   </div>
            //   <div>
            //     <MoviesContainer/>
            //   </div>
            // </div>
              ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
          
        }
      />
    );
  }
}

ProtectedRoute.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProtectedRoute);


// export default connect(undefined, mapDispatchToProps)(ProtectedRoute);