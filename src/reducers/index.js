import todoReducers from "./TodoReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ todoReducers });
export default rootReducers;
