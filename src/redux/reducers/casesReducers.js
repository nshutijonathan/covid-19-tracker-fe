import {
  CASES_LIST_REQUEST,
  CASES_LIST_SUCCESS,
  CASES_LIST_FAIL,
  CASE_DETAILS_REQUEST,
  CASE_DETAILS_SUCCESS,
  CASE_DETAILS_FAIL,
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

export const caseDetailsReducer = (state = { case: {} }, action) => {
  switch (action.type) {
    case CASE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CASE_DETAILS_SUCCESS:
      return { loading: false, case: action.payload };
    case CASE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
