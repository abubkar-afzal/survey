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
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Occoupation, setOccoupation] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [hpassword, sethpassword] = useState(true);
  


  let login;
  let signup;
  let hidePass;
  if(hpassword){
    hidePass = "password"
  }else{
    hidePass = "text"
  }
  if (currentUrl === "/components/login") {
    login = "sm:text-[---c4]  sm:bg-[---c3]";
    signup = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/components/signup") {
    signup = "sm:text-[---c4] sm:bg-[---c3]";
    login = "sm:text-[---c4]  sm:bg-[---c9]";
  }
  const hideP =()=>{
    sethpassword(!hpassword);
  }
  const onAdd = async (e) => {
  if(Name.length>3 && Password.length>4 && Occoupation.length>4 && Address.length>4 && Phone.length>10){
    
      e.preventDefault();
      let user = {
        user_name: Name,
        user_bd: Birthday,
        user_phone: Phone,
        user_email: Email,
        user_password: Password,
        user_occoupation: Occoupation,
        user_address: Address
      };
      let res = await fetch('http://localhost:3000/api/addNewUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(user),
      });
      let response = await res.json();
      console.log(response);
      router.push("http://localhost:3000/");
      toast("Account Created 😍", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#5fff59",
        },});
    }else{
      toast("Please Enter Correct Things 🤐", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },});
      console.log("validation faild")
    }
  }

  return (
    <>
 









 <Toaster position="bottom-center" reverseOrder={true} />

      <div className="">
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
              
              <div className="flex">
                            <HiPencilSquare className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Please Enter your Name ..."
                type="text"
                name="Name"
                value={Name}
                id="Name"
                htmlFor="Name"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
              /></div>
            </div>
            <div className="text-left">
              
              <div className="flex">
              <CiCalendarDate className="text-white ml-[-5px] m-2 sm:text-[27px] mm:text-[33px] lm:text-[37px] t:text-[39px] l:text-[45px] ll:text-[49px] k:text-[59px]"/>
              <input
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
                placeholder="Please Enter your Birthday ..."
                type="date"
                name="Birthday"
                value={Birthday}
                id="Birthday"
                htmlFor="Birthday"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-[50vw] t:w-[30vw] ll:w-[20vw] m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
              /></div>
            </div>
            <div className="text-left">
              
              <div className="flex">
              <FaPhone className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Please Enter your Phone ..."
                type="phone"
                name="Phone"
                value={Phone}
                id="Phone"
                htmlFor="Phone"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
              /></div>
            </div>
            <div className="text-left">
              
              <div className="flex">
              <MdOutlineMarkEmailUnread className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Please Enter your Email ..."
                type="email"
                name="Email"
                value={Email}
                id="Email"
                htmlFor="Email"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
              /></div>
            </div>
            <div className="text-left">
              
              <div className="flex">
              <TbPasswordUser className="text-white m-2 sm:text-[26px] mm:text-[30px] lm:text-[35px] t:text-[39px] l:text-[45px] ll:text-[49px] k:text-[59px]"/>
              <div className="flex">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={hidePass}
                name="Password"
                value={Password}
                id="Password"
                placeholder="Please Enter Password ..."
                htmlFor="Password"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
              /> {
                                      hpassword ? 
                                      <FaEyeSlash onClick={hideP} className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]" />
                : 
                <FaEye onClick={hideP} className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]" />
              
                                    }
              </div></div>
            </div>
            <div className="text-left">
              
              <div className="flex">
              <FaBriefcase className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
              <input
                onChange={(e) => {
                  setOccoupation(e.target.value);
                }}
                placeholder="Please Enter your Occoupation ..."
                type="occoupation"
                name="Occoupation"
                value={Occoupation}
                id="Occoupation"
                htmlFor="Occoupation"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
              /></div>
            </div>
            <div className="text-left">
              
              <div className="flex">
              <FaHouseChimney className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]"/>
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Please Enter your Address ..."
                type="Address"
                name="Address"
                value={Address}
                id="Address"
                htmlFor="Address"
                className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
              /></div>
            </div>

            <button onClick={onAdd} className="bg-[---c5] hover:bg-[---h5] p-2 mb-2  rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]  ">
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
