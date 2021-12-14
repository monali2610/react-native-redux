import ACTION_TYPES from '../Constants';

export const fetchData = () => ({
  type: ACTION_TYPES.FETCH_PENDING
});

export const fetchSuccess = data => ({
  type: ACTION_TYPES.FETCH_SUCCESS,
  payload: data
});

export const fetchError = error => ({
  type: ACTION_TYPES.FETCH_ERROR,
  payload: error
});