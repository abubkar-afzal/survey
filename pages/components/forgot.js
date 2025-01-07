import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Forgot = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [email, setemail] = useState("");
  
  let login;
  let forgot;
  if (currentUrl === "/components/forgot") {
    login = "sm:text-[---c4]  sm:bg-[---c3]";
    forgot = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/components/login") {
    forgot = "sm:text-[---c4] sm:bg-[---c3]";
    login = "sm:text-[---c4]  sm:bg-[---c9]";
  }
  return (
    <>
      <div>
        <div className="sm:text-center mm:mt-[1rem]">
         
          <Link href={`http://localhost:3000/components/login`}>
            <button
              className={`${forgot}  p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]`}
            >
             Login
            </button>
          </Link> <Link href={`http://localhost:3000/components/forgot`}>
            <button
              className={`${login}  p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] `}
            >
             Forgot
            </button>
          </Link>
          <div className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-content-start p-[2rem] ">
            <div>
              <div className="text-[1.3rem] mb-2">Forgot Password !!</div>
              <hr className="bg-[---c4] mb-2" />
              <hr className="bg-[---c4]" />
            </div>
            <div className="text-left">
              <div className="sm:text-[15px] my-2"> Email:</div>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Please Enter your Email"
                type="email"
                name="Phone"
                value={email}
                id="Phone"
                htmlFor="Phone"
                className="bg-[---c4] sm:rounded-[2rem] text-black sm:h-[2rem] sm:px-3 sm:text-[11px] sm:w-[11rem]"
              />
            </div>
           
            
            <button className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgot;
