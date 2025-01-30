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
import { RiAdminFill } from "react-icons/ri";
import IMAGE1 from "../images/img1.png";
import IMAGE2 from "../images/img2.png";
import IMAGE3 from "../images/img3.png";
import IMAGE4 from "../images/img4.png";
import IMAGE5 from "../images/img5.png";
import IMAGE6 from "../images/img6.png";

const Navbar = ({ accountlogo }) => {
  
  const [showmenu, hidemenu] = useState(false);
  const [showcross, hidecross] = useState(true);
  const [showabout, hideabout] = useState("inline");
  const [showblogs, hideblogs] = useState("inline");
  const [showhome, hidehome] = useState("inline");
  const [showlogin, hidelogin] = useState("inline");
  const [showaccount, hideaccount] = useState("inline");
  const [showadmin, hideadmin] = useState("inline");
   const [photo, setphoto] = useState("");
  const [dphoto, setdphoto] = useState(null)
  
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
  let laccount;
  let admin;

  const router = useRouter();
  const currentUrl = router.asPath;
  useEffect(() => {
    const fetchuser = async () => {
      let d = await fetch("http://localhost:3000/api/getAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });
      let res = await d.json();
      setphoto(res.login.user_photo);
    };
    if (localStorage.getItem("token")) {
      fetchuser();
    }
    if (currentUrl === "/") {
      hidehome("inline");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("hidden");
      hideaccount("hidden");
      hideadmin("hidden");
    } else if (currentUrl === "/components/about") {
      hideaccount("hidden");
      hidehome("hidden");
      hideabout("inline");
      hideblogs("hidden");
      hideadmin("hidden");
      hidelogin("hidden");
    } else if (currentUrl === "/components/blogs") {
      hideaccount("hidden");
      hideadmin("hidden");
      hidehome("hidden");
      hideabout("hidden");
      hideblogs("inline");
      hidelogin("hidden");
    } else if (currentUrl === "/components/login") {
      hideaccount("hidden");
      hideadmin("hidden");
      hidehome("hidden");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("inline");
    } else if (currentUrl === "/components/account") {
      hideaccount("inline");
      hidehome("hidden");
      hideadmin("hidden");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("hidden");
    } else if (currentUrl === "/admin") {
      hideaccount("hidden");
      hidehome("hidden");
      hideadmin("inline");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("hidden");
    }else{
      hideaccount("hidden");
      hidehome("hidden");
      hideadmin("hidden");
      hideabout("hidden");
      hideblogs("hidden");
      hidelogin("hidden");
    }
  }, [router.query]);
 useEffect(() => {
    if (photo == 1) {
      setdphoto(null);
      setdphoto(IMAGE1);
    } else if (photo == 2) {
      setdphoto(null);
      setdphoto(IMAGE2);
    } else if (photo == 3) {
      setdphoto(null);
      setdphoto(IMAGE3);
    } else if (photo == 4) {
      setdphoto(null);
      setdphoto(IMAGE4);
    } else if (photo == 5) {
      setdphoto(null);
      setdphoto(IMAGE5);
    } else if (photo == 6) {
      setdphoto(null);
      setdphoto(IMAGE6);
    } else{
      setdphoto(null);
    }
  }, [photo])
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
    laccount = true;
   } else if (currentUrl === "/admin") {
    admin = "sm:text-[---c4] sm:bg-[---c3]";
  }else{
    home=""
    admin =""
    account =""
    laccount= ""
    login=""
    about=""
    blogs=""
  }

  return (
    <>
      <div spellcheck="true"
        className="sm:flex  sm:h-[4.5rem] mm:h-[5rem] lm:h-[5.5rem] l:h-[7rem] ll:h-[8.5rem] k:h-[13rem]  shadow-sm shadow-black sm:fixed sm:top-0
     sm:z-10 w-[100vw] bg-[---c4] "
      >
        {/* for small screen  */}
        <div spellcheck="true" className="py-2 pl-2 grid grid-cols-2  ">
          <div spellcheck="true" className="sm:relative sm:z-20 t:hidden">
            <div spellcheck="true"
              onClick={onepresscross}
              className={`${
                showcross ? "inline" : "hidden"
              } sm:h-[4em] sm:w-[3rem] sm:rounded-[2rem] sm:cursor-pointer `}
            >
              <GiHamburgerMenu className="sm:w-[2rem] mm:w-[2.5rem] mm:h-[2.5rem] lm:w-[2.7rem] lm:h-[2.7rem] sm:h-[2rem] sm:mt-[13px] mm:mt-[13px] " />
            </div>

            <div spellcheck="true"
              onClick={onepressmenu}
              className={`${
                showcross ? "hidden" : "inline"
              } sm:h-[4em] sm:w-[3rem] sm:rounded-[2rem] sm:cursor-pointer pt-[2rem] `}
            >
              <RxCross2 className="sm:w-[2rem] mm:w-[2.5rem] mm:h-[2.5rem] lm:w-[2.7rem] lm:h-[2.7rem] sm:h-[2rem] sm:mt-[13px] mm:mt-[13px] " />
            </div>
          </div>
          <div spellcheck="true"
            className={
              showmenu
                ? "NAVBAR sm:bg-[---n1] sm:grid sm:grid-cols-1 sm:left-0  sm:bottom-0  sm:grid-rows-8 sm:h-[100vh] sm:w-auto  sm:fixed sm:duration-[2s] z-10 t:hidden"
                : "sm:bg-[---n1] sm:grid sm:grid-cols-1 sm:left-[-7rem]  sm:bottom-0  sm:grid-rows-8 sm:h-[100vh] sm:w-auto  sm:fixed sm:duration-[2s] z-10 "
            }
          >
            <div spellcheck="true"></div>
            <div spellcheck="true"></div>

            <Link href={`http://localhost:3000/`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${home}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdHomeFilled
                  className={`w-[2rem] h-[1.4rem] text-[---c1]  ${home} sm:rounded-[2rem] `}
                />
                <p spellcheck="true">Home</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/about`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${about}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaMessage
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${about} sm:rounded-[2rem]`}
                />
                <p spellcheck="true">About</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/blogs`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${blogs}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaPencilAlt
                  className={`w-[1.9rem] h-[1rem] text-[---c1]  ${blogs} sm:rounded-[2rem]`}
                />
                <p spellcheck="true">Blogs</p>
              </div>
            </Link>

            <div spellcheck="true"></div>

            {/* account */}

            {accountlogo ? (
              <Link
                className=""
                href={`http://localhost:3000/components/account`}
              >
                <div spellcheck="true"
                  className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${account}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
                >
                  <Image src={dphoto}
                    className={`w-[2rem] sm:rounded-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:hover:text-[---c4 ${account}`}
                  />
                  <p spellcheck="true">Account</p>
                </div>
              </Link>
            ) : (
              <Link href={`http://localhost:3000/components/login`}>
                <div spellcheck="true"
                  className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${login}             sm:rounded-[2rem]  sm:flex sm:space-x-1`}
                >
                  <BsFillPlusCircleFill
                    className={`w-[2rem] sm:rounded-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:hover:text-[---c4] ${login}`}
                  />
                  <p spellcheck="true">Login</p>
                </div>
              </Link>
            )}
            <Link href={`http://localhost:3000/admin`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${admin}  k:h-[110px] ll:h-[80px] l:h-[50px]   w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <RiAdminFill
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem]  l:h-[2rem] w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:rounded-[2rem] sm:hover:text-[---c4] ${admin}`}
                />
                <p spellcheck="true">Admin</p>
              </div>
            </Link>
          </div>
        </div>

        {/* logo  */}
        <div spellcheck="true" className="sticky ">
          <Link href={`http://localhost:3000/`}>
            <div spellcheck="true" className="">
              <Image
                src={Logo}
                alt="logo"
                height={100}
                width={300}
                className="sm:ml-[10px] mm:ml-[20px] lm:ml-[20px] t:ml-[8px] t:w-[150px] t:h-[130px] cursor-pointer l:w-[200px] l:h-[170px] ll:w-[250px] ll:h-[210px] k:w-[400px] k:h-[320px] my:ml-[50px]"
              />
            </div>
          </Link>
        </div>

        {/* for big screen */}
        <div spellcheck="true" className=" sm:flex sm:w-[100vw] t:w-auto sm:m-2 sm:space-x-2  ">
          <div spellcheck="true" className="t:flex pl-[6rem] w-[10] hidden space-x-[20px] l:space-x-[30px] ll:space-x-[50px] mt-[20px] ll:pl-[14rem] l:pl-[10rem] l:text-[1.5rem] ll:text-[2rem] k:space-x-[100px] k:pl-[30rem] k:text-[4rem] k:pt-[2rem] ml-auto my:pl-[70rem] my:space-x-[200px]">
            <Link href={`http://localhost:3000/`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${home}   k:h-[110px] ll:h-[80px] l:h-[50px]     w-auto   sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <MdHomeFilled
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem] hover:text-[---c4]  l:h-[2rem] w-[2rem] h-[1.4rem] text-[---c1]  ${home} sm:rounded-[2rem] `}
                />
                <p spellcheck="true" className={`${showhome} pr-[10px] k:pr-[20px]`}>Home</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/about`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${about}  k:h-[110px] ll:h-[80px] l:h-[50px]   w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaMessage
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem] hover:text-[---c4]  l:h-[2rem] w-[1.9rem] h-[1rem] text-[---c1]  ${about} sm:rounded-[2rem]`}
                />
                <p spellcheck="true" className={`pr-[10px] k:pr-[20px] ${showabout}`}>About</p>
              </div>
            </Link>

            <Link href={`http://localhost:3000/components/blogs`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${blogs}  k:h-[110px] ll:h-[80px] l:h-[50px]    w-auto       sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <FaPencilAlt
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem] hover:text-[---c4]   l:h-[2rem] w-[1.9rem] h-[1rem] text-[---c1]  ${blogs} sm:rounded-[2rem]`}
                />
                <p spellcheck="true" className={`pr-[10px] k:pr-[20px] ${showblogs}`}>Blogs</p>
              </div>
            </Link>

            {/* account */}

            {accountlogo ? (
              
                <Link
                className=""
                href={`http://localhost:3000/components/account`}
              >
                <div spellcheck="true"
                  className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6]      sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${laccount ? "t:w-[15vw] t:h-auto t:bg-[---c3] t:text-[---c4]": "t:w-[2rem] t:h-[2rem]l:w-[3rem] ll:w-[4rem] ll:h-[4rem] l:h-[3rem] k:w-[7rem] k:h-[7rem]"}  sm:rounded-[2rem]  sm:flex sm:space-x-1`}
                >
                  <Image src={dphoto} alt="logo of account"
                    className={` l:w-[3rem] ll:w-[4rem] ll:h-[4rem] k:w-[7rem] k:h-[7rem]  l:h-[3rem] t:w-[2rem] t:h-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:rounded-[2rem] sm:hover:text-[---c4]  ${account}`}
                  />
                  <p spellcheck="true" className={`pr-[10px] k:pr-[20px] ${showaccount}`}>
                    Account
                  </p>
                </div>
              </Link>
              
            ) : (
              <Link href={`http://localhost:3000/components/login`}>
                <div spellcheck="true"
                  className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${login}  k:h-[110px] ll:h-[80px] l:h-[50px]   w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
                >
                  <BsFillPlusCircleFill
                    className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem]  l:h-[2rem] w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:rounded-[2rem] sm:hover:text-[---c4] ${login}`}
                  />
                  <p spellcheck="true" className={`pr-[10px] k:pr-[20px] ${showlogin}`}>Login</p>
                </div>
              </Link>
            )}
            <Link href={`http://localhost:3000/admin`}>
              <div spellcheck="true"
                className={` sm:cursor-pointer sm:hover:bg-[---c3] sm:active:bg-[---c6] sm:h-[40px] w-[7rem] sm:items-center sm:hover:text-[---c4] sm:active:text-[---c4] sm:font-extrabold   ${admin}  k:h-[110px] ll:h-[80px] l:h-[50px]   w-auto        sm:rounded-[2rem]  sm:flex sm:space-x-1`}
              >
                <RiAdminFill
                  className={`l:w-[3rem] ll:w-[3.5rem] ll:h-[2.5rem] k:w-[5.3rem] k:h-[4rem]  l:h-[2rem] w-[2rem] sm:active:bg-[---c6] h-[1.5rem] text-[---c2] sm:active:text-[---c4] sm:rounded-[2rem] sm:hover:text-[---c4] ${admin}`}
                />
                <p spellcheck="true" className={`pr-[10px] k:pr-[20px] ${showadmin}`}>Admin</p>
              </div>
            </Link>
          </div>

          {/* input tag */}
          <div spellcheck="true" className="grid content-center items-center grid-cols-3 w-[8rem] h-[2rem] rounded-[2rem] border-[1.5px] border-black absolute sm:top-6 sm:right-2 mm:top-8 mm:right-2 lm:top-8 lm:right-2 t:top-8 t:w-[7rem] t:h-[1.8rem] l:w-[9rem] my:right-12 l:right-3 ll:right-6 l:h-[2.5rem] ll:h-[3.3rem] ll:w-[12rem] k:w-[18rem] k:h-[7rem]">
            <CiSearch className="sm:cursor-pointer k:w-[4rem] k:h-[6rem] ll:w-[2.5rem] ll:h-[2.2rem] l:w-[2.2rem] l:h-[2rem] sm:w-[2rem] t:w-[1.8rem] t:h-[1.2rem] sm:h-[1.5rem] sm:place-self-start " />
            <input spellcheck="true" 
              type="text"
              className=" sm:w-[5rem] sm:h-[1rem] sm:place-self-between bg-transparent t:w-[4rem] t:h-[0.8rem] l:w-[5rem] l:h-[1.3rem] ll:w-[6rem] ll:h-[2.3rem] k:w-[11rem] k:h-[6rem] k:text-[3rem] ll:text-[2rem] l:text-[1.3rem]"
              name="search"
              id="search"
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <div spellcheck="true" className="h-[5rem] w-[100%] bg-[---c4] l:h-[7rem] ll:h-[8.5rem] k:h-[13rem]"></div>
    </>
  );
};
export default Navbar;
