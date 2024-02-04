import React, {useState} from "react";
import students  from "../../../../Assets/Images/Students.svg";
import style from "./welcome.module.scss";


export const Greeting = () => {
    const [toggle, setToggle] = useState(true);
  
    function handleClick() {
    setToggle(!toggle)
    }
  
      return(
          <div style={{display: toggle ? 'block' : 'none'}}>
            <div className={style.exitIconContainer} onClick={handleClick}>
        <svg className={style.exitIcon} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 30 30" fill="none">
          <path
            d="M13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L11.0607 10L15.0303 6.03033C15.3232 5.73744 15.3232 5.26256 15.0303 4.96967C14.7374 4.67678 14.2626 4.67678 13.9697 4.96967L10 8.93934L6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L8.93934 10L4.96967 13.9697C4.67678 14.2626 4.67678 14.7374 4.96967 15.0303C5.26256 15.3232 5.73744 15.3232 6.03033 15.0303L10 11.0607L13.9697 15.0303Z"
            fill="#fff" />
        </svg>
      </div>
  <section className={style.GreetingContainer}>
        <h4>Welcome John</h4>
      <div className={style.greetingCard}>
        <div className={style.g}>
          <p>Get ready to explore your future career path. Watch our quick welcome video below to kickstart your journey.</p>
        </div>

      
            </div>
    </section>
          </div>
      )
  }