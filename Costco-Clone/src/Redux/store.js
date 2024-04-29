import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Reducers/authReducer";
import { privateRouteReducer } from "./Reducers/privateRouteReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  authentication: privateRouteReducer,
});

export const store = legacy_createStore(rootReducer);
