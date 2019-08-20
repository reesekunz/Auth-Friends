import axios from "axios";

// FETCHING FRIENDS
export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

// ADDING FRIENDS
export const ADDING_FRIENDS_START = "ADDING_FRIENDS_START";
export const ADDING_FRIENDS_SUCCESS = "ADDING_FRIENDS_SUCCESS";
export const ADDING_FRIENDS_FAILURE = "ADDING_FRIENDS_FAILURE";

// FETCHING FRIENDS
export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START });
    axios
      .get("http://localhost:5000/api/friends")
      .then(response => {
        //console.log("success", response.data
        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        //console.log("error", error))
        dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error.response });
      });
  };
};

// ADDING FRIENDS
export const postData = values => {
  console.log("friend", values);
  return dispatch => {
    dispatch({ type: ADDING_FRIENDS_START });
    axios
      .post("http://localhost:5000/api/friends", values)
      .then(response => {
        console.log("response =", response.data);
        dispatch({ type: ADDING_FRIENDS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log("error", error);
        dispatch({ type: ADDING_FRIENDS_FAILURE, payload: error });
      });
  };
};
