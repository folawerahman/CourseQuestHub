import React from "react";
import students  from "../../../../Assets/Images/Students.svg";
import style from "./welcome.module.scss";


export const WelcomeVideo = () => {

    return(
        <div className={style.welcomebg}>
           <div className={style.welcomeContainer}>
           <div className={style.welcomeText}>
           <h2>Wondering what path to go next?</h2>
           <p>Discover your dream career right here</p>
           <button className={style.register}>Register</button>
           </div>
           </div>
         
        </div>




    )



}