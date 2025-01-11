import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiPencilSquare } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

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
              className={`${login}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]  `}
            >
              Login
            </button>
          </Link>
          <Link href={`http://localhost:3000/components/signup`}>
            <button
              className={`${signup} p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Sign Up
            </button>
          </Link>






          <div className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]">
          <div className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]  ">
            <div>
              <div className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2">Creating new Account</div>
              <hr className="bg-[---c4] mb-2" />
              <hr className="bg-[---c4]" />
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Name:</div>
              <div className="flex">
                            <HiPencilSquare className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
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
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Age:</div>
              <div className="flex">
              <CiCalendarDate className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
              <input
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Please Enter your Age"
                type="number"
                name="Age"
                value={Age}
                id="Age"
                htmlFor="Age"
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Phone Number:</div>
              <div className="flex">
              <FaPhone className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
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
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Email:</div>
              <div className="flex">
              <MdOutlineMarkEmailUnread className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
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
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Password:</div>
              <div className="flex">
              <TbPasswordUser className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
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
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Occoupation:</div>
              <div className="flex">
              <FaBriefcase className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
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
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>
            <div className="text-left">
              <div className="my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]"> Address:</div>
              <div className="flex">
              <FaHouseChimney className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
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
                className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] "
              /></div>
            </div>

            <button className="bg-[---c5] hover:bg-[---h5] p-2 mb-2  rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]  ">
              Create an Account
            </button>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};
export default SignUp;
