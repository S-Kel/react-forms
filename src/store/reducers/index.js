import { combineReducers } from "redux";
// import authReducer from "./authReducer";
import finalFormReducer from './finalFormReducer';

export default combineReducers({
 forms: finalFormReducer
  // auth: authReducer
});