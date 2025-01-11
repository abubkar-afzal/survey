import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
const Login = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  let login;
  let signup;
  if (currentUrl === "/components/login") {
    login = "sm:text-[---c4]  sm:bg-[---c3]";
    signup = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/components/signup") {
    signup = "sm:text-[---c4] sm:bg-[---c3]";
    login = "sm:text-[---c4]  sm:bg-[---c9]";
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="sm:text-center mm:mt-[1rem] t:mt-[2rem]">
          <Link href={`http://localhost:3000/components/login`}>
            <button
              className={`${login}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
            >
              Login
            </button>
          </Link>
          <Link href={`http://localhost:3000/components/signup`}>
            <button
              className={`${signup}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Sign Up
            </button>
          </Link>
          <div className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]">
          <div className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]   ">
            <div>
              <div className=" sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2">Welcome back !!</div>
              <hr className="bg-[---c4] mb-2" />
              <hr className="bg-[---c4]" />
            </div>
            <div className=" ">
            <div className="text-left">
              <div className=" my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Email:</div>
              <div className="flex ">
                <MdOutlineMarkEmailUnread className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder=" Enter your Email"
                  type="email"
                  name="Email"
                  value={email}
                  id="Email"
                  htmlFor="Email"
                  className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  "
                />
              </div>
            </div>
            <div className="text-left">
              <div className=" sm:my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Password:</div>
              <div className="flex ">
                <TbPasswordUser className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="Password"
                  name="Password"
                  value={password}
                  id="Password"
                  placeholder=" Enter your Password"
                  htmlFor="Password"
                  className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
                />
              </div>
            </div>
            </div>
            <Link href={`http://localhost:3000/components/forgot`}>
              <div className="hover:underline sm:text-[11px] mm:text-[13px] lm:text-[17px] t:text-[20px] l:text-[27px] ll:text-[32px] k:text-[40px] text-[---f1] mt-[1rem] ml-[6rem] t:ml-[1px]">
                Forgot Password ?
              </div>
            </Link>
            <button className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]">
              Login
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Login;
