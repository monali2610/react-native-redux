import { ACTION_USER_TYPES } from '../../Constants';

export const fetchUserData = () => ({
  type: ACTION_USER_TYPES.FETCH_USER_PENDING
});

export const fetchUserSuccess = user => ({
  type: ACTION_USER_TYPES.FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserError = error => ({
  type: ACTION_USER_TYPES.FETCH_USER_ERROR,
  payload: error
});