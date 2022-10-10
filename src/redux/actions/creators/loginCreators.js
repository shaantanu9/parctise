import { LOGIN, LOGOUT } from "../types";
import axios from "axios";
const login = (token) => {
  return {
    type: LOGIN,
    payload: token
  };
};

const logout = () => {
  return {
    type: LOGOUT
  };
};

const sendloginRequest = (data) => {
  const url = "https://reqres.in/api/login";
  console.log("Inside the SendLogin");
  return (dispatch) => {
    axios.post(url, data).then((res) => {
      console.log(res, "inside App");
      dispatch(login(res.data.token));
    });
  };
};

export { login, sendloginRequest, logout };
