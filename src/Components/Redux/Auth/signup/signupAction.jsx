// axios import karna
import axios from "axios";

// action types define karna
export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";

// signupLoading action function define karna
export const signupLoading = () => ({ type: SIGN_UP_LOADING });

// signupError action function define karna
export const signupError = () => ({ type: SIGN_UP_ERROR });

// signupSuccess action function define karna
export const signupSuccess = () => ({ type: SIGN_UP_SUCCESS });


// handlesignup thunk function define karna jo signup request ko handle karega
export const handleSignup = (dispatch, signupData) => {
  return function() {
    dispatch(signupLoading());
    axios
      .post(`http://localhost:3000/auth/register`, signupData)
      .then(({ data }) => {
        const { error, token, message } = data;
        if (error) {
          alert(message);
          dispatch(signupError());
          return;
        }
        dispatch(signupSuccess());
      })
      .catch((err) => {
        dispatch(signupError());
        console.log(err);
      });
  };
};




