import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Movie from "../../containers/selectedMovie";
import LoginForm from '../../containers/logIn';
import ProtectedRoute from '../../containers/auth';
import  Fav from  '../../containers/favourites';

class ModalSwitch extends Component {
  
  previousLocation = this.props.location;
  
  componentWillUpdate(nextProps) {
    
    const { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  
  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={ProtectedRoute} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/favs" component = {Fav}/>
        </Switch>
      </div>
    
    );
  }
};

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;