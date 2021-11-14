import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  Post: postReducer,
});

export default rootReducer;
