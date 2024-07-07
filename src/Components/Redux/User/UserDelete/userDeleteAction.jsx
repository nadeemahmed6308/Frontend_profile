// axios import karna
import axios from "axios";

// loginAction se logoutSuccess action import karna

import { logoutSuccess } from "../../Auth/login/loginAction";

// user delete ke liye action types define karna
export const USER_DELETE_LOADING = "USER_DELETE_LOADING";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_ERROR = "USER_DELETE_ERROR";

// userDeleteLoading action function define karna
export const userDeleteLoading = () => {
  {
    type: USER_DELETE_LOADING;
  }
};

// userDeleteSuccess action function define karna
export const userDeleteSuccess = () => {
  {
    type: USER_DELETE_SUCCESS;
  }
};

// userDeleteError action function define karna
export const userDeleteError = () => {
  {
    type: USER_DELETE_ERROR;
  }
};

// handleUserDelete thunk function define karna jo user delete request handle karega
export const handleUserDelete = (dispatch, token) => {
  return function() {
    dispatch(userDeleteLoading());
    axios
      .delete("http://localhost:3000/auth/user/delete", {
        headers: {
          authorization: token,
        },
      })
      .then(({ data }) => {
        let { error, message } = data;

        if (error) {
          console.log(message);
          return dispatch(userDeleteError());
        }
        dispatch(userDeleteSuccess());
        return dispatch();
      })
      .catch((err) => {
        console.log("Error:", err);
        dispatch(userDeleteError());
      });
  };
};
