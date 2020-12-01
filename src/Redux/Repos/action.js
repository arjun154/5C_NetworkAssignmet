import api from "../../utils/api";
import {
  FETCH_REPO_FAILURE,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_REQUEST,
} from "./actionTypes";

export const fetchRepoRequest = (payload) => ({
  type: FETCH_REPO_REQUEST,
  payload,
});

export const fetchRepoFailure = (payload) => ({
  type: FETCH_REPO_FAILURE,
  payload,
});

export const fetchRepoSuccess = (payload) => ({
  type: FETCH_REPO_SUCCESS,
  payload,
});

export const fetchRepos = (payload) => async (dispatch) => {
  dispatch(fetchRepoRequest());
  try {
    const res = await api.get(`/${payload}/repos`);
    dispatch(fetchRepoSuccess(res));
  } catch (err) {
    dispatch(fetchRepoFailure(err));
  }
};
