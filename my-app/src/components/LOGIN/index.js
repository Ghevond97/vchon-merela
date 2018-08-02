import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import renderField from './renderField';
import './styles.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
	handleSubmit(event) {
	  const { logInAction, username, password } = this.props;
    event.preventDefault();
    
    logInAction({username: username, password: password});
	}
	
  render() {
  
    const { from } = this.props.location.state || { from: { pathname: '/' } };
  
    if (this.props.authState) {
      return <Redirect to={from} />;
    }
    
    return (
    	<div className='login-container'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <Field
                name="username"
                component={renderField}
                type="text"
                label = "username"
                placeholder="username"
              />
            </div>
          </div>
          <div>
            <div>
              <Field
                name="password"
                component={renderField}
                type="password"
                label="password"
                placeholder="password"
              />
            </div>
          </div>
          <div className='btn-container'>
            <button className='btn' disabled={!this.props.valid}>Log In</button>
          </div>
        </form>
			</div>
    );
  }
}

export default Login;
