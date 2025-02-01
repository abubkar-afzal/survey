import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";

const DeleteQuestion = () => {
      const [loader,setLoader] = useState(false);
  
  const [id, setId] = useState("");
  
 const router = useRouter();
      const currentUrl = router.asPath;
     let addQuestion;
     let updateQuestion;
     let deleteQuestion;
  let viewallQuestion;

     if (currentUrl === "/admin/components/addQuestion") {
       addQuestion = "sm:text-[---c4]  sm:bg-[---c3]";
       deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
       updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]"
     } else if (currentUrl === "/admin/components/updateQuestion") {
       updateQuestion = "sm:text-[---c4] sm:bg-[---c3]";
       addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
       deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
 viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]"
     } else if (currentUrl === "/admin/components/deleteQuestion") {
         updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
         addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
         deleteQuestion = "sm:text-[---c4] sm:bg-[---c3]";
   viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]"
     } else if (currentUrl === "/admin/components/ViewAllQuestion") {
      updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
      addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
      deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
      viewallQuestion = "sm:text-[---c4] sm:bg-[---c3]";
  
    } else{
       updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
       addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
       deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
       viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]";
 
     }

    const onDelete= async(e)=>{
      setLoader(true);
    e.preventDefault();
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteQuestion`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({question_id:id}),
      });
      let response = await res.json()
      toast(`Question ${id} has been delete 😣`, {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      });
      setId(""); 
      setLoader(false);
       
    }
  return (
    <><Fade cascade>
 <Toaster position="bottom-center" reverseOrder={true} />
 {loader ? (
             <Fade>
               <Toaster position="bottom-center" reverseOrder={true} />
             <div className="mx-auto mt-[40vh] mb-[40vh] justify-items-center">
             <DotLoader 
             color="rgba(0,168,89,255)"
             cssOverride={{}}
             loading
             size={60}
             speedMultiplier={1}
           />
           <br />
           <br />
               <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]" >Deleting Question Please Wait !!</p>
           </div></Fade>
            ):
     <div spellCheck="true" className="grid justify-items-center my-[2rem]">

        <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/addQuestion`}>
            <button spellCheck="true"
              className={`${addQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
            >
              Add Question
            </button>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/updateQuestion`}>
            <button spellCheck="true"
              className={`${updateQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Update Question
            </button>
          </Link>
          
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/deleteQuestion`}>
            <button spellCheck="true"
              className={`${deleteQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Delete Question
            </button>
          </Link>
          <div spellCheck="true" className="my-[2rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4]  space-y-[30px] mm:space-y-[35px] lm:space-y-[40px] t:space-y-[42px] l:space-y-[47px] ll:space-y-[52px] k:space-y-[60px] mx-4 pt-[2rem]">
        <div spellCheck="true" className="sm:flex sm:flex-col">
        <p spellCheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "> ID For Delte Question :</p>
                       
          <input spellCheck="true"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="number"
            htnlFor="id"
            className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
            placeholder="Please Enter Your Question Id ..."
            name="id"
            id="id"
          />
      
        </div>

    
        <button spellCheck="true"
          onClick={(e)=>{onDelete(e)}}
          className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"
          type="submit"
        >
          Delete
        </button>
      </div>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/ViewAllQuestion`}>
          <button spellCheck="true"
            className={`${viewallQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Question
          </button>
        </Link>
            </div>}</Fade>
     
    </>
  );
};

export default DeleteQuestion;
