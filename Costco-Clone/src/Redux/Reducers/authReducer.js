import { Email, Password } from "../actionItems";

const initialState = {
    email: "",
    password: "",
  };
  
  
  
export  const authReducer = (state= initialState, { type, payload }) => {
    switch (type) {
      case Email:
        return { ...state, email: payload };
      case Password:
        return { ...state, password: payload };
  
      default:
        return state;
    }
}