import toDoList from "./TodoReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ toDoList });
export default rootReducers;
