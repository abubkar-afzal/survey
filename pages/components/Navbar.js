import React, { useEffect, useState } from "react";
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
import Logo from "../images/survey-logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [showmenu, hidemenu] = useState(false);
  const [showcross, hidecross] = useState(true);
  const [showabout, hideabout] = useState("inline");
  const [showblogs, hideblogs] = useState("inline");
  const [showhome, hidehome] = useState("inline");
  const [showlogin, hidelogin] = useState("inline");
  const [showaccount, hideaccount] = useState("inline");

  const onepressmenu = () => {
    hidemenu(!showmenu);
    hidecross(!showcross);
  };

  const onepresscross = () => {
    hidemenu(!showmenu);
    hidecross(!showcross);
  };
  let home;
  let about;
  let blogs;
  let login;
  let account;

  const router = useRouter();
  const currentUrl = router.asPath;
  useEffect(() => {
    if (currentUrl === "/") {
      hidehome("inline");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("hidden");
      hideaccount("hidden");
    } else if (currentUrl === "/components/about") {
      hideaccount("hidden");
      hidehome("hidden");
      hideabout("inline");
      hideblogs("hidden");
      hidelogin("hidden");
    } else if (currentUrl === "/components/blogs") {
      hideaccount("hidden");
      hidehome("hidden");
      hideabout("hidden");
      hideblogs("inline");
      hidelogin("hidden");
    } else if (currentUrl === "/components/login") {
      hideaccount("hidden");
      hidehome("hidden");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("inline");
    } else if (currentUrl === "/components/account") {
      hideaccount("inline");
      hidehome("hidden");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("hidden");
    }
  }, [router.query]);

  if (currentUrl === "/") {
    home = "sm:text-[---c4]  sm:bg-[---c3]";
  } else if (currentUrl === "/components/about") {
    about = "sm:text-[---c4] sm:bg-[---c3]";
  } else if (currentUrl === "/components/blogs") {
    blogs = "sm:text-[---c4] sm:bg-[---c3]";
  } else if (currentUrl === "/components/login") {
    login = "sm:text-[---c4] sm:bg-[---c3]";
  } else if (currentUrl === "/components/account") {
    account = "sm:text-[---c4] sm:bg-[---c3]";
  }

  return (
    <>
      <div
        className="sm:flex  sm:h-[4.5rem] mm:h-[5rem] lm:h-[5.5rem] shadow-sm shadow-black sm:fixed sm:top-0
     sm:z-10 w-[100vw] bg-[---c4]"
      >
        {/* for small screen  */}
        <div className="py-2 pl-2 grid grid-cols-2  ">
          <div className="sm:relative sm:z-20 t:hidden">
            <div
              onClick={onepresscross}
              className={`${
                showcross ? "inline" : "hidden"
              } sm:h-[4em] sm:w-[3rem] sm:rounded-[2rem] sm:cursor-pointer `}
            >
              <GiHamburgerMenu className="sm:w-[2rem] sm:h-[2rem] sm:mt-[13px] mm:mt-[18px] " />
            </div>

            <div
              onClick={onepressmenu}
              className={`${
                showcross ? "hidden" : "inline"
              } sm:h-[4em] sm:w-[3rem] sm:rounded-[2rem] sm:cursor-pointer pt-[2rem] `}
            >
              <RxCross2 className="sm:w-[2rem] sm:h-[2rem] sm:mt-[13px] mm:mt-[18px] " />
            </div>
          </div>
          <div
            className={
              showmenu
                ? "NAVBAR sm:bg-[---n1] sm:grid sm:grid-cols-1 sm:left-0  sm:bottom-0  sm:grid-rows-8 sm:h-[100vh] sm:w-auto  sm:fixed sm:duration-[2s] z-10 "
                : "sm:bg-[---n1] sm:grid sm:grid-cols-1 sm:left-[-7rem]  sm:bottom-0  sm:grid-rows-8 sm:h-[100vh] sm:w-auto  sm:fixed sm:duration-[2s] z-10"
            }
          >
            <div></div>
            <div></div>

            <Link href={`http://localhost:3000/`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${home}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdHomeFilled
                  className={`w-[2rem] h-[1.4rem] text-[---c1]  ${home} sm:rounded-[2rem] `}
                />
                <p>Home</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/about`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${about}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaMessage
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${about} sm:rounded-[2rem]`}
                />
                <p>About</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/blogs`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${blogs}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
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
              href={`http://localhost:3000/components/account`}
            >
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${account}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdAccountCircle
                  className={`w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:hover:text-[---c4] ${account}`}
                />
                <p>Account</p>
              </div>
            </Link>
            <Link href={`http://localhost:3000/components/login`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${login}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <BsFillPlusCircleFill
                  className={`w-[2rem] sm:rounded-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:hover:text-[---c4] ${login}`}
                />
                <p>Login</p>
              </div>
            </Link>
          </div>
        </div>

        {/* logo  */}
        <div className="sticky left-0 ">
          <div className="">
            <Image
              src={Logo}
              alt="logo"
              height={100}
              width={300}
              className="sm:ml-[10px] mm:ml-[20px] lm:ml-[30px] t:ml-[8px] t:w-[150px] t:h-[130px] cursor-pointer l:w-[200px] l:h-[170px] ll:w-[250px] ll:h-[210px] k:w-[400px] k:h-[320px] my:ml-[50px]"
            />
          </div>
        </div>

        {/* for big screen */}
        <div className=" sm:flex sm:w-[100vw] t:w-auto sm:m-2 sm:space-x-2  ">
          <div className="t:flex pl-[6rem] w-[10] hidden space-x-[20px] l:space-x-[30px] ll:space-x-[50px] mt-[20px] ll:pl-[14rem] l:pl-[10rem] l:text-[1.5rem] ll:text-[2rem] k:space-x-[100px] k:pl-[30rem] k:text-[4rem] k:pt-[2rem] ml-auto my:pl-[70rem] my:space-x-[200px]">
            <Link href={`http://localhost:3000/`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${home}   k:h-[110px] ll:h-[80px] l:h-[50px]     w-auto   sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdHomeFilled
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem] hover:text-[---c4]  l:h-[2rem] w-[2rem] h-[1.4rem] text-[---c1]  ${home} sm:rounded-[2rem] `}
                />
                <p className={`${showhome} pr-[10px] k:pr-[20px]`}>Home</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/about`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${about}  k:h-[110px] ll:h-[80px] l:h-[50px]   w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaMessage
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem] hover:text-[---c4]  l:h-[2rem] w-[1.9rem] h-[1rem] text-[---c1]  ${about} sm:rounded-[2rem]`}
                />
                <p className={`pr-[10px] k:pr-[20px] ${showabout}`}>About</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/blogs`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${blogs}  k:h-[110px] ll:h-[80px] l:h-[50px]    w-auto       sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaPencilAlt
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem] hover:text-[---c4]   l:h-[2rem] w-[1.9rem] h-[1rem] text-[---c1]  ${blogs} sm:rounded-[2rem]`}
                />
                <p className={`pr-[10px] k:pr-[20px] ${showblogs}`}>Blogs</p>
              </div>
            </Link>

            <Link
              className="hidden"
              href={`http://localhost:3000/components/account`}
            >
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${account}k:h-[110px] ll:h-[80px] l:h-[50px]     w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdAccountCircle
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem]  l:h-[2rem] w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:rounded-[2rem] sm:hover:text-[---c4] ${account}`}
                />
                <p className={`pr-[10px] k:pr-[20px] ${showaccount}`}>
                  Account
                </p>
              </div>
            </Link>
            <Link href={`http://localhost:3000/components/login`}>
              <div
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${login}  k:h-[110px] ll:h-[80px] l:h-[50px]   w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <BsFillPlusCircleFill
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem]  l:h-[2rem] w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:rounded-[2rem] sm:hover:text-[---c4] ${login}`}
                />
                <p className={`pr-[10px] k:pr-[20px] ${showlogin}`}>Login</p>
              </div>
            </Link>
          </div>

          {/* input tag */}
          <div className="grid content-center items-center grid-cols-3 w-[8rem] h-[2rem] rounded-[2rem] border-[1.5px] border-black absolute sm:top-6 sm:right-2 mm:top-8 mm:right-2 lm:top-8 lm:right-2 t:top-8 t:w-[7rem] t:h-[1.8rem] l:w-[9rem] my:right-10 l:h-[2.5rem] ll:h-[3.3rem] ll:w-[12rem] k:w-[18rem] k:h-[7rem]">
            <CiSearch className="sm:cursor-pointer k:w-[4rem] k:h-[6rem] ll:w-[2.5rem] ll:h-[2.2rem] l:w-[2.2rem] l:h-[2rem] sm:w-[2rem] t:w-[1.8rem] t:h-[1.2rem] sm:h-[1.5rem] sm:place-self-start " />
            <input
              type="text"
              className=" sm:w-[5rem] sm:h-[1rem] sm:place-self-between bg-transparent t:w-[4rem] t:h-[0.8rem] l:w-[5rem] l:h-[1.3rem] ll:w-[6rem] ll:h-[2.3rem] k:w-[11rem] k:h-[6rem] k:text-[3rem] ll:text-[2rem] l:text-[1.3rem]"
              name="search"
              id="search"
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <div className="h-[5rem] w-[100%] bg-[---c4] "></div>
    </>
  );
};
export default Navbar;
