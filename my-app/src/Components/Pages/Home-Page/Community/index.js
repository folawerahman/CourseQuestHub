import React, { useState } from "react";
import style from "./comm.module.scss";
import button from "../../Landing-Page/CareerPath/career.module.scss"
import { DynamicButton } from "../HomeButton";



export const JoinCommunity = () => {

    const handleCommunity = {
        background: '#3173C8',
        color: '#fff',
        border: 'none',
        padding: '10px 90px',
        borderRadius: '30px'
    };

    return(
        <div className={style.missionContainer}>

            <div className={style.MissionText}>
                <h2>BE A PART OF OUR VIBRANT COMMUNITY</h2>
                <p>Find your tribe! Connect with peers and mentors in our dynamic community. Ask questions, share experiences, and gain valuable insights to confidently navigate your career path.</p>

                <DynamicButton style={handleCommunity} value={"Join Our Community"} />

            </div>

        </div>
    )
}