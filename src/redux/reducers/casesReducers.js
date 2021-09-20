import {
  CASES_LIST_REQUEST,
  CASES_LIST_SUCCESS,
  CASES_LIST_FAIL,
} from "../constants/casesConstants";

export const casesListReducer = (state = { cases: [] }, action) => {
  switch (action.type) {
    case CASES_LIST_REQUEST:
      return { loading: true, cases: [] };
    case CASES_LIST_SUCCESS:
      return { loading: false, cases: action.payload };
    case CASES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
