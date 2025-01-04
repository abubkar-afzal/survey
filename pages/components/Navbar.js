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
import  Logo  from '../images/survey-logo.png';
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
    home = "xsm:text-[---c4]  xsm:bg-[---c3]";
  } else if (currentUrl === "/components/about") {
    about = "xsm:text-[---c4] xsm:bg-[---c3]";
  } else if (currentUrl === "/components/blogs") {
    blogs = "xsm:text-[---c4] xsm:bg-[---c3]";
  } else if (currentUrl === "/components/Login") {
    login = "xsm:text-[---c4] xsm:bg-[---c3]";
  }

  return (
    <>
      <div className="xsm:flex xsm:fixed  xsm:z-10 w-[100vw]">
        <div className="py-2 pl-2 grid grid-cols-2  ">
            <div className="xsm:relative xsm:z-10">
            <div
              onClick={onepresscross}
              className={`${
                showcross ?  "inline" :"hidden" 
              } xsm:h-[4em] xsm:w-[3rem] xsm:rounded-[2rem] xsm:cursor-pointer`}
            >
              <GiHamburgerMenu className="xsm:w-[2rem] h-[2rem] mt-[8px]" />
            </div>
        
            <div
              onClick={onepressmenu}
              className={`${
                showcross ?  "hidden":"inline" 
              } xsm:h-[4em] xsm:w-[3rem] xsm:rounded-[2rem] xsm:cursor-pointer pt-[2rem]`}
            >
              <RxCross2 className="xsm:w-[2rem] h-[2rem] mt-[8px]" />
            </div>
         
            </div>
          <div
            className={
              showmenu
                ? "NAVBAR xsm:bg-[---c10] xsm:grid xsm:grid-cols-1 xsm:left-0  xsm:bottom-0  xsm:grid-rows-8 xsm:h-[100vh] xsm:w-auto  xsm:fixed xsm:duration-[2s] "
                : "xsm:bg-[---c10] xsm:grid xsm:grid-cols-1 xsm:left-[-7rem]  xsm:bottom-0  xsm:grid-rows-8 xsm:h-[100vh] xsm:w-auto  xsm:fixed xsm:duration-[2s]"
            }
          >
            <div></div>
            <div></div>

            <Link href="http://localhost:3000">
              <div
                className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${home}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}
              >
                <MdHomeFilled
                  className={`w-[2rem] h-[1.4rem] text-[---c1]  ${home} `}
                />
                <p>Home</p>
              </div>
            </Link>

            <Link href="http://localhost:3000/components/about">
              <div
                className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${about}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}
              >
                <FaMessage
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${about}`}
                />
                <p>About</p>
              </div>
            </Link>

            <Link href="http://localhost:3000/components/blogs">
              <div
                className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${blogs}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}
              >
                <FaPencilAlt
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${blogs}`}
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
                className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${login}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}
              >
                <MdAccountCircle
                  className={`w-[2rem] xsm:active:bg-[---c6] h-[1.5rem] text-[---c2] xsm:active:text-[---c4] xsm:hover:text-[---c4] ${login}`}
                />
                <p>Account</p>
              </div>
            </Link>
            <Link href="http://localhost:3000/components/login">
              <div
                className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${login}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}
              >
                <BsFillPlusCircleFill
                  className={`w-[2rem] xsm:active:bg-[---c6] h-[1.5rem] text-[---c2] xsm:active:text-[---c4] xsm:hover:text-[---c4] ${login}`}
                />
                <p>Login</p>
              </div>
            </Link>
            <div className="hidden ">
              <div className=" xsm:cursor-pointer  xsm:h-[40px] w-[7rem] xsm:items-center xsm:w-[30px] xsm:rounded-[2rem] my-2 xsm:flex ">
                <span className="ml-[0.4rem] mt-[0.5rem] font-extrabold">
                  Abubkar
                </span>
              </div>
            </div>
          </div>
        </div>
            
        <div className=" xsm:flex xsm:w-[100vw] xsm:m-2   ">
          <div className=" absolute ">
            <Image src={Logo} alt="logo" height={150} width={150} className=" ml-[2rem] xsm:w-[110px] xsm:mt-[10px] xsm:ml-[15px]"  />
          </div>
       </div>
        <div className=" xsm:flex xsm:w-[100vw] xsm:m-2 xsm:space-x-2  ">
          <div className="grid content-center items-center grid-cols-3 w-[8rem] h-[2rem] rounded-[2rem] border-[1.5px] border-black absolute top-4 right-2">
            <CiSearch className="xsm:cursor-pointer xsm:w-[2rem] xsm:h-[1.5rem] xsm:place-self-start " />
            <input 
              type="text"
              className=" xsm:w-[5rem] xsm:h-[1rem] xsm:place-self-between bg-transparent"
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
