import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import IMAGE1 from "../images/img1.png";
import IMAGE2 from "../images/img2.png";
import IMAGE3 from "../images/img3.png";
import IMAGE4 from "../images/img4.png";
import IMAGE5 from "../images/img5.png";
import IMAGE6 from "../images/img6.png";
import { MdEdit } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";

const Account = () => {
  const [loader, setLoader] = useState(false);
  const [name, setname] = useState("");
  const [bd, setbd] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [occoupation, setoccoupation] = useState("");
  const [dname, setdname] = useState(true);
  const [dbd, setdbd] = useState(true);
  const [dpassword, setdpassword] = useState(true);
  const [daddress, setdaddress] = useState(true);
  const [dphone, setdphone] = useState(true);
  const [doccoupation, setdoccoupation] = useState(true);
  const [id, setid] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setphoto] = useState("");
  const [dphoto, setdphoto] = useState(null);
  const [hpassword, sethpassword] = useState(true);
  const [album, setalbum] = useState(false);

  let responseofuser;
  let hidePass;

  const router = useRouter();
  useEffect(() => {
    const fetchuser = async () => {
      setLoader(true);
      
      let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });
      let res = await d.json();
      setid(res.login._id);
      setEmail(res.login.user_email);
      setname(res.login.user_name);
      setbd(res.login.user_bd);
      setpassword(res.login.user_password);
      setphone(res.login.user_phone);
      setoccoupation(res.login.user_occoupation);
      setaddress(res.login.user_address);
      setphoto(res.login.user_photo);
      responseofuser = res;
      setLoader(false);
    };
    if (localStorage.getItem("token")) {
      fetchuser();
    } else {
      router.push("/");
    }
  }, []);
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
    } else {
      setdphoto(null);
      setdphoto(IMAGE6);
    }
  }, [photo]);
  if (hpassword) {
    hidePass = "password";
  } else {
    hidePass = "text";
  }
  const DisableChanges = async () => {
    setLoader(true);
    
    let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getAccount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    });
    let res = await d.json();
    setid(res.login._id);
    setname(res.login.user_name);
    setbd(res.login.user_bd);
    setpassword(res.login.user_password);
    setphone(res.login.user_phone);
    setoccoupation(res.login.user_occoupation);
    setaddress(res.login.user_address);
    setEmail(res.login.user_email);
    setphoto(res.login.user_photo);

    setdaddress(true);
    setdname(true);
    setdpassword(true);
    setdphone(true);
    setdoccoupation(true);
    setdbd(true);
    setLoader(false);
  };
  const logOut = () => {
    setLoader(true);
    
    localStorage.removeItem("token");
    window.location.reload();
    router.push("/");
    setLoader(false);
  };
  const dName = () => {
    setdname(!dname);
  };

  const dBd = () => {
    setdbd(!dbd);
  };
  const dPassword = () => {
    setdpassword(!dpassword);
  };
  const dAddress = () => {
    setdaddress(!daddress);
  };
  const dPhone = () => {
    setdphone(!dphone);
  };
  const dOccoupation = () => {
    setdoccoupation(!doccoupation);
  };
  const SaveChanges = async (e) => {
    setLoader(true);
    
    if (
      (name.length > 3 &&
        password.length > 4 &&
        occoupation.length > 4 &&
        address.length > 4 &&
        phone.length > 10) ||
      photo > 0
    ) {
      
      let user = {
        _id: id,
        user_name: name,
        user_bd: bd,
        user_phone: phone,
        user_password: password,
        user_occoupation: occoupation,
        user_address: address,
        user_email: email,
        user_photo: photo,
      };
      let r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let res = await r.json();

      if (res) {
        if (res.success) {
          toast("Changes Saved 😍", {
            style: {
              padding: "16px",
              color: "#ffffff",
              background: "#5fff59",
            },
          });
        } else {
          toast("Please saw api 🤐", {
            style: {
              padding: "16px",
              color: "#ffffff",
              background: "#ff5959",
            },
          });
        }
      }
    } else {
      toast("Please Enter Correct Things 🤐", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      });
    }
    setLoader(false);
  };
  const hideP = () => {
    sethpassword(!hpassword);
  };
  const showphotos = () => {
    setalbum(!album);
  };
  return (
    <>
        <Toaster position="bottom-center" reverseOrder={true} />
        <Fade cascade duration={3000}>
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
              <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] mx-4">
                Your Personal Data Is Collecting Please Wait !!
              </p>
            </div>
          </Fade>
        ) : (
          <div
            spellCheck="true"
            className="min-h-screen content-center text-center m-2 justify-items-center "
          >
            <div
              spellCheck="true"
              onClick={showphotos}
              className="w-[150px] h-[150px] mm:w-[200px] mm:h-[200px] lm:w-[250px] lm:h-[250px] t:w-[250px] t:h-[250px] l:w-[300px] l:h-[300px] ll:w-[350px] ll:h-[350px] k:w-[400px] k:h-[400px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
            >
              <Image
                src={dphoto}
                alt="logo"
                width={500}
                height={500}
                className="rounded-full "
              />
              <div
                spellCheck="true"
                className="absolute sm:right-[4vw] sm:mt-[-15vw] mm:right-[5vw] mm:mt-[-18vw] lm:right-[8vw] lm:mt-[-18vw] t:right-[4vw] t:mt-[-10vw] l:right-[3vw] l:mt-[-10vw] ll:right-[3vw] ll:mt-[-8vw] k:right-[2vw] k:mt-[-5vw]"
              >
                <MdEdit className=" text-[---c4] m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
              </div>
              {album ? (
                <Fade cascade triggerOnce>
                  <div
                    spellCheck="true"
                    className="bg-[---c4] rounded-[2rem] flex flex-wrap w-[90vw] t:w-[60vw] l:w-[50vw] ll:w-[30vw] k:w-[25vw] place-content-center justify-self-center m-2 "
                  >
                    <div
                      spellCheck="true"
                      onClick={() => {
                        setphoto(1);
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
                        setphoto(2);
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
                        setphoto(3);
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
                        setphoto(4);
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
                        setphoto(5);
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
                        setphoto(6);
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
            <div spellCheck="true" className="space-y-[1rem]">
              <div spellCheck="true" className=" ">
                <p
                  spellCheck="true"
                  className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent "
                >
                  : Name :
                </p>
                <div
                  spellCheck="true"
                  className="flex items-center place-content-center ml-[2rem] "
                >
                  <input
                    spellCheck="true"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    type="text"
                    disabled={dname}
                    value={name}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] disabled:outline-none outline my-2 "
                  />
                  <BiSolidEditAlt
                    onClick={dName}
                    className="m-2 sm:text-[30px] mm:text-[36px] lm:text-[40px] t:text-[36px] l:text-[40px] ll:text-[47px] k:text-[55px] cursor-pointer"
                  />
                </div>
              </div>

              <div spellCheck="true">
                <p
                  spellCheck="true"
                  className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent "
                >
                  : Birth Date :
                </p>
                <div
                  spellCheck="true"
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    spellCheck="true"
                    onChange={(e) => {
                      setbd(e.target.value);
                    }}
                    disabled={dbd}
                    type="text"
                    value={bd}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={dBd}
                    className="m-2 sm:text-[30px] mm:text-[36px] lm:text-[40px] t:text-[36px] l:text-[40px] ll:text-[47px] k:text-[55px] cursor-pointer"
                  />
                </div>
              </div>
              <div spellCheck="true">
                <p
                  spellCheck="true"
                  className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent "
                >
                  : Password :
                </p>
                <div
                  spellCheck="true"
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    spellCheck="true"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    disabled={dpassword}
                    type={hidePass}
                    value={password}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4] rounded-[2rem] ml-[4rem] sm:w-[30vw] lm:w-[40vw] t:w-[20vw] k:w-[10vw] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] disabled:outline-none outline my-2"
                  />
                  {hpassword ? (
                    <FaEyeSlash
                      onClick={hideP}
                      className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={hideP}
                      className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                    />
                  )}
                  <BiSolidEditAlt
                    onClick={dPassword}
                    className="m-2 sm:text-[30px] mm:text-[36px] lm:text-[40px] t:text-[36px] l:text-[40px] ll:text-[47px] k:text-[55px] cursor-pointer"
                  />
                </div>
              </div>
              <div spellCheck="true">
                <p
                  spellCheck="true"
                  className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent "
                >
                  : Phone :
                </p>
                <div
                  spellCheck="true"
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    spellCheck="true"
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    disabled={dphone}
                    type="text"
                    value={phone}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={dPhone}
                    className="m-2 sm:text-[30px] mm:text-[36px] lm:text-[40px] t:text-[36px] l:text-[40px] ll:text-[47px] k:text-[55px] cursor-pointer"
                  />
                </div>
              </div>
              <div spellCheck="true">
                <p
                  spellCheck="true"
                  className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent "
                >
                  : Address :
                </p>
                <div
                  spellCheck="true"
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    spellCheck="true"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    disabled={daddress}
                    type="text"
                    value={address}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={dAddress}
                    className="m-2 sm:text-[30px] mm:text-[36px] lm:text-[40px] t:text-[36px] l:text-[40px] ll:text-[47px] k:text-[55px] cursor-pointer"
                  />
                </div>
              </div>
              <div spellCheck="true">
                <p
                  spellCheck="true"
                  className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent "
                >
                  : Occoupation :
                </p>
                <div
                  spellCheck="true"
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    spellCheck="true"
                    onChange={(e) => {
                      setoccoupation(e.target.value);
                    }}
                    disabled={doccoupation}
                    type="text"
                    value={occoupation}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4]  rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={dOccoupation}
                    className="m-2 sm:text-[30px] mm:text-[36px] lm:text-[40px] t:text-[36px] l:text-[40px] ll:text-[47px] k:text-[55px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div spellCheck="true">
              <button
                spellCheck="true"
                onClick={SaveChanges}
                className="bg-[---c2] hover:bg-[---h2] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                Save Changes
              </button>
            </div>

            <div spellCheck="true">
              <button
                spellCheck="true"
                onClick={DisableChanges}
                className="bg-[---c9] hover:bg-[---h9] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                Disable Changes
              </button>
            </div>
            <div spellCheck="true">
              <button
                spellCheck="true"
                onClick={logOut}
                className="bg-[---c7] hover:bg-[---h7] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </Fade>
    </>
  );
};
export default Account;
