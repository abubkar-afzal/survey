import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Safety =()=>{
    return<><div className=" mt-[1rem] justify-items-center text-center space-y-[1rem]">
        <Fade duration={2000} >
            <Slide direction="down" duration={1000} triggerOnce>
                <p spellCheck="true" className="text-center  text-[19px] sm:text-[21px] mm:text-[25px] lm:text-[28px] t:text-[25px] l:text-[30px] ll:text-[35px] k:text-[41px] font-semibold font-serif mt-[2rem] m-4">Safety</p>
                <p spellCheck="true" className="text-center  text-[15px] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] w-[70vw]">
                    Your Data Will Be Save On This Site. We Will Don't Share Your Data With Any Third Part Software. If Any Of Problem You Face Then Please Contact Me I Will Help You And Solve Your Problem.
                </p>
            </Slide>
        </Fade>
        </div></>
}
export default Safety;