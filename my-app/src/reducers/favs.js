import { ADD_FAV, REMOVE_FAV } from '../constants';

const favIds = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV: {
      return state.concat(action.payload.id);
    }
    case REMOVE_FAV: {
      return state.filter(id => id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default favIds;