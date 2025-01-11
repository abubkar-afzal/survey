import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="m-4 space-y-2 ll:space-y-[1.5rem] k:space-y-[2rem]  text-justify t:p-4  k:p-10  l:text-center l:place-items-center l:p-10  k:text-center k:place-items-center">
        <div className="text-center sm:text-[25px] mm:text-[30px] lm:text-[35px] t:text-[50px] l:text-[55px] ll:text-[65px] k:text-[105px]  font-sans">
          It's <a className="sm:text-[---c5] font-black ">Abubakar Afzal </a>
        </div>
        <div className="text-center sm:text-[12px] mm:text-[15px] lm:text-[18px] t:text-[21px] l:text-[25px] ll:text-[29px] k:text-[50px] font-semibold">
          I'm the indictor of this survey.
        </div>
        <p className="sm:my-2 mm:text-[18px] lm:text-[20px] t:text-[25px] l:text-[30px] ll:text-[35px] k:text-[45px] mm:mb-4">
          I'm a student of Intermediate in. 
          <Link href={`https://maps.app.goo.gl/rZwTdKpLKLXEp9Jq5`}
             className="sm:underline hover:text-[---f1]">
               Govt, Islmaia College Railway Road, Lahore, Pakistan
            
          </Link>
          .
        </p>
        <p className="hidebar sm:my-2 sm:h-[12rem] mm:h-[15rem] ml:h-[17rem] t:h-[12rem] l:h-[15rem] ll:h-[17rem] k:h-[20rem] k:w-[80vw] overflow-y-scroll bg-[---c8] p-2 text-[---c4] mm:text-[18px] lm:text-[20px] t:text-[25px] l:text-[30px] ll:text-[35px] k:text-[45px] text-left">
          I took this suervy to get answers of my personal questions. There
          question as a student and as a boy I faced and I'm confused in these
          questions. So, I decided to took a survey in my college but when I
          take suggestion of My Statistic Teacher that I should took survey one
          by one on paper to everyone or I make a website/portal for this
          purpose. So, She suggest me that taking survey on paper is tradational
          way your method of website survey I quite good in this cause.Then I
          make this portal.
        </p>
        <p className="sm:my-2 font-thin mm:text-[18px] lm:text-[20px] t:text-[25px] l:text-[30px] ll:text-[35px] k:text-[45px]">
          If you give me your personal opinion as you thing it will very helpful
          for me and some of more like me.
        </p>
        <p className="sm:my-2 font-serif mm:text-[18px]lm:text-[20px] t:text-[25px] l:text-[30px] ll:text-[35px] k:text-[45px]">
          If I got a large data then I will make it publish by making a new
          webiste and I linked it with this one.
        </p>
        <div className="text-center ">
          <span className="font-bold mm:text-[22px] lm:text-[25px] t:text-[28px] l:text-[30px] ll:text-[40px] k:text-[60px]">: Contact :</span>
          <br />
          <div className="flex sm:my-[1.5rem] w-auto place-content-center ll:space-x-[2rem] k:space-x-[3rem] ">
          <Link href={`https://wa.me/send?phone=923270972423&text=welcome`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---wa] hover:scale-[1.3] duration-[1s]">
              <IoLogoWhatsapp className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[50px] ll:text-[45px] k:text-[80px] mr-2" />
            </span>
            <br /></Link>
            <Link href={`mailto:hafizabubakarafzal@gmail.com`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---em] hover:scale-[1.3] duration-[1s]">
              <MdOutgoingMail className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[50px] ll:text-[45px] k:text-[80px] mr-2" />
            </span>
            <br /></Link>
            <Link href={`https://github.com/abubkar-afzal`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---gh] hover:scale-[1.3] duration-[1s]">
              <SiGithub className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[50px] ll:text-[45px] k:text-[80px] mr-2" />
            </span>
            <br /></Link>
            <Link href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---ig] hover:scale-[1.3] duration-[1s]">
              <RiInstagramFill className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[50px] ll:text-[45px] k:text-[80px] mr-2" />
            </span>
            <br /></Link>
            <Link href={`/`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---ln] hover:scale-[1.3] duration-[1s]">
              <FaLinkedin className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[50px] ll:text-[45px] k:text-[80px] mr-2" />
            </span>
            <br /></Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
