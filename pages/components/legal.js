import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Legal =()=>{
    return<><div className="min-h-screen content-center">
    <Fade duration={2000} >
        <Slide direction="down" duration={1000}>
            <p spellCheck="true" className="text-center mt-[50vh] mb-[40vh] text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold font-serif">
               This is a legal survey Webiste !!
            </p>
        </Slide>
    </Fade></div>
    </>
}
export default Legal;