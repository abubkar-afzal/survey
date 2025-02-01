import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Goto =()=>{
    return(<><Fade cascade>
    <div spellCheck="true" className="grid justify-items-center my-[2rem]">
    <Slide direction="left"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/questions`}>
            <button spellCheck="true"
              className={`sm:text-[---c4]  sm:bg-[---c9]  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
            >
              Question's
            </button>
          </Link></Slide>
          <Slide direction="right"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/blogs`}>
            <button spellCheck="true"
              className={`sm:text-[---c4]  sm:bg-[---c9]  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Blog's
            </button>
          </Link></Slide>
          <Slide direction="left"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/answersDashboard`}>
            <button spellCheck="true"
              className={`sm:text-[---c4]  sm:bg-[---c9]  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Answer's
            </button>
          </Link></Slide>
          <Slide direction="up"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/passwordChange`}>
          <div spellCheck="true" className="hover:underline sm:text-[11px] mm:text-[13px] lm:text-[17px] t:text-[20px] l:text-[27px] ll:text-[32px] k:text-[40px] text-[---f1] mt-[1rem] ml-[6rem] t:ml-[1px]">
                  Change Password !!
                </div>
          </Link></Slide>
    </div></Fade>
    </>)
}
export default Goto;