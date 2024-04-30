import { IS_LOADING, LOADING } from "../actionItems";

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case LOADING:
      return true;
    case IS_LOADING:
      return false;

    default:
      return state;
  }
};
