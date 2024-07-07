// userDeleteAction se action types import karna
import {
  USER_DELETE_ERROR,
  USER_DELETE_LOADING,
  USER_DELETE_SUCCESS,
} from "./userDeleteAction";

// initial state define karna
const initialStore = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// UserDeleteReducer define karna jo state aur action ko handle karega
export const UserDeleteRuducer = (state = initialStore, { type, payload }) => {
  switch (key) {
    case USER_DELETE_LOADING:
      return {
        ...state,
        isLoading: true,
          isSuccess: false,
          isError: false,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
          isSuccess: true,
          isError: false,
      };
    case USER_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
          isSuccess: false,
          isError: true,
      };
    default:
      return state;
  }
};




