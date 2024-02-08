import React from "react";
import style from "../../../Navbar/nav.module.scss";
import Logo from "../../../../Assets/Images/Logo.svg";
import { Nav, NavLink, NavMenu } from "./NavElement";

export const HomeNavbar = () => {
  return (
    <Nav>
      <div className={style.logo}>
        <img src={Logo} alt="CourseQuestHub" />
        <h4>CourseQuestHub</h4>
      </div>
      <NavMenu>
        <NavLink to="/HomePage" >
          Home
        </NavLink>
        <NavLink to="/LandingPage" >
          LandingPage
        </NavLink>
        <NavLink to="/CoursesPage">
          Courses
        </NavLink>
        <NavLink to="/Mentors">
          Mentors
        </NavLink>
        <NavLink to="/About">
          About Us
        </NavLink>
        <NavLink to="/Contact">
          Contact Us
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
