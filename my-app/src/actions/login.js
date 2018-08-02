import { LOGIN_ACTION, LOGOUT_ACTION } from "../constants";

export const logInAction = info => {
	return {
		type: LOGIN_ACTION,
		payload: info
	}
};

export const logOutAction = () => {
	return {
		type: LOGOUT_ACTION
	}
};