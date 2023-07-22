import { createStore } from "redux";
import allReducers from "./reducers/allReducers";

const store = createStore(
    allReducers,
);
store.getState();
export default store;