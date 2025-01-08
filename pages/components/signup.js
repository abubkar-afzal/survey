import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Occoupation, setOccoupation] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");

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
          <div className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[1rem] font-semibold items-center place-content-start p-[2rem] ">
            <div>
              <div className="text-[1.3rem] mb-2">Creating new Account</div>
              <hr className="bg-[---c4] mb-2" />
              <hr className="bg-[---c4]" />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Name:</div>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Please Enter your Name"
                type="text"
                name="Name"
                value={Name}
                id="Name"
                htmlFor="Name"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Age:</div>
              <input
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Please Enter your Age"
                type="date"
                name="Age"
                value={Age}
                id="Age"
                htmlFor="Age"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Phone Number:</div>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Please Enter your Phone Number"
                type="phone"
                name="Phone"
                value={Phone}
                id="Phone"
                htmlFor="Phone"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Email:</div>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Please Enter your Email"
                type="email"
                name="Email"
                value={Email}
                id="Email"
                htmlFor="Email"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] sm:my-2"> Password:</div>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name="Password"
                value={Password}
                id="Password"
                placeholder="Please Enter your Password"
                htmlFor="Password"
                className="bg-[---c4] text-black rounded-[2rem] sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Occoupation:</div>
              <input
                onChange={(e) => {
                  setOccoupation(e.target.value);
                }}
                placeholder="Please Enter your Occoupation"
                type="occoupation"
                name="Occoupation"
                value={Occoupation}
                id="Occoupation"
                htmlFor="Occoupation"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Address:</div>
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Please Enter your Address"
                type="Address"
                name="Address"
                value={Address}
                id="Address"
                htmlFor="Address"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>

            <button className="bg-[---c5] hover:bg-[---h5] p-4 mb-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] text-[13px]  ">
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
