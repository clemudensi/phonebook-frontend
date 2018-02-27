/**
 * Created by SLEEK on 2/1/2018.
 */
import {combineReducers} from "redux";
import contactList from "./contactListReducer";
import history from "./reducer_history";
import contactView from "./contactViewReducer";

export default combineReducers({
    contactList,
    history,
    contactView
});