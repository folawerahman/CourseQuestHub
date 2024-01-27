import React, {useState} from "react";
import style from "./mid.module.scss";
import Engineering from "../../Assets/Images/Engineering.svg";
import Tech from "../../Assets/Images/Tech.svg";
import Education from "../../Assets/Images/Education.svg";
import Construction from "../../Assets/Images/Construction.svg";
import Banking from "../../Assets/Images/Banking.svg";
import UniqueFeat from "../UniqueFeatures";


export const MidSection = () => {
    const [courseSection, setcourseSection] = useState("250px"); 

    return( 
        
        <div className={style.coursecontainer}>

                <div className={style.container}>
                        
                        <div>
                            <img src={Engineering} alt="" />
                            <p>Engineering</p> 
                        </div>
                        <div>
                            <img src={Tech} alt="" />
                            <p>Tech</p>  
                        </div>
                        <div>
                            <img src={Banking} alt="" />
                            <p>Banking</p>  
                        </div>
                        <div>
                            <img src={Construction} alt="" />
                            <p>Construction</p>  
                        </div>
                       
                </div> 

                <div className={style.Educontainer}>
                        <div>
                                <img src={Education} alt="" />
                                <p>Education</p>     
                        </div>
                </div>

        </div>
      
      )
    }
