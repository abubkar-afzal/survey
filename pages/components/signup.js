import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { MdEdit } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import IMAGE1 from "../images/img1.png";
import IMAGE2 from "../images/img2.png";
import IMAGE3 from "../images/img3.png";
import IMAGE4 from "../images/img4.png";
import IMAGE5 from "../images/img5.png";
import IMAGE6 from "../images/img6.png";
import { Fade, Slide } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";

const SignUp = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [Phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);

  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Occoupation, setOccoupation] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Photo, setPhoto] = useState(6);
  const [dPhoto, setdPhoto] = useState(IMAGE6);
  const [hpassword, sethpassword] = useState(true);
  const [album, setalbum] = useState(false);

  useEffect(() => {
    if (Photo == 1) {
      setdPhoto(null);
      setdPhoto(IMAGE1);
    } else if (Photo == 2) {
      setdPhoto(null);
      setdPhoto(IMAGE2);
    } else if (Photo == 3) {
      setdPhoto(null);
      setdPhoto(IMAGE3);
    } else if (Photo == 4) {
      setdPhoto(null);
      setdPhoto(IMAGE4);
    } else if (Photo == 5) {
      setdPhoto(null);
      setdPhoto(IMAGE5);
    } else {
      setdPhoto(null);
      setdPhoto(IMAGE6);
    }
  }, [Photo]);

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
  const onAdd = async (e) => {
    setLoader(true);

    e.preventDefault();
    const scrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
  }
  window.scrollTo(scrollOptions);
    let user = {
      user_name: Name,
      user_bd: Birthday,
      user_phone: Phone,
      user_email: Email,
      user_password: Password,
      user_occoupation: Occoupation,
      user_address: Address,
      user_photo: Photo,
    };
    let r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    let unique = await r.json();
    if (unique.success == false) {
      if (
        Name.length > 3 &&
        Password.length >= 4 &&
        Occoupation.length > 4 &&
        Address.length > 4 &&
        Phone.length >= 10
      ) {
        let res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/addNewUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(user),
          }
        );
        let response = await res.json();
        if (response) {
          if (response.success) {
            localStorage.setItem("token", response.token);
            router.push(`${process.env.NEXT_PUBLIC_HOST}/`);
            toast("Account Created 😍", {
              style: {
                padding: "16px",
                color: "#ffffff",
                background: "#5fff59",
              },
            });
          } else {
            toast("fetch fail 🤐", {
              style: {
                padding: "16px",
                color: "#ffffff",
                background: "#ff5959",
              },
            });
          }
        }
      } else {
        toast("Please enter correct things 🤨", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },
        });
      }
    } else {
      toast("User already have account 😳", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#5fff59",
        },
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/components/login`);
      }, 3000);
      setLoader(false);
    }
  };
  const showphotos = () => {
    setalbum(!album);
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <Fade cascade>
        {loader ? (
          <Fade>
            <div className=" mx-auto mt-[40vh] mb-[40vh] justify-items-center">
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
                Creating Account Please Wait !!
              </p>
            </div>
          </Fade>
        ) : (
          <div spellCheck="true" className=" mt-[1rem]">
            <div spellCheck="true" className="sm:text-center mm:mt-[1rem]">
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/login`}>
                <button
                  spellCheck="true"
                  className={`${login}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]  `}
                >
                  Login
                </button>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/signup`}>
                <button
                  spellCheck="true"
                  className={`${signup} p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
                >
                  Sign Up
                </button>
              </Link>

              <div
                spellCheck="true"
                className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]"
              >
                <Slide triggerOnce duration={800} direction="right">
                  <div
                    spellCheck="true"
                    className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]  "
                  >
                    <div spellCheck="true">
                      <div
                        spellCheck="true"
                        className="sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2"
                      >
                        Creating new Account
                      </div>
                      <hr className="bg-[---c4] mb-2" />
                      <hr className="bg-[---c4]" />
                    </div>
                    <div
                      spellCheck="true"
                      onClick={showphotos}
                      className="w-[150px] h-[150px] mm:w-[200px] mm:h-[200px] lm:w-[250px] lm:h-[250px] t:w-[250px] t:h-[250px] l:w-[300px] l:h-[300px] ll:w-[350px] ll:h-[350px] k:w-[400px] k:h-[400px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                    >
                      <Image
                        src={dPhoto}
                        alt="logo"
                        width={500}
                        height={500}
                        className="rounded-full "
                      />
                      <div
                        spellCheck="true"
                        className="absolute sm:right-[4vw] sm:mt-[-15vw] mm:right-[5vw] mm:mt-[-18vw] lm:right-[8vw] lm:mt-[-18vw] t:right-[4vw] t:mt-[-10vw] l:right-[3vw] l:mt-[-10vw] ll:right-[3vw] ll:mt-[-8vw] k:right-[2vw] k:mt-[-5vw]"
                      >
                        <MdEdit className="m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                      </div>
                      {album ? (
                        <Fade cascade>
                          <div
                            spellCheck="true"
                            className="bg-[---t1] rounded-[2rem] flex flex-wrap w-[90vw] t:w-[60vw] l:w-[50vw] ll:w-[30vw] k:w-[25vw] place-content-center justify-self-center m-2 "
                          >
                            <div
                              spellCheck="true"
                              onClick={() => {
                                setPhoto(1);
                              }}
                              className="w-[60px] h-[60px] mm:w-[70px] mm:h-[70px] lm:w-[90px] lm:h-[90px] t:w-[90px] t:h-[90px] l:w-[100px] l:h-[100px] ll:w-[110px] ll:h-[110px] k:w-[150px] k:h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE1}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div
                              spellCheck="true"
                              onClick={() => {
                                setPhoto(2);
                              }}
                              className="w-[60px] h-[60px] mm:w-[70px] mm:h-[70px] lm:w-[90px] lm:h-[90px] t:w-[90px] t:h-[90px] l:w-[100px] l:h-[100px] ll:w-[110px] ll:h-[110px] k:w-[150px] k:h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE2}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div
                              spellCheck="true"
                              onClick={() => {
                                setPhoto(3);
                              }}
                              className="w-[60px] h-[60px] mm:w-[70px] mm:h-[70px] lm:w-[90px] lm:h-[90px] t:w-[90px] t:h-[90px] l:w-[100px] l:h-[100px] ll:w-[110px] ll:h-[110px] k:w-[150px] k:h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE3}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div
                              spellCheck="true"
                              onClick={() => {
                                setPhoto(4);
                              }}
                              className="w-[60px] h-[60px] mm:w-[70px] mm:h-[70px] lm:w-[90px] lm:h-[90px] t:w-[90px] t:h-[90px] l:w-[100px] l:h-[100px] ll:w-[110px] ll:h-[110px] k:w-[150px] k:h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE4}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div
                              spellCheck="true"
                              onClick={() => {
                                setPhoto(5);
                              }}
                              className="w-[60px] h-[60px] mm:w-[70px] mm:h-[70px] lm:w-[90px] lm:h-[90px] t:w-[90px] t:h-[90px] l:w-[100px] l:h-[100px] ll:w-[110px] ll:h-[110px] k:w-[150px] k:h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE5}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div
                              spellCheck="true"
                              onClick={() => {
                                setPhoto(6);
                              }}
                              className="w-[60px] h-[60px] mm:w-[70px] mm:h-[70px] lm:w-[90px] lm:h-[90px] t:w-[90px] t:h-[90px] l:w-[100px] l:h-[100px] ll:w-[110px] ll:h-[110px] k:w-[150px] k:h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE6}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                          </div>
                        </Fade>
                      ) : null}
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <FaUserEdit className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="Please Enter your Name ..."
                          type="text"
                          name="Name"
                          value={Name}
                          id="Name"
                          htmlFor="Name"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-4 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                        />
                      </div>
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <CiCalendarDate className="text-white ml-[-5px] m-2 sm:text-[27px] mm:text-[33px] lm:text-[37px] t:text-[39px] l:text-[45px] ll:text-[49px] k:text-[59px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setBirthday(e.target.value);
                          }}
                          placeholder="Please Enter your Birthday ..."
                          type="date"
                          name="Birthday"
                          value={Birthday}
                          id="Birthday"
                          htmlFor="Birthday"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-[50vw] t:w-[30vw] ll:w-[20vw] m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-6 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black  "
                        />
                      </div>
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <FaPhone className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          placeholder="Please Enter your Phone ..."
                          type="phone"
                          name="Phone"
                          value={Phone}
                          id="Phone"
                          htmlFor="Phone"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-4 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                        />
                      </div>
                      <div className="t:w-[40vw] mb-[-1rem] ll:w-[20vw] ml-[1rem] ll:ml-[2rem]">
                        <p className="sm:text-[---c7] font-black  stroke-black sm:text-[15px] mm:text-[16px] lm:text-[17px] t:text-[18px] l:text-[19px] ll:text-[20px] k:text-[21px]">
                          Note:
                        </p>
                        <p className="sm:text-[---c6] font-thin sm:text-[13px] mm:text-[14px] lm:text-[15px] t:text-[16px] l:text-[17px] ll:text-[18px] k:text-[19px] text-wrap">
                          Please Enter Your Country Code Also Otherwise You Face
                          Errors.
                        </p>
                        <p className="sm:text-[---f1] font-thin sm:text-[11px] mm:text-[12px] lm:text-[13px] t:text-[14px] l:text-[15px] ll:text-[16px] k:text-[17px] text-wrap">
                          Enter Like This 9232709...... 
                        </p>
                      </div>
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <MdOutlineMarkEmailUnread className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          placeholder="Please Enter your Email ..."
                          type="email"
                          name="Email"
                          value={Email}
                          id="Email"
                          htmlFor="Email"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-4 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                        />
                      </div>
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <TbPasswordUser className="text-white m-2 sm:text-[26px] mm:text-[30px] lm:text-[35px] t:text-[39px] l:text-[45px] ll:text-[49px] k:text-[59px]" />
                        <div spellCheck="true" className="flex">
                          <input
                            spellCheck="true"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            type={hidePass}
                            name="Password"
                            value={Password}
                            id="Password"
                            placeholder="Please Enter Password ..."
                            htmlFor="Password"
                            className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-4 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                          />
                          {hpassword ? (
                            <FaEyeSlash
                              onClick={hideP}
                              className="text-white t:mt-[2rem] mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]"
                            />
                          ) : (
                            <FaEye
                              onClick={hideP}
                              className="text-white t:mt-[2rem] mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <FaBriefcase className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setOccoupation(e.target.value);
                          }}
                          placeholder="Please Enter your Occoupation ..."
                          type="occoupation"
                          name="Occoupation"
                          value={Occoupation}
                          id="Occoupation"
                          htmlFor="Occoupation"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-4 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                        />
                      </div>
                    </div>
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex">
                        <FaHouseChimney className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          placeholder="Please Enter your Address ..."
                          type="Address"
                          name="Address"
                          value={Address}
                          id="Address"
                          htmlFor="Address"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 t:py-4 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                        />
                      </div>
                    </div>

                    <button
                      spellCheck="true"
                      onClick={onAdd}
                      className="bg-[---c5] hover:bg-[---h5] p-2 mb-2  rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]  "
                    >
                      Create an Account
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
export default SignUp;
