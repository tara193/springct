import { createAction } from "redux-actions";

const type = {
  ADD_USER_REQUEST: "ADD_USER_REQUEST",
  ADD_USER_FAILURE: "ADD_USER_FAILURE",
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  FETCH_USER_LIST_REQUEST: "FETCH_USER_LIST_REQUEST",
  FETCH_USER_LIST_FAILURE: "FETCH_USER_LIST_FAILURE",
  FETCH_USER_LIST_SUCCESS: "FETCH_USER_LIST_SUCCESS",
};

export default type;
export const add_user_request = createAction(type.ADD_USER_REQUEST);
export const addUserSuccess = createAction(type.ADD_USER_SUCCESS);
export const add_user_failure = createAction(type.ADD_USER_FAILURE);
export const fetch_user_request = createAction(type.FETCH_USER_LIST_REQUEST);
export const fetchUserSuccess = createAction(type.FETCH_USER_LIST_SUCCESS);
export const fetch_user_failure = createAction(type.FETCH_USER_LIST_FAILURE);
