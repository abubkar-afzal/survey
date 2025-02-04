import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/survey-logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  
  return (
    <>
      <div spellCheck="true" className="sm:h-auto  mt-[10px] sm:content-center ml-4 t:text-center t:place-items-center sm:text-[12px] mm:text-[16px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">
        <hr className="h-[2px] t:h-[3px] ml-[-2rem] bg-black"/>
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/`}>
        <div spellCheck="true" className="cursor-pointer sm:flex sm:space-x-1 sm:h-[70px] sm:m-2 t:ml-[2rem] ">
          <Image src={logo} width={120} height={100}  className=" sm:w-[90px] mm:w-[100px] lm:w-[110px] t:w-[132px] l:w-[135px] ll:w-[140px] k:w-[155px] sm:h-[70px] mm:h-[78px] lm:h-[80px] t:h-[62px] l:h-[65px] ll:h-[70px] k:h-[85px]"/>
          
        </div>
       </Link>
        <div spellCheck="true" className="">
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/about`}>
          <div spellCheck="true" className=" ml-2">
            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-black sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">About</span><br/>
          
          </div>
        </Link>
        </div>

        <div spellCheck="true">
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/blogs`}>
          <div spellCheck="true" className=" ml-2">
            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-black sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">Blogs</span><br/>
      
          </div>
          </Link>
        </div>
        <div spellCheck="true">
          <div spellCheck="true" className="my-4 ml-2 h-auto ">
            <span spellCheck="true" className="font-bold">Contact</span>
            <br/>
            <br />
            <div spellCheck="true" className="t:flex t:flex-wrap t:place-content-center t:space-x-[2rem]">
          <Link href={`https://wa.me/send?phone=923270972423&text=How Can I Help You ?`}>
            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---wa]">
             <IoLogoWhatsapp className="sm:text-[22px] mr-2"/> +923270972423
            </span><br/></Link>
            <Link href={`mailto:hafizabubakarafzal@gmail.com`}>
            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---em]">
             <MdOutgoingMail className="sm:text-[22px] mr-2"/> hafizabubakarafzal@gmail.com
            </span><br/></Link>
            <Link href={`https://github.com/abubkar-afzal`}>
            
            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---gh]">
              <SiGithub className="sm:text-[22px] mr-2"/>GitHub
            </span><br/></Link>
            <Link href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`}>

            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---ig]">
             <RiInstagramFill className="sm:text-[22px] mr-2"/> Instagram
            </span><br/></Link>
            {/* <Link href={`/`}>

            <span spellCheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---ln]">
              <FaLinkedin className="sm:text-[22px] mr-2"/>Linkedin
            </span><br/></Link> */}
            </div>
          </div>
        </div>
      </div>
      <hr  className="h-[2px] bg-black"/>
      <div spellCheck="true" className="sm:mb-[10px] ml-2 mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] ">
        <div spellCheck="true" className="sm:flex my-4 space-x-[10px] text-center mx-2 flex-wrap t:place-content-center t:space-x-[2rem]">
          <p spellCheck="true"></p>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/legal`}><p spellCheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">Legal</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/safety`}><p spellCheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">Safety&PrivacyCenter</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/privacy`}><p spellCheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">PrivacyPolicy</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/404`}><p spellCheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">Accessibility</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/`}><p spellCheck="true" className="text-black">&copy;2025 Survey </p></Link>
        </div>
        <div spellCheck="true" className="t:text-center">
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/404`}>
        <button className="border-[2px] border-[---fo1] px-3 mx-4 mb-6 p-[4px] rounded-[2rem] hover:bg-[---c8] hover:text-[---c4] ">
          English
        </button></Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
