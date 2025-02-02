import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash, FaUserSecret } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { Fade, Slide } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";
const changePassAdmin = () => {
  const router = useRouter();
  const { slug } = router.query;
      const [loader,setLoader] = useState(false);
  
  const [newsecret , setNewsecret] = useState("");
  const [password , setpassword] = useState("");
  const [hpassword , sethpassword] = useState(true);
  const [chpassword , setchpassword] = useState(true);
  const [cpassword , setcpassword] = useState("");
  const hideP =()=>{
    sethpassword(!hpassword);
  }
  const chideP =()=>{
    setchpassword(!chpassword);
  }
  let hidePass;
  let chidePass;
  if(hpassword){
    hidePass = "password"
  }else{
    hidePass = "text"
  }  
  if(chpassword){
    chidePass = "password"
  }else{
    chidePass = "text"
  }  
  const ChangePassword = async(e)=>{
    setLoader(true);

    if(password == cpassword){
      console.log(cpassword)
      if(newsecret){
        e.preventDefault();
        let admin = {
          oldSecret: slug,
          newSecret: newsecret,
          newPassword: password,
        };
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/changeAdminPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(admin),
        });
        let response = await res.json();
        console.log(response);

       if(response.success == true){
        toast("Password Updated Successfully 😉", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#5fff59",
          },
        
        });
        router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/components/goto`)
       }else{
        toast("Something went wrong try again 🙄", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },
        
        });
       }
    
      }else{
        toast("Secret key is empty 🙄", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },
        
        });
      }
    }else{
      toast("Password's must be same 🙄", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      
      });
    }
      setLoader(false);
    }
  return (
    <>
 <Toaster position="bottom-center" reverseOrder={true} />
 <Slide duration={1500} direction="right" triggerOnce>
 {loader ? (
             <Fade>
               <Toaster position="bottom-center" reverseOrder={true} />
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
               <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]" >Changing Password Please Wait !!</p>
           </div></Fade>
            ):
       <div spellCheck="true" className="min-h-screen content-center t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]">
            
            <div spellCheck="true" className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]   ">
              <div spellCheck="true">
                <div spellCheck="true" className=" sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2">
                  Change Password !!
                </div>
                <hr className="bg-[---c4] mb-2" />
                <hr className="bg-[---c4]" />
              </div>
              <div spellCheck="true" className=" space-y-[2rem]">
                <div spellCheck="true" className="text-left">
                  <div spellCheck="true" className="flex ">
                    <FaUserSecret className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                    <div spellCheck="true" className="h-auto w-auto rounded-[2rem] ">
                      {/* <p className=" my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-black absolute mt-[-16px] ml-[2rem] bg-transparent "> newsecret:</p>
                       */}
                      <input spellCheck="true"
                        onChange={(e) => {
                          setNewsecret(e.target.value);
                        }}
                        placeholder=" Enter your New Secret ..."
                        type="text"
                        name="newsecret"
                        value={newsecret}
                        id="newsecret"
                        htmlFor="newsecret"
                        className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black"
                      />
                    </div>
                  </div>
                </div>
                <div spellCheck="true" className="text-left">
                  <div spellCheck="true" className="flex ">
                    <TbPasswordUser className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                    <div spellCheck="true" className="flex">

                      <input spellCheck="true"
                        onChange={(e) => {
                          setpassword(e.target.value);
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
                <div spellCheck="true" className="text-left">
                  <div spellCheck="true" className="flex ">
                    <TbPasswordUser className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                    <div spellCheck="true" className="flex">

                      <input spellCheck="true"
                        onChange={(e) => {
                          setcpassword(e.target.value);
                        }}
                        type={chidePass}
                        name="Password"
                        value={cpassword}
                        id="Password"
                        placeholder=" Confrim Password ..."
                        htmlFor="Password"
                        className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black
      "
                      />
                      {
                        chpassword ? 
                        <FaEyeSlash onClick={chideP} className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]" />
  : 
  <FaEye onClick={chideP} className="text-white mt-[1rem] sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[23px] l:text-[25px] ll:text-[27px] k:text-[35px]" />

                      }
                    </div>
                    
                  </div>
                </div>
              </div>
             
              <button onClick={ChangePassword} className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]">
                Change
              </button>
            </div>
          </div>}</Slide>
    </>
  );
};
export default changePassAdmin;
