import { Authentication, logout } from "../actionItems";

let isUser = JSON.parse(localStorage.getItem('credentials'));


let isLoginPresent = isUser ?true:false

const initialState = {
  isAuth:isLoginPresent,
};

export const privateRouteReducer = (state = initialState, { type }) => {
  switch (type) {
    case Authentication:
      return { isAuth: true };
      case logout : return state
    default:
      return state;
  }
};
