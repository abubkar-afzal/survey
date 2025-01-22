import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
      setname(res.login.user_name);
      setbd(res.login.user_bd);
      setpassword(res.login.user_password);
      setphone(res.login.user_phone);
      setoccoupation(res.login.user_occoupation);
      setaddress(res.login.user_address);
    };
    if (localStorage.getItem("token")) {
      fetchuser();
    } else {
      router.push("/");
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    router.push("/");
  };

  return (
    <>
      <div className="text-center m-2">
        <div key={id}>
          <div className="">
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Name :
            </p>
            <input
              onChange={(e) => {
                setname(e.target.name);
              }}
              type="text"
              value={name}
              id="question"
              name="question"
              placeholder="Please Enter your Answer"
              className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] outline my-2 "
            />
          </div>
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Birth Date :
            </p>
            <input
              onChange={(e) => {
                setbd(e.target.name);
              }}
              type="text"
              value={bd}
              id="question"
              name="question"
              placeholder="Please Enter your Answer"
              className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] outline my-2"
            />
          </div>
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Password :
            </p>
            <input
              onChange={(e) => {
                setpassword(e.target.name);
              }}
              type="text"
              value={password}
              id="question"
              name="question"
              placeholder="Please Enter your Answer"
              className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] outline my-2"
            />
          </div>
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Phone :
            </p>
            <input
              onChange={(e) => {
                setphone(e.target.name);
              }}
              type="text"
              value={phone}
              id="question"
              name="question"
              placeholder="Please Enter your Answer"
              className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] outline my-2"
            />
          </div>
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Address :
            </p>
            <input
              onChange={(e) => {
                setaddress(e.target.name);
              }}
              type="text"
              value={address}
              id="question"
              name="question"
              placeholder="Please Enter your Answer"
              className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] outline my-2"
            />
          </div>
          <div>
            <p className=" sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px]  font-bold  bg-transparent ">
              : Occoupation :
            </p>
            <input
              onChange={(e) => {
                setoccoupation(e.target.name);
              }}
              type="text"
              value={occoupation}
              id="question"
              name="question"
              placeholder="Please Enter your Answer"
              className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] outline my-2"
            />
          </div>
        </div>
        <div>
          <button>Set Changes</button>
          </div><div><button onClick={logOut}>Log out</button>
        </div>
      </div>
    </>
  );
};
export default Account;
