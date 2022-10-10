import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendloginRequest } from "../redux/actions/creators";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, token } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(sendloginRequest({ email, password }));
  };
  console.log(isAuth, "isAuth");

  return (
    <>
      <h1>token {token}</h1>
      <p>{isAuth}</p>
      <form onSubmit={handleLogin}>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type="submit" />
      </form>
    </>
  );
};
export default Login;
