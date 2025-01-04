import React, { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdAccountCircle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaMessage } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import  Logo  from '../images/survey-logo.svg';
import Image from "next/image";

const Navbar = () => {
  const [showmenu, hidemenu] = useState(true);
  const [showcross, hidecross] = useState(false);
  
  const onepressmenu = () => {
    hidemenu(false);
    hidecross(true);
  };

  const onepresscross = () => {
    hidemenu(true);
    hidecross(false);
  };
  let home;
  let about;
  let blogs;
  let login;

  const router = useRouter();
  const currentUrl = router.asPath;
  if (currentUrl === "/") {
    home = "sm:text-[---c4]  sm:bg-[---c3]";
  } else if (currentUrl === "/components/about") {
    about = "sm:text-[---c4] sm:bg-[---c3]";
  } else if (currentUrl === "/components/blogs") {
    blogs = "sm:text-[---c4] sm:bg-[---c3]";
  } else if (currentUrl === "/components/Login") {
    login = "sm:text-[---c4] sm:bg-[---c3]";
  }

  return (
    <>
      <div className="sm:flex sm:fixed  sm:z-10 w-[100vw]">
        <div className="py-2 pl-2 grid grid-cols-2  ">
            <div className="sm:relative sm:z-10">
            <div
              onClick={onepresscross}
              className={`${
                showcross ?  "inline" :"hidden" 
              } sm:h-[4em] sm:w-[3rem] sm:rounded-[2rem] sm:cursor-pointer`}
            >
              <GiHamburgerMenu className="sm:w-[2rem] sm:h-[2rem] sm:mt-[13px] mm:mt-[18px]" />
            </div>
        
            <div
              onClick={onepressmenu}
              className={`${
                showcross ?  "hidden":"inline" 
              } sm:h-[4em] sm:w-[3rem] sm:rounded-[2rem] sm:cursor-pointer pt-[2rem]`}
            >
              <RxCross2 className="sm:w-[2rem] sm:h-[2rem] sm:mt-[13px] mm:mt-[18px]" />
            </div>
         
            </div>
          <div
            className={
              showmenu
                ? "NAVBAR sm:bg-[---c10] sm:grid sm:grid-cols-1 sm:left-0  sm:bottom-0  sm:grid-rows-8 sm:h-[100vh] sm:w-auto  sm:fixed sm:duration-[2s] "
                : "sm:bg-[---c10] sm:grid sm:grid-cols-1 sm:left-[-7rem]  sm:bottom-0  sm:grid-rows-8 sm:h-[100vh] sm:w-auto  sm:fixed sm:duration-[2s]"
            }
          >
            <div></div>
            <div></div>

            <Link href="http://localhost:3000">
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold  ${home}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdHomeFilled
                  className={`w-[2rem] h-[1.4rem] text-[---c1]  ${home} sm:rounded-[2rem] `}
                />
                <p>Home</p>
              </div>
            </Link>

            <Link href="http://localhost:3000/components/about">
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold  ${about}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaMessage
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${about} sm:rounded-[2rem]`}
                />
                <p>About</p>
              </div>
            </Link>

            <Link href="http://localhost:3000/components/blogs">
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold  ${blogs}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaPencilAlt
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${blogs} sm:rounded-[2rem]`}
                />
                <p>Blogs</p>
              </div>
            </Link>

            


            <div></div>
            <Link
              className="hidden"
              href="http://localhost:3000/components/login"
            >
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold  ${login}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdAccountCircle
                  className={`w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:hover:text-[---c4] ${login}`}
                />
                <p>Account</p>
              </div>
            </Link>
            <Link href="http://localhost:3000/components/login">
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold  ${login}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <BsFillPlusCircleFill
                  className={`w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:hover:text-[---c4] ${login}`}
                />
                <p>Login</p>
              </div>
            </Link>
            <div className="hidden ">
              <div className=" sm:cursor-pointer  sm:h-[40px] w-[7rem] sm:items-center sm:w-[30px] sm:rounded-[2rem] my-2 sm:flex ">
                <span className="ml-[0.4rem] mt-[0.5rem] font-extrabold">
                  Abubkar
                </span>
              </div>
            </div>
          </div>
        </div>
            
        <div className="sticky left-0 ">
          <div className="">
            <Image src={Logo} alt="logo" height={100} width={300} className="ml-[10px]"  />
          </div>
       </div>
        <div className=" sm:flex sm:w-[100vw] sm:m-2 sm:space-x-2  ">
          <div className="grid content-center items-center grid-cols-3 w-[8rem] h-[2rem] rounded-[2rem] border-[1.5px] border-black absolute top-6 right-2">
            <CiSearch className="sm:cursor-pointer sm:w-[2rem] sm:h-[1.5rem] sm:place-self-start " />
            <input 
              type="text"
              className=" sm:w-[5rem] sm:h-[1rem] sm:place-self-between bg-transparent"
              name="search"
              id="search"
              placeholder="search"
            />
          </div>
        
        </div>
      </div>
      <div className="h-[5rem] w-[100%]"></div>
    </>
  );
};
export default Navbar;
