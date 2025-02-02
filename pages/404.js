import React from "react"
import imageof404 from "./images/404.svg"
import Image from "next/image"
import Link from "next/link"
import { Fade, Slide } from "react-awesome-reveal"
export default function Custom404() {
    return<>
    <Fade duration={2000} cascade>
        <Slide direction="down" duration={1000}>
    <div className="min-h-screen content-center m-4 justify-items-center text-center space-y-[1rem]">
    <Link href={`${process.env.NEXT_PUBLIC_HOST}/`}>
                <button
                  spellCheck="true"
                  className={`sm:text-[---c4]  sm:bg-[---c3] p-2 px-8 m-2 w-auto rounded-[2rem] font-mono shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] hover:scale-[1.12]  hover:bg-[---c2] duration-[2s]`}
                >
                  Home
                </button>
              </Link>
    <Image src={imageof404} width={700} height={700}/>
    <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold font-serif">
                I'm sorry this page is under construction !!
                </p>
    </div></Slide></Fade>
    </>
  }