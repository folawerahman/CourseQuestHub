import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./nav.module.scss";
import Logo from "../../Assets/Images/Logo.svg";

export const Navbar = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://course-quest-hub.onrender.com/api/cqh/login/",
        loginData
      );
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Login failed", error.response.data); // Handle error response
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://course-quest-hub.onrender.com/api/cqh/registration/",
        registerData
      );
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Registration failed", error.response.data); // Handle error response
    }
  };

  return (
    <div className={style.navContainer}>
      <div className={style.logo}>
        <img src={Logo} alt="CourseQuestHub" />
        <h4>CourseQuestHub</h4>
      </div>

      <div className={style.navButton}>
        <button className={style.loginButton} onClick={handleLogin}>
          Login
        </button>
        <button className={style.registerButton} onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};