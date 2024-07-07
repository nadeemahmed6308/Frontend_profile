// axios import karna
import axios from "axios";

// action types define karna
export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
export const USER_DATA_ERROR = "USER_DATA_ERROR";

// userDataLoading action function define karna
export const userDataLoading = () => ({ type: USER_DATA_LOADING });

// userDataSuccess action function define karna jo user data ko success status ke sath store karega
export const userDataSuccess = (payload) => ({
  type: USER_DATA_SUCCESS,
  payload,
});

// userDataError action function define karna
export const userDataError = () => ({ type: USER_DATA_ERROR });

// handleUserData thunk function define karna jo user data fetch karega
export const handleUserData = (dispatch, token) => {
  return function() {
    dispatch(userDataLoading());
    axios
      .get("http://localhost:3000/auth/user/details", {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        let { error, user, message } = data;

        if (error) {
          console.log(message);
          return dispatch(userDataError());
        }
        console.log(message);
        return dispatch(userDataSuccess(user));
      })
      .catch((error) => {
        console.log(error);
        return dispatch(userDataError());
      });
  };
};

