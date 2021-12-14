import { ACTION_USER_TYPES } from '../Constants';

const initialState = {
  user: '',
  error: ''
};

const apiUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_USER_TYPES.FETCH_USER_PENDING:
      return {
        ...state
      };
    case ACTION_USER_TYPES.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case ACTION_USER_TYPES.FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default apiUserReducer;