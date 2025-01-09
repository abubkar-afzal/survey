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
        <div className="sm:text-center mm:mt-[1rem]">
          <Link href={`http://localhost:3000/components/login`}>
            <button
              className={`${login}  p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] `}
            >
              Login
            </button>
          </Link>
          <Link href={`http://localhost:3000/components/signup`}>
            <button
              className={`${signup}  p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]`}
            >
              Sign Up
            </button>
          </Link>
          <div className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-content-start p-[2rem] ">
            <div>
              <div className="text-[1.3rem] mb-2">Welcome back !!</div>
              <hr className="bg-[---c4] mb-2" />
              <hr className="bg-[---c4]" />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Email:</div>
              <div className="flex">
                <MdOutlineMarkEmailUnread className="text-white m-2" />
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Please Enter your Email"
                  type="email"
                  name="Email"
                  value={email}
                  id="Email"
                  htmlFor="Email"
                  className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
                />
              </div>
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] sm:my-2"> Password:</div>
              <div className="flex ">
                <TbPasswordUser className="text-white m-2 text-[1.5rem]" />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="Password"
                  name="Password"
                  value={password}
                  id="Password"
                  placeholder="Please Enter your Password"
                  htmlFor="Password"
                  className="bg-[---c4] text-black rounded-[2rem] sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
                />
              </div>
            </div>
            <Link href={`http://localhost:3000/components/forgot`}>
              <div className="hover:underline sm:text-[11px] text-[---f1] mt-[1rem] ml-[6rem]">
                Forgot Password ?
              </div>
            </Link>
            <button className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
