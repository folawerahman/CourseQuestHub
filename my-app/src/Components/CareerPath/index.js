import style from "./career.module.scss";
import Path from "../../Assets/Images/CareerPath.svg" 

export const CareerPath = ()  => {
    return(
        // Parent component
        <div className={style.careerContainer} >

        {/* Login component */}
            <div className={style.careerText}>
                <h2>Wondering what path to go next?</h2>
                <p>Discover your dream career right here</p>
                <div className={style.navButton} >
            <button className={style.loginButton} >Login</button>
            <button className={style.registerButton}>Register</button>
        </div>
            </div>

        {/* Image Component */}
            <div className={style.path}><img src={Path} alt="" /></div>

        </div>
    )
}