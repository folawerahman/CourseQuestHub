import { Navbar } from "../../Navbar";
import { Register } from "./CareerPath";
import { MidSection } from "./MidSection";
import { Mission } from "./UniqueFeatures";
import { Testimonials } from "./Partners";
import { Footer } from "../../Footer";
import { Vision } from "./Vision";
import { Article } from "./Article";

export const LandingPage = () => {
    return(
        <div>
            <Navbar/>
            <Register/>
            <MidSection/>
            <Mission/>
            <Testimonials/>
            <Vision/>
            <Article/>
            <Footer/>
        </div>
    )
}