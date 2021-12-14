import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from "../Redux/Actions";

const actionCreator = url => dispatch => {
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        console.log("shdsjhdsjd", response)
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  });
};

export default actionCreator;