import style from "./nav.module.scss"
import Logo from "../../Assets/Images/Logo.svg" ;
import { NavLink as Link } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";


export const Navbar = () => {

    return(
      <div className={style.navContainer}>

        <div className={style.logo}>
        <img src={Logo} alt="CourseQuestHub"/>  
        <h4>CourseQuestHub</h4>
        </div>

        <div className={style.navButton} >
            <button className={style.loginButton} ><a href="src/Components/Pages/LoginPage">Login</a></button>
            <button className={style.registerButton}><a href="src/Components/Pages/SignupPage">Sign Up</a></button>
        </div>


      </div>
    )
}