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
      <div className="sm:h-auto  mt-[10px] sm:content-center ml-4 t:text-center t:place-items-center mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">
        <hr className="h-[2px] ml-[-2rem] bg-black"/>
        <div className="sm:flex sm:space-x-1 sm:h-[70px] sm:m-2 t:ml-[2rem] ">
          
          <Image src={logo} width={120} height={100}  className=" sm:w-[90px] mm:w-[100px] lm:w-[110px] t:w-[132px] l:w-[135px] ll:w-[140px] k:w-[155px] sm:h-[70px] mm:h-[78px] lm:h-[80px] t:h-[62px] l:h-[65px] ll:h-[70px] k:h-[85px]"/>
          
        </div>
       
        <div className="">
        <Link href={`http://localhost:3000/components/about`}>
          <div className=" ml-2">
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-black sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">About</span><br/>
          
          </div>
        </Link>
        </div>

        <div>
        <Link href={`http://localhost:3000/components/blogs`}>
          <div className=" ml-2">
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-black sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px]">Blogs</span><br/>
      
          </div>
          </Link>
        </div>
        <div>
          <div className="my-4 ml-2 h-auto ">
            <span className="font-bold">Contact</span>
            <br/>
            <br />
            <div className="t:flex t:flex-wrap t:place-content-center t:space-x-[2rem]">
          <Link href={`https://wa.me/send?phone=923270972423&text=welcome`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---wa]">
             <IoLogoWhatsapp className="sm:text-[22px] mr-2"/> +923270972423
            </span><br/></Link>
            <Link href={`mailto:hafizabubakarafzal@gmail.com`}>
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---em]">
             <MdOutgoingMail className="sm:text-[22px] mr-2"/> hafizabubakarafzal@gmail.com
            </span><br/></Link>
            <Link href={`https://github.com/abubkar-afzal`}>
            
            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---gh]">
              <SiGithub className="sm:text-[22px] mr-2"/>GitHub
            </span><br/></Link>
            <Link href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`}>

            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---ig]">
             <RiInstagramFill className="sm:text-[22px] mr-2"/> Instagram
            </span><br/></Link>
            {/* <Link href={`/`}>

            <span className="sm:flex px-2 sm:hover:underline sm:text-[---fo1] hover:text-[---ln]">
              <FaLinkedin className="sm:text-[22px] mr-2"/>Linkedin
            </span><br/></Link> */}
            </div>
          </div>
        </div>
      </div>
      <hr  className="h-[2px] bg-black"/>
      <div className="sm:mb-[10px] ml-2 mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] ">
        <div className="sm:flex my-4 space-x-[10px] text-center mx-2 flex-wrap t:place-content-center t:space-x-[2rem]">
          <p></p>
          <p className="sm:hover:underline sm:text-[---fo1] hover:text-black">Legal</p>
          <p className="sm:hover:underline sm:text-[---fo1] hover:text-black">Safety&PrivacyCenter</p>
          <p className="sm:hover:underline sm:text-[---fo1] hover:text-black">PrivacyPolicy</p>
          <p className="sm:hover:underline sm:text-[---fo1] hover:text-black">Accessibility</p>
          <p className="text-black">&copy;2025 Survey </p>
        </div>
        <div className="t:text-center">
        <button className="border-[2px] border-[---fo1] mx-4 mb-6 p-[4px] rounded-[2rem] hover:bg-[---c8] ">
          English
        </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
