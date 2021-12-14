import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from "../Redux/Actions/HomeAction";
import { fetchUserSuccess, fetchUserError } from "../Redux/Actions/UserAction";

export const actionCreator = url => dispatch => {
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  });
};


export const actionUserCreator = (url) => dispatch => {
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserError(error));
      });
  });
};