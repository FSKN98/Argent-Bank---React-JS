import axios from "axios";
import { LOGIN_USER_URL } from "../api/api";
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../types/user";
import { toast } from "react-toastify";

export const loginUser = (body,goToUser, dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  axios
    .post(LOGIN_USER_URL, body)
      .then((res) =>
      {
        toast(res.data.message)
        goToUser()
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    })
      .catch((err) =>
      {
        toast(err.message)
      dispatch({ type: LOGIN_USER_FAILED });
    });
};
