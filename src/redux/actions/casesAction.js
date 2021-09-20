import axios from "axios";
import {
  CASES_LIST_REQUEST,
  CASES_LIST_SUCCESS,
  CASES_LIST_FAIL,
} from "../constants/casesConstants";

export const listCases = () => async (dispatch) => {
  try {
    dispatch({ type: CASES_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/v1/cases");
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
