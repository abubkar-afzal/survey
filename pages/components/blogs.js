import React from "react";
import blogimg from "../../public/survey-logo.png"
import Image from "next/image";

const Blogs =()=>{
    return(
        <> 
        <div className="justify-items-center">
            
                <div className="sm:font-bold sm:text-[24px] mm:text-[28px] lm:text-[30px] t:text-[32px] l:text-[39px] ll:text-[45px] k:text-[65px] sm:mt-[1rem] k:my-[2rem]">BLOGS</div>
               
                <div className="sm:w-auto sm:h-auto bg-[---c9] place-items-center text-center items-center rounded-[2rem]  mt-[1rem]  sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[29px] ll:text-[35px] k:text-[45px] sm:mt-[1rem] k:my-[2rem] m-[1rem] ">
                    <Image src={blogimg} alt="blogImage" width={300} height={300} className="sm:w-auto sm:h-auto m-2" />
                    
                    <div className="bg-[---c3] w-full sm:h-auto  sm:rounded-b-[2rem] text-white  p-[1rem]">This is our Survey Blog</div>
                                    </div>
        </div>
        </>
    )
}
export default Blogs;