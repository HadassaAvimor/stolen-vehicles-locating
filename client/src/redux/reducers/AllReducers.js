import { combineReducers } from "redux";
import InspectorReducer from "./InspectorReducer";

const allReducers = combineReducers({
    InspectorReducer : InspectorReducer,
});
export default allReducers;