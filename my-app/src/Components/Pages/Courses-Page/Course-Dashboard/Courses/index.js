import React from "react";
import { HomeNavbar } from "../../../Home-Page/HomeNavBar";
import style from "../../Course-Dashboard/course.module.scss"
import extraStyle from "./dynam.module.scss"

export const DynamicCourses = () => {
    return(
        <div>
        <HomeNavbar/>
        <div className={extraStyle.coursesContainer}>
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

    <div className={`${style.MidSection} ${extraStyle.MidSection}`}>
            <h3>Medicine</h3>
            <p>Medicine as a profession involves the study, practice, and application of medical knowledge and skills to diagnose, treat, and prevent illnesses. Becoming a medical professional typically requires years of education, training, and practical experience.</p>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tH_Jriu7XkU?si=JoiZEOy9tOQbLiMn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

            </div>
        </div>
        </div>

     
     
    )
}