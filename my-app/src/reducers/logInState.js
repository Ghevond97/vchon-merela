import { LOGOUT_ACTION,LOGIN_ACTION } from "../constants";

const initialState = false;

const authState = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return true;
      
    case LOGOUT_ACTION:
      return false;
      
    default: return state;
    
  }
};

export default authState;