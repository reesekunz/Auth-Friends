import {
    FETCHING_FRIENDS_START,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_FAILURE,

    ADDING_FRIENDS_START,
    ADDING_FRIENDS_SUCCESS,
    ADDING_FRIENDS_FAILURE,
  } from "../actions";

const initialState = {
    friendsdata: [],
    isLoading: false,
    error: ""
  };

  export const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_FRIENDS_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCHING_FRIENDS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: "",
          getsmurfsdata: action.payload
        };
      case FETCHING_FRIENDS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
        case ADDING_FRIENDS_START:
          console.log(action)
        return {
          ...state,
          isSubmitting: true,
          error: ""
        };
      case ADDING_FRIENDS_SUCCESS:
          console.log('payload', action.payload);
        return {
          ...state,
          isSubmitting: false,
          error: "",
          getsmurfsdata: action.payload
        };
      case ADDING_FRIENDS_FAILURE:
        return {
          ...state,
          isSubmitting: false,
          error: action.payload 
        };
  
      default:
        return state;
    }
  };
  