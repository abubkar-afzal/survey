import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Privacy =()=>{
    return<><div className="min-h-screen content-center justify-items-center text-center space-y-[1rem]">
    <Fade duration={2000} >
        <Slide direction="down" duration={1000} triggerOnce>
            <p spellCheck="true" className="text-center  text-[19px] sm:text-[21px] mm:text-[25px] lm:text-[28px] t:text-[25px] l:text-[30px] ll:text-[35px] k:text-[41px] font-semibold font-serif mt-[2rem] m-4">Privacy Policy</p>
            <p spellCheck="true" className="text-center  text-[15px] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] w-[70vw]">
               Our Private Policy Is Very Strong. Your Personal Data Is Secure With Us. We Do Not Share Your Personal Data With Anyone. We Only Use Your Data For Survey Purpose. We Do Not Share Your Data With Any Third Party. We Do Not Use Your Data For Any Other Purpose. We Do Not Share Your Data With Any Other Company. We Do Not Share Your Data With Any Other Person. We Do Not Share Your Data With Any Other Organization.</p>
        </Slide>
    </Fade>
    </div></>
}
export default Privacy;