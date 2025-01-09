import React from "react";
import blogimg from "../../public/survey-logo.png"
import Image from "next/image";

const Blogs =()=>{
    return(
        <> 
        <div className="justify-items-center">
            
                <div className="sm:text-[1.7rem] sm:font-bold ">BLOGS</div>
                
                <hr  className="h-[1.3px] w-[100vw] bg-black my-2"/>
                <hr  className="h-[1.3px] w-[100vw] bg-black my-2"/>

                <div className="sm:w-[250] sm:h-[250] bg-[---c9] place-content-center text-center items-center rounded-[2rem] flex flex-col">
                    <Image src={blogimg} alt="blogImage" width={300} height={300} className="sm:w-[150px] sm:h-[150px] m-2" />
                    <div className="w-full h-[6rem]">
                    <div className="bg-[---c3] w-full sm:h-[6rem] sm:rounded-b-[2rem] text-white  p-2">This is our Survey Blog</div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Blogs;