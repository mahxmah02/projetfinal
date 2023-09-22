import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { serveurLogin } from "../../JS/userSlice/userSlice";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div class="center">
      <h1>Please Sign IN</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="inputbox">
          <input
            type="text"
            required="required"
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <span>Email</span>
        </div>
        <div class="inputbox">
          <input
            type="text"
            required="required"
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />
          <span>Password</span>
        </div>
        <div class="inputbox">
          <input
            type="button"
            value="submit"
            onClick={() => (dispatch(serveurLogin(login)), navigate("/"))}
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
