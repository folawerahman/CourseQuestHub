import React, { useState } from "react";
// import style from "../../Landing-Page/MidSection/mid.module.scss";
import style from "./course.module.scss"
import Hospital from "../../../../Assets/Images/Hospital.svg";
import Tuition from "../../../../Assets/Images/Tuition.svg";
import ArtPrices from "../../../../Assets/Images/Art-Prices.svg";
import Grouptask from "../../../../Assets/Images/Group-Task.svg";
import Law from "../../../../Assets/Images/Law.svg";
import iMac from "../../../../Assets/Images/iMac.svg";
import { HomeNavbar } from "../../Home-Page/HomeNavBar";
import { DynamicCourses } from "./Courses";
import { element } from "prop-types";
import { Route, Router, Routes } from "react-router";


export const CoursesDashboard = () => {


    return (
            <div>
            <HomeNavbar/>
            <div className={style.DashboardContainer}>
                <div className={style.searchCourses}>
                <label className={style.searchBox}  htmlFor="search-box">
       <svg className={style.searchIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
         fill="none">
         <path fillRule="evenodd" clipRule="evenodd"
           d="M12.3226 13.3833C11.3996 14.0841 10.2484 14.5 9 14.5C5.96243 14.5 3.5 12.0376 3.5 9C3.5 5.96243 5.96243 3.5 9 3.5C12.0376 3.5 14.5 5.96243 14.5 9C14.5 10.2484 14.0841 11.3996 13.3833 12.3226L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L12.3226 13.3833ZM13 9C13 11.2091 11.2091 13 9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9Z"
           fill="#B5B5B5" />
       </svg>
       <input id="search-box" type="search" placeholder="Search" className={style.input} />
     </label>
                </div>

        <div className={style.MidSection}>
      {/* <h3>EXPLORE OUR WIDE ARRAY OF COURSES DESIGNED FOR YOU</h3> */}

      {/* Explore Courses  */}
      <div className={style.coursesContainer}>
  
        <div className={style.courses}>
          <div>
            <img src={Hospital} alt="" />
          </div>
          <p>Medicine</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Tuition} alt="" />
          </div>
          <p>Education</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={ArtPrices} alt="" />
          </div>
          <p>Art and Humanities</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Grouptask} alt="" />
          </div>
          <p>Social Science</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Law} alt="" />
          </div>
          <p>Law</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={iMac} alt="" />
          </div>
          <p>Information Technology</p>
        </div>

        {/* Duplicate */}

        <div className={style.courses}>
          <div>
            <img src={Hospital} alt="" />
          </div>
          <p>Medicine</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Tuition} alt="" />
          </div>
          <p>Education</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={ArtPrices} alt="" />
          </div>
          <p>Art and Humanities</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Grouptask} alt="" />
          </div>
          <p>Social Science</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Law} alt="" />
          </div>
          <p>Law</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={iMac} alt="" />
          </div>
          <p>Information Technology</p>
        </div>
        </div>
        </div>
            </div>
            </div>


    )
}