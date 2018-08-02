import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import { logInAction } from '../actions/login';
import Login from '../components/LOGIN';
import validate from './validation';

let LoginForm = reduxForm({
  form: 'login',
  validate
  
})(Login);

const selector = formValueSelector('login');

const mapStateToProps = state => {
  const { username, password } = selector(state, 'username', 'password');
    return {
      username,
      password,
      authState: state.authState
  }
};

const mapDispatchToProps = dispatch => ({
  logInAction: value => dispatch(logInAction(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
