import { connect } from 'react-redux';
import ProtectedRoute from '../components/Routing';
import {logOutAction} from "../actions/login";

const mapStatetoProps = (state) => {
  return {
    authState: state.authState,
  };
};

const mapDispatchToProps = dispatch => ({
  logOutAction: () => dispatch(logOutAction())
});


export default connect (mapStatetoProps,mapDispatchToProps)(ProtectedRoute);