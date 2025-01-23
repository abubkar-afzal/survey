import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Account = () => {
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
  const [hpassword, sethpassword] = useState(true);

  let responseofuser;
  let hidePass;

  const router = useRouter();
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
      setid(res.login._id);
      setEmail(res.login.user_email);
      setname(res.login.user_name);
      setbd(res.login.user_bd);
      setpassword(res.login.user_password);
      setphone(res.login.user_phone);
      setoccoupation(res.login.user_occoupation);
      setaddress(res.login.user_address);
      responseofuser = res;
    };
    if (localStorage.getItem("token")) {
      fetchuser();
    } else {
      router.push("/");
    }
  }, []);
  if (hpassword) {
    hidePass = "password";
  } else {
    hidePass = "text";
  }
  const DisableChanges = async () => {
    let d = await fetch("http://localhost:3000/api/getAccount", {
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
    setdaddress(true);
    setdname(true);
    setdpassword(true);
    setdphone(true);
    setdoccoupation(true);
    setdbd(true);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    router.push("/");
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
    if (
      name.length > 3 &&
      password.length > 4 &&
      occoupation.length > 4 &&
      address.length > 4 &&
      phone.length > 10
    ) {
      e.preventDefault();
      let user = {
        _id: id,
        user_name: name,
        user_bd: bd,
        user_phone: phone,
        user_password: password,
        user_occoupation: occoupation,
        user_address: address,
        user_email: email,
      };
      let r = await fetch("http://localhost:3000/api/updateUser", {
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
      console.log("validation faild");
    }
  };
  const hideP = () => {
    sethpassword(!hpassword);
  };
  return (
    <>
      <div className="text-center m-2 justify-items-center ">
        <Toaster position="bottom-center" reverseOrder={true} />

        <div className="w-[150px] h-[150px] mm:w-[200px] mm:h-[200px] lm:w-[250px] lm:h-[250px] t:w-[250px] t:h-[250px] l:w-[300px] l:h-[300px] ll:w-[350px] ll:h-[350px] k:w-[400px] k:h-[400px] bg-[---c5] rounded-full m-4"></div>
        <div className="space-y-[1rem]">
          <div className=" ">
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Name :
            </p>
            <div className="flex items-center place-content-center ml-[2rem] ">
              <input
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

          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Birth Date :
            </p>
            <div className="flex items-center place-content-center ml-[2rem] mb-[1rem">
              <input
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
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Password :
            </p>
            <div className="flex items-center place-content-center ml-[2rem] mb-[1rem">
              <input
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
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Phone :
            </p>
            <div className="flex items-center place-content-center ml-[2rem] mb-[1rem">
              <input
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
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Address :
            </p>
            <div className="flex items-center place-content-center ml-[2rem] mb-[1rem">
              <input
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
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Occoupation :
            </p>
            <div className="flex items-center place-content-center ml-[2rem] mb-[1rem">
              <input
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
        <div>
          <button
            onClick={SaveChanges}
            className="bg-[---c2] hover:bg-[---h2] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
          >
            Save Changes
          </button>
        </div>

        <div>
          <button
            onClick={DisableChanges}
            className="bg-[---c9] hover:bg-[---h9] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
          >
            Disable Changes
          </button>
        </div>
        <div>
          <button
            onClick={logOut}
            className="bg-[---c7] hover:bg-[---h7] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
};
export default Account;
