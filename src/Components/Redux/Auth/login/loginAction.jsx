// axios import karna
import axios from "axios";

// action types define karna
export const LOG_IN_LOADING = "LOG_IN_LOADING";
export const LOG_IN = "LOG_IN";
export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const LOG_OUT = "LOG_OUT";

// loginLoading action function define karna
export const loginLoading = () => ({ type: LOG_IN_LOADING });

// loginSuccess action function define karna jo login success ko handle karega
export const loginSuccess = (payload) => ({ type: LOG_IN, payload });

// loginError action function define karna
export const loginError = () => ({ type: LOG_IN_ERROR });

// logoutSuccess action function define karna
export const logoutSuccess = () => ({ type: LOG_OUT });

// handlelogin thunk function define karna jo login request ko handle karega
export const handleLogin = (dispatch, signupdata) => {
  return function() {
    dispatch(loginLoading());
    axios
      .post(`http://localhost:3000/auth/login`, signupdata)
      .then(({ data }) => {
        const { error, token, message } = data;
        if (error) {
          alert(message);
          return dispatch(loginError());
        }
        return dispatch(loginSuccess(token));
      })
      .catch((err) => {
        console.log(err);
        return dispatch(loginError());
      });
  };
};
       
// handleUserEdit thunk function define karna jo user edit request ko handle karega
export const handleUserEdit = (dispatch, updatedData, token) => {
  return function() {
    dispatch(loginLoading());
    axios
      .put(`http://localhost:3000/auth/user/edit/${updatedData._id}`, updatedData, {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        const { error, token, message } = data;
        if (error) {
          alert(message);
          return dispatch(loginError());
        }
        return dispatch(loginSuccess(token));
      })
      .catch((err) => {
        console.log(err);
        return dispatch(loginError());
      });
  };
};

