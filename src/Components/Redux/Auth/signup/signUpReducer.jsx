//signupAction se action types import karna
import { SIGN_UP_LOADING, SIGN_UP_ERROR, SIGN_UP_SUCCESS } from "./signupAction";

// initial state define karna
const initialStore = {
  isLoading: false,
  isError: false,
};

// SignupReducer define karna jo state aur action ko handle karega
export const SignupReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case SIGN_UP_LOADING:
      return {
        ...state,
        isLoading: true,
          isError: false,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
          isError: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
          isError: false,
      };
    default:
      return state;
  }
};






