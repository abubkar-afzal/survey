import React from "react";
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
      <div spellcheck="true" className="sm:h-auto  mt-[10px] sm:content-center ml-4 t:text-center t:place-items-center mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">
        <hr className="h-[2px] t:h-[3px] ml-[-2rem] bg-black"/>
        <Link href={`http://localhost:3000/`}>
        <div spellcheck="true" className="cursor-pointer sm:flex sm:space-x-1 sm:h-[70px] sm:m-2 t:ml-[2rem] ">
          <Image src={logo} width={120} height={100}  className=" sm:w-[90px] mm:w-[100px] lm:w-[110px] t:w-[132px] l:w-[135px] ll:w-[140px] k:w-[155px] sm:h-[70px] mm:h-[78px] lm:h-[80px] t:h-[62px] l:h-[65px] ll:h-[70px] k:h-[85px]"/>
          
        </div>
       </Link>
        <div spellcheck="true" className="">
        <Link href={`http://localhost:3000/components/about`}>
          <div spellcheck="true" className=" ml-2">
            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-black sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">About</span><br/>
          
          </div>
        </Link>
        </div>

        <div spellcheck="true">
        <Link href={`http://localhost:3000/components/blogs`}>
          <div spellcheck="true" className=" ml-2">
            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-black sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">Blogs</span><br/>
      
          </div>
          </Link>
        </div>
        <div spellcheck="true">
          <div spellcheck="true" className="my-4 ml-2 h-auto ">
            <span spellcheck="true" className="font-bold">Contact</span>
            <br/>
            <br />
            <div spellcheck="true" className="t:flex t:flex-wrap t:place-content-center t:space-x-[2rem]">
          <Link href={`https://wa.me/send?phone=923270972423&text=welcome`}>
            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---wa]">
             <IoLogoWhatsapp className="sm:text-[22px] mr-2"/> +923270972423
            </span><br/></Link>
            <Link href={`mailto:hafizabubakarafzal@gmail.com`}>
            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---em]">
             <MdOutgoingMail className="sm:text-[22px] mr-2"/> hafizabubakarafzal@gmail.com
            </span><br/></Link>
            <Link href={`https://github.com/abubkar-afzal`}>
            
            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---gh]">
              <SiGithub className="sm:text-[22px] mr-2"/>GitHub
            </span><br/></Link>
            <Link href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`}>

            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---ig]">
             <RiInstagramFill className="sm:text-[22px] mr-2"/> Instagram
            </span><br/></Link>
            {/* <Link href={`/`}>

            <span spellcheck="true" className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---ln]">
              <FaLinkedin className="sm:text-[22px] mr-2"/>Linkedin
            </span><br/></Link> */}
            </div>
          </div>
        </div>
      </div>
      <hr  className="h-[2px] bg-black"/>
      <div spellcheck="true" className="sm:mb-[10px] ml-2 mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] ">
        <div spellcheck="true" className="sm:flex my-4 space-x-[10px] text-center mx-2 flex-wrap t:place-content-center t:space-x-[2rem]">
          <p spellcheck="true"></p>
          <p spellcheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">Legal</p>
          <p spellcheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">Safety&PrivacyCenter</p>
          <p spellcheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">PrivacyPolicy</p>
          <p spellcheck="true" className="sm:hover:underline sm:text-[---fo1] hover:text-black">Accessibility</p>
          <p spellcheck="true" className="text-black">&copy;2025 Survey </p>
        </div>
        <div spellcheck="true" className="t:text-center">
        <button className="border-[2px] border-[---fo1] px-3 mx-4 mb-6 p-[4px] rounded-[2rem] hover:bg-[---c8] hover:text-[---c4] ">
          English
        </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
