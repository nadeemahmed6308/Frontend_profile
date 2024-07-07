// Redux se createStore, combineReducers, applyMiddleware import karna
import { createStore, combineReducers, applyMiddleware } from "redux";

// redux-thunk import karna
import thunk from 'redux-thunk';

// Auth, signup aur userData reducer se import karna
import { LoginReducer } from "./Auth/login/loginReducer";
import { SignupReducer } from "./Auth/signup/signUpReducer";
import { UserReducer } from "./User/userData/userDataReducer";

// rootReducer define karna jo combineReducers se banaya gaya hai
const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  userProfile: UserReducer,
});

// middlewareEnhancer applyMiddleware se apply karna
const middlewareEnhancer = applyMiddleware(thunk);

// store create karna rootReducer aur middlewareEnhancer ke sath
export const store = createStore(rootReducer, middlewareEnhancer);

