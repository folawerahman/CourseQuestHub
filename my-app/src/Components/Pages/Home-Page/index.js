import React from "react";
import { WelcomeVideo }from "./Welcome-Video"
import { HomeNavbar } from "./HomeNavBar";
import { Footer } from "../../Footer";
import { Testimonials } from "../Landing-Page/Partners"
import { FindCourse } from "./FindCourse";


export const HomePage = () => {
    return(
<div>
    <HomeNavbar/>
    <WelcomeVideo/>
    <FindCourse/>
    <Testimonials/>
    <Footer/>
</div>
    )
}