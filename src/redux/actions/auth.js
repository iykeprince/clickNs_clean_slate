// import axios from "axios";

import {
  // USER_LOADED,
  // USER_LOADING,
  // AUTH_ERROR,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";


//  LOGIN USER
export const login = (payload, history) => async (dispatch) => {
  try {
    const response = await fetch("https://apis.woozeee.com/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    return data;
    } catch (error) {
    console.log(error);
    return;
  }
};


//  SOCIAL LOGIN USER
export const socialLogin = (payload, history) => async (dispatch) => {
  try {
    const response = await fetch("https://apis.woozeee.com/api/v1/user/login?social=true", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    return data;
    } catch (error) {
    console.log(error);
    return;
  }
};


// LOGOUT

export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
