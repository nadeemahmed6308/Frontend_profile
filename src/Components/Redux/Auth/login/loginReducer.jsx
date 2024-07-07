// loginAction se action types import karna
import { LOG_IN_LOADING, LOG_IN, LOG_IN_ERROR, LOG_OUT } from "./loginAction";

// initial state define karna
const initialStore = {
  isLoading: false,
  token: "",
  isAuth: false,
  isError: false,
};

// LoginReducer define karna jo state aur action ko handle karega
export const LoginReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case LOG_IN_LOADING:
      return {
        ...state,
        isLoading: true,
          token: state.token,
          isAuth: state.isAuth,
          isError: false,
      };
    case LOG_IN:
      return {
        ...state,
        isLoading: false,
          token: payload,
          isAuth: true,
          isError: false,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        isLoading: false,
          token: state.token,
          isAuth: state.isAuth,
          isError: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
          token: "",
          isAuth: false,
          isError: false,
      };
    default:
      return state;
  }
};




