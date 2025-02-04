import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";

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
  const getPassword = async (e) => {
    e.preventDefault();
    if(email.includes("@")){
    let d = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    let res = await d.json();
   

    if (res) {
      if (res.success) {
        const phoneNumber = res.forgot.user_phone; // Replace with the user's phone number (including country code)
        const message = `Hello! This message Is from Abubakar Afzal. ${res.forgot.user_name} !! You Forgot Your Password So I'm Here To Tell You That Your Password Is ${res.forgot.user_password}`; // Replace with your pre-filled message
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
    window.location.href = whatsappLink; // Redirect to the WhatsApp link
    toast("Now Login Please 😍", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#5fff59",
          },
        });
       
      } else {
        
          toast("Account Not Found 😳", {
            style: {
              padding: "16px",
              color: "#ffffff",
              background: "#ff5959",
            },
          });
      }
    } else {
      toast("Account Not Found 😳", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      });
    }} else {
      toast("Please enter correct Email 🤨", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      });
    }
  };
  return (
    <><Toaster position="bottom-center" reverseOrder={true} />
      <Fade cascade>
      

        <div spellCheck="true" className=" mt-[1rem]">
          <div
            spellCheck="true"
            className="sm:text-center mm:mt-[1rem] t:mt-[2rem]"
          >
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/login`}>
              <button
                spellCheck="true"
                className={` ${forgot} p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
              >
                Login
              </button>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/forgot`}>
              <button
                spellCheck="true"
                className={`${login} p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
              >
                Forgot
              </button>
            </Link>
            <Slide direction="right" triggerOnce duration={1000}>
              <div
                spellCheck="true"
                className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]"
              >
                <div
                  spellCheck="true"
                  className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]   "
                >
                  <div spellCheck="true">
                    <div
                      spellCheck="true"
                      className=" sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2"
                    >
                      Forgot Password !!
                    </div>
                    <hr className="bg-[---c4] mb-2" />
                    <hr className="bg-[---c4]" />
                  </div>
                  <div spellCheck="true" className=" ">
                    <div spellCheck="true" className="text-left">
                      <div spellCheck="true" className="flex ">
                        <MdOutlineMarkEmailUnread className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                        <input
                          spellCheck="true"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          placeholder=" Enter your Email"
                          type="email"
                          name="Email"
                          value={email}
                          id="Email"
                          htmlFor="Email"
                          className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    spellCheck="true"
                    onClick={getPassword}
                    className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]"
                  >
                    Check
                  </button>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Forgot;
