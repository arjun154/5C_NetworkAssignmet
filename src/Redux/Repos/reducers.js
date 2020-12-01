import {
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILURE,
  FETCH_REPO_REQUEST,
} from "./actionTypes";

const initState = {
  error: false,
  errorMessage: "",
  loading: false,
  data: "",
};

const reducers = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_REPO_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        errorMessage: "",
        data: "",
      };
    case FETCH_REPO_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: payload,
      };

    case FETCH_REPO_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: payload.data,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default reducers;
