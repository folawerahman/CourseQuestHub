import { Navbar } from "../../Navbar";
import { CareerPath } from "./CareerPath";
import { MidSection } from "./MidSection";
import { UniqueFeat } from "./UniqueFeatures";
import { Partners } from "./Partners";
import { Footer } from "../../Footer";

export const LandingPage = () => {
    return(
        <div>
            <Navbar/>
            <CareerPath/>
            <MidSection/>
            <UniqueFeat/>
            <Partners/>
            <Footer/>
        </div>
    )
}