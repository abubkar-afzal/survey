import React, { useState } from "react";
import { useRouter } from "next/router";
import { TbPasswordUser } from "react-icons/tb";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Slide } from "react-awesome-reveal";


const Admin= ()=>{
  
    const router = useRouter();
   
    
    const [password, setPassword] = useState("");
    const [hpassword, sethpassword] = useState(true);
    
    let hidePass;
    if(hpassword){
      hidePass = "password"
    }else{
      hidePass = "text"
    }
  
    const hideP =()=>{
      sethpassword(!hpassword);
    }
    const onLogin = async (e) => {
      e.preventDefault();
      let p = {
        password : password
      }
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/loginAdmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(p),
      });
      let response = await res.json();
      console.log(response);
      if(response){
        if(response.success == true){
        router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/components/goto`)    
        toast("Welxome Admin 🕵🏻‍♀️", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#5fff59",
          },});
        }
        else{
          toast("You are not Admin 😒", {
            style: {
              padding: "16px",
              color: "#ffffff",
              background: "#ff5959",
            },});
          console.log("fail to loggin")
        }
      }else{
        toast("You are not Admin 😒", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },});
        console.log("fail to loggin")
      }
    };
  
    return (
      <><Slide triggerOnce duration={1000} direction="down">
         <Toaster position="bottom-center" reverseOrder={true} /><div className="">
  
  
          <div className="min-h-screen content-center sm:text-center mm:mt-[1rem] t:mt-[1rem]">
            <div className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]">
              <div className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]   ">
                <div>
                  <div className=" sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2">
                    Welcome Admin !!
                  </div>
                  <hr className="bg-[---c4] mb-2" />
                  <hr className="bg-[---c4]" />
                </div>
                <div className=" space-y-[2rem]">
                
                  <div className="text-left">
                    <div className="flex ">
                      <TbPasswordUser className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                      <div className="flex">
  
                        <input
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
                        {
                          hpassword ? 
                          <FaEyeSlash onClick={hideP} className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]" />
                          : 
                          <FaEye onClick={hideP} className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]" />
                        
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={onLogin} className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div></Slide>
      </>
    );
  };

export default Admin 