import React from "react";
import { NavLink as Link } from "react-router-dom";
import style from "./footer.module.scss"
import styled from "styled-components";
import facebook from "../../Assets/Images/logos_facebook.svg";
import insta from "../../Assets/Images/skill-icons_instagram.svg";
import twitter from "../../Assets/Images/devicon_twitter.svg";


export const Footer = () => {
    return(
        <div className={style.footerContainer}>

        <div className={style.contactContainer}>
            <div>
                <h5> Contact Us</h5>
                <NavLink to="tel:09033265715">Phone 1: 09033265715</NavLink>
                <NavLink to="tel:08192523881">Phone 2: 08192523881</NavLink>
                <NavLink to="mailto:coursequesthub@gmail.com">Email: coursequesthub@gmail.com</NavLink>


            </div>

            <div className={style.socials}>
            <h5> Connect With Us on Social Media</h5>
            <span>
            <img src={insta}/>
            <NavLink to="insta:coursequesthub">coursequesthub</NavLink>
            </span>
            <span>

            <img src={twitter}/>
                <NavLink to="twitter:coursequesthub">coursequesthub</NavLink>
            </span>
            <span>

                <img src={facebook}/>
                <NavLink to="facebook:coursequesthub">coursequesthub</NavLink>
            </span>

            </div>
        </div>
        <div className={style.copyright}>Contact us | Copyright 2024. All rights reserved.</div>
        </div>
    )
}

export const NavLink = styled(Link)`
display: block;
padding: 5px 0;
text-decoration: none;
color: #fff;
`