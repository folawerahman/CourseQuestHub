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
        <NavLink to="/HomePage" activeStyle>
          Home
        </NavLink>
        <NavLink to="/LandingPage" activeStyle>
          LandingPage
        </NavLink>
        <NavLink to="/CoursesPage" activeStyle>
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
