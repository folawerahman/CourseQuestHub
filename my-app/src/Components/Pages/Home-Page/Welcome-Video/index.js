import React from "react";
import hellocover  from "../../../../Assets/Images/hello.svg";
import style from "./welcome.module.scss";


export const WelcomeVideo = () => {

    return(
        <div className={style.welcomebg}>
           <h2>Welcome John</h2>
           <div className={style.welcomeContainer}>

           <div className={style.welcomeText}>
            <h3>At CourseQuestHub, we are dedicated to <span> empowering secondary school Students</span> in Nigeria to navigate the exciting journey of choosing their future careers</h3>
            <p>Whether you're considering the traditional university path or exploring vocational options, we are Here to Guide you</p>
           </div>


           {/* Welcome Video */}
           <div className={style.welcomevideo}>
             {/* <video controls autoPlay loop muted></video> */}
             <img className={style.helloImage}  src={hellocover} width={300} alt="" ></img>
             <div className={style.watchButton}>Watch Welcome Video</div>
           </div>
           </div>
         
        </div>




    )



}