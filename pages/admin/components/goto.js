import Link from "next/link";
import React from "react";

const Goto =()=>{
    return(<>
    <div className="grid justify-items-center my-[2rem]">
    <Link href={`http://localhost:3000/admin/components/questions`}>
            <button
              className={`sm:text-[---c4]  sm:bg-[---c9]  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
            >
              Question's
            </button>
          </Link>
          <Link href={`http://localhost:3000/admin/components/blogs`}>
            <button
              className={`sm:text-[---c4]  sm:bg-[---c9]  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Blog's
            </button>
          </Link><Link href={`http://localhost:3000/admin/components/answersDashboard`}>
            <button
              className={`sm:text-[---c4]  sm:bg-[---c9]  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Answer's
            </button>
          </Link>
    </div>
    </>)
}
export default Goto;