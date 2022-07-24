export const ADD_SIGNUP_DATA = "ADD_SIGNUP_DATA";
export const SET_AUTH = "SET_AUTH";
export const REMOVE_AUTH = "REMOVE_AUTH";
export const SET_USER = "SET_USER";

const addSignupData = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: ADD_SIGNUP_DATA, payload: payload });
};

const setauth = () => (dispatch) => {
  dispatch({
    type: SET_AUTH,
  });
};

const removeauth = () => (dispatch) => {
  console.log("false");
  dispatch({
    type: REMOVE_AUTH,
  });
};

const setCredentials = (payload) => (dispatch) => {
    console.log(payload)
  dispatch({
    type: SET_USER,
    payload: payload,
  });
};
export { addSignupData, setauth, removeauth, setCredentials };