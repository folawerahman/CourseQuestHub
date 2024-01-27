import React, {useState} from "react";
import style from "./uniF.module.scss";
import Quiz from "../../Assets/Images/Quiz.svg";
import GradCap from "../../Assets/Images/GradCap.svg";
import QuesMark from "../../Assets/Images/QuesMark.svg";
import Institution from "../../Assets/Images/Institution.svg";
import Ellipse from "../../Assets/Images/Ellipse-Features.svg";

export const UniqueFeat = () => {
    const [mobileCard, setMobileCard] = useState("320px");

    const handleMobileCard = () =>{
      if (mobileCard === "featCard"){

      }  
    }

    return(
        <div>

         {/* Parent Container  */}
        <div className={style.featContainer}>

        {/* First Card */}
            <div className={`${style.featCard} ${style.mobileCard}`}>
                <div className={style.mobileCard}>
                    <img src={Quiz} alt="" />
                    <p>To help determine best pick</p>
                </div>
                <div className={style.mobileCard}>
                    <img src={GradCap} alt=""/>
                    <p>Search from numerous courses</p>
                </div>
            </div>

        {/* Circle Component */}
            {/* <div className={style.circle}>
            <img src={Ellipse} alt=""/>
            <h3>Our Unique Features</h3>
            </div> */}
            <div className={style.bluecircle}>
            <h3>Our Unique Features</h3>
        </div>

        {/* Second Card */}
            <div className={`${style.featCard} ${style.mobileCard}`} >
                <div className={style.mobileCard}>
                    <img src={QuesMark} alt=""/>
                    <p>Ask our mentors any questions </p>
                </div>
                <div className={style.mobileCard}>
                    <img src={Institution} alt=""/>
                    <p>Every institution with your course</p>
                </div>
            </div>


        </div>

        </div>
    )
}