import style from "./nav.module.scss"
import Logo from "../../Assets/Images/Logo.svg" ;


export const Navbar = () => {

    return(
      <div className={style.navContainer}>

        <div className={style.logo}>
        <img src={Logo} alt="CourseQuestHub"/>  
        <h4>CourseQuestHub</h4>
        </div>

        <div className={style.navButton} >
            <button className={style.loginButton} >Login</button>
            <button className={style.registerButton}>Register</button>
        </div>


      </div>
    )
}