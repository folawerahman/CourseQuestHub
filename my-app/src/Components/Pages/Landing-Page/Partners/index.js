import style from "./partners.module.scss";
import UKHub from "../../../../Assets/Images/UkHub.svg";

export const Partners = () => {
    return(
        <div className={style.partners}>

            <div><h3>Sponsors</h3></div>
            <div><img src={UKHub} alt=""/></div>
            <div><h3>DevCareer</h3></div>
        </div>
    )
}