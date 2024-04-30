import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Reducers/authReducer";
import { privateRouteReducer } from "./Reducers/privateRouteReducer";
import { loadingReducer } from "./Reducers/loadingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  authentication: privateRouteReducer,
  load: loadingReducer,
});

export const store = legacy_createStore(rootReducer);
