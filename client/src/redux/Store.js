import { createStore } from "redux";
import allReducers from "./reducers/AllReducers";

const store = createStore(
    allReducers,
);
store.getState();
export default store;