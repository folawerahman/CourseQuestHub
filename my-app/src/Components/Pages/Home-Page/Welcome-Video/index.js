import React, {useState} from "react";
import students  from "../../../../Assets/Images/Students.svg";
import style from "./welcome.module.scss";


export const Greeting = () => {
    // const [toggle, setToggle] = useState(true);
  
    // function handleClick() {
    // setToggle(!toggle)
    // }
  
      return(
          <div>
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