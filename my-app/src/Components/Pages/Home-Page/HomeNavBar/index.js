import React from "react";
import style from "../../../Navbar/nav.module.scss";
import Logo from "../../../../Assets/Images/Logo.svg";
import { Nav, NavLink, NavMenu } from "./NavElement";

export const HomeNavbar = () => {
  return (
    <Nav>
      <div class="mobileContainer">

      <div class="logo">
        <img src={Logo} alt="CourseQuestHub" />
        <p>CourseQuestHub</p>
      </div>
      <div class="hamburger">
      <img  src="https://res.cloudinary.com/detpytqnc/image/upload/v1700065909/menu_cvjplk.svg" alt="Open Navigation"></img>
      </div>
      </div>
      <NavMenu>
        <NavLink to="/HomePage" activeStyle>
          Home
        </NavLink>
        <NavLink to="/LandingPage" activeStyle>
          LandingPage
        </NavLink>
        <NavLink to="/LoginPage" activeStyle>
          Login
        </NavLink>
        <NavLink to="/SignupPage" activeStyle>Signup</NavLink>
        <NavLink to="/Course-Dashboard" activeStyle>
          Courses
        </NavLink>
        <NavLink to="/Mentors" activeStyle>
          Mentors
        </NavLink>
        <NavLink to="/About" activeStyle>
          About Us
        </NavLink>
        <NavLink to="/Contact" activeStyle>
          Contact Us
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
