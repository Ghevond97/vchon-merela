import { LOGIN_ACTION, LOGOUT_ACTION } from "../constants";

const loginlogout = (state = null, action) => {
	switch(action.type) {
		case LOGIN_ACTION: {
			return action.payload;
		}
		case LOGOUT_ACTION: {
			return null;
		}
		default: {
			return state;
		}
	}
}

export default loginlogout;