import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Fade, Slide } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";

const Login = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [email, setemail] = useState("");
  const [loader, setLoader] = useState(false);

  const [password, setPassword] = useState("");
  const [hpassword, sethpassword] = useState(true);
  let login;
  let signup;
  let hidePass;
  if (hpassword) {
    hidePass = "password";
  } else {
    hidePass = "text";
  }

  if (currentUrl === "/components/login") {
    login = "sm:text-[---c4]  sm:bg-[---c3]";
    signup = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/components/signup") {
    signup = "sm:text-[---c4] sm:bg-[---c3]";
    login = "sm:text-[---c4]  sm:bg-[---c9]";
  }
  const hideP = () => {
    sethpassword(!hpassword);
  };
  const onLogin = async (e) => {
    setLoader(true);

    e.preventDefault();
    let user = {
      user_email: email,
      user_password: password,
    };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    let response = await res.json();
    console.log(response);
    if (response) {
      if (response.success == true) {
        localStorage.setItem("token", response.token);
        router.push(`${process.env.NEXT_PUBLIC_HOST}/`);
        toast("Login Successfully 🥰", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#5fff59",
          },
        });
      } else {
        toast("incorrect email or password 🙄", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },
        });
        console.log("fail to loggin");
      }
    } else {
      toast("incorrect email or password 🙄", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      });
      console.log("fail to loggin");
    }
    setLoader(false);
  };

  return (
    <>
      <Fade cascade>
        <Toaster position="bottom-center" reverseOrder={true} />
        {loader ? (
          <Fade>
            <div className="mx-auto mt-[40vh] mb-[40vh] justify-items-center">
              <DotLoader
                color="rgba(0,168,89,255)"
                cssOverride={{}}
                loading
                size={60}
                speedMultiplier={1}
              />
              <br />
              <br />
              <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
                Loggin in Please Wait !!
              </p>
            </div>
          </Fade>
        ) : (
          <div spellCheck="true" className="">
            <div
              spellCheck="true"
              className="sm:text-center mm:mt-[1rem] t:mt-[2rem]"
            >
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/login`}>
                <button
                  spellCheck="true"
                  className={`${login}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
                >
                  Login
                </button>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/signup`}>
                <button
                  spellCheck="true"
                  className={`${signup}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
                >
                  Sign Up
                </button>
              </Link>
              <div
                spellCheck="true"
                className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]"
              >
                <Slide triggerOnce duration={1000} direction="left">
                  <div
                    spellCheck="true"
                    className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]   "
                  >
                    <div spellCheck="true">
                      <div
                        spellCheck="true"
                        className=" sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2"
                      >
                        Welcome back !!
                      </div>
                      <hr className="bg-[---c4] mb-2" />
                      <hr className="bg-[---c4]" />
                    </div>
                    <div spellCheck="true" className=" space-y-[2rem]">
                      <div spellCheck="true" className="text-left">
                        <div spellCheck="true" className="flex ">
                          <MdOutlineMarkEmailUnread className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                          <div
                            spellCheck="true"
                            className="h-auto w-auto rounded-[2rem] "
                          >
                            {/* <p className=" my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-black absolute mt-[-16px] ml-[2rem] bg-transparent "> Email:</p>
                             */}
                            <input
                              spellCheck="true"
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                              placeholder=" Enter your Email ..."
                              type="email"
                              name="Email"
                              value={email}
                              id="Email"
                              htmlFor="Email"
                              className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                            />
                          </div>
                        </div>
                      </div>
                      <div spellCheck="true" className="text-left">
                        <div spellCheck="true" className="flex ">
                          <TbPasswordUser className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                          <div spellCheck="true" className="flex">
                            <input
                              spellCheck="true"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              type={hidePass}
                              name="Password"
                              value={password}
                              id="Password"
                              placeholder=" Enter your Password ..."
                              htmlFor="Password"
                              className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black
      "
                            />
                            {hpassword ? (
                              <FaEyeSlash
                                onClick={hideP}
                                className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]"
                              />
                            ) : (
                              <FaEye
                                onClick={hideP}
                                className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_HOST}/components/forgot`}
                    >
                      <div
                        spellCheck="true"
                        className="hover:underline sm:text-[11px] mm:text-[13px] lm:text-[17px] t:text-[20px] l:text-[27px] ll:text-[32px] k:text-[40px] text-[---f1] mt-[1rem] ml-[6rem] t:ml-[1px]"
                      >
                        Forgot Password ?
                      </div>
                    </Link>
                    <button
                      spellCheck="true"
                      onClick={onLogin}
                      className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]"
                    >
                      Login
                    </button>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        )}
      </Fade>
    </>
  );
};
export default Login;
