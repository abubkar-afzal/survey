import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

const About =()=>{
    return(
        <>
        <div className="m-4 space-y-2 text-justify">
            <div className="text-center sm:text-[25px] font-sans">It's <a className="sm:text-[---c5] font-black ">Abubakar Afzal </a>.</div>
            <div className="text-center sm:text-[12px] font-semibold">I'm the indictor of this survey.</div>
            <p className="sm:my-2">I'm a student of Intermediate in <a className="sm:underline hover:text-[---f1]">Govt, Islmaia College Railway Road, Lahore, Pakistan</a>.</p>
            <p className="sm:my-2 sm:h-[12rem] overflow-y-scroll bg-[---c8] p-2 text-[---c4]">I took this suervy to get answers of my personal questions. There question as a student and as a boy I faced and I'm confused in these questions. So, I decided to took a survey in my college but when I take suggestion of My Statistic Teacher that I should took survey one by one on paper to everyone or I make a website/portal for this purpose. So, She suggest me that taking survey on paper is tradational way your method of website survey I quite good in this cause.Then I make this portal. </p>
            <p className="sm:my-2 font-thin">If you give me your personal opinion as you thing it will very helpful for me and some of more like me.</p>
            <p className="sm:my-2 font-serif">If I got a large data then I will make it publish by making a new webiste and I linked it with this one.</p>
            <div className="text-center ">
                <span className="font-bold">: Contact :</span><br/>
                            <div className="flex sm:my-[1.5rem] w-auto place-content-center ">
                            <span className="sm:flex px-2 sm:hover:underline sm:text-[---wa] hover:scale-[1.3] duration-[1s]">
                             <IoLogoWhatsapp className="sm:text-[22px] mr-2"/> 
                            </span><br/>
                            <span className="sm:flex px-2 sm:hover:underline sm:text-[---em] hover:scale-[1.3] duration-[1s]">
                             <MdOutgoingMail className="sm:text-[22px] mr-2"/> 
                            </span><br/>
                            <span className="sm:flex px-2 sm:hover:underline sm:text-[---gh] hover:scale-[1.3] duration-[1s]">
                              <SiGithub className="sm:text-[22px] mr-2"/>
                            </span><br/>
                            <span className="sm:flex px-2 sm:hover:underline sm:text-[---ig] hover:scale-[1.3] duration-[1s]">
                             <RiInstagramFill className="sm:text-[22px] mr-2"/> 
                            </span><br/>
                            <span className="sm:flex px-2 sm:hover:underline sm:text-[---ln] hover:scale-[1.3] duration-[1s]">
                              <FaLinkedin className="sm:text-[22px] mr-2"/>
                            </span><br/>
                            </div>
            </div>
                        </div></>
    )
}
export default About;