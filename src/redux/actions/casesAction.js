import axios from "axios";
import {
  CASES_LIST_REQUEST,
  CASES_LIST_SUCCESS,
  CASES_LIST_FAIL,
  CASE_DETAILS_REQUEST,
  CASE_DETAILS_SUCCESS,
  CASE_DETAILS_FAIL,
} from "../constants/casesConstants";
import { apiUrl } from "../../config.json";
export const listCases = () => async (dispatch) => {
  try {
    dispatch({ type: CASES_LIST_REQUEST });
    const { data } = await axios.get(`${apiUrl}/api/v1/cases`);
    console.log("data-fetched", data.data);
    dispatch({ type: CASES_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: CASES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const caseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CASE_DETAILS_REQUEST });

    const { data } = await axios.get(`${apiUrl}/api/v1/cases/${id}`);

    dispatch({
      type: CASE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CASE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
