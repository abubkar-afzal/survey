import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const DeleteQuestion = () => {
  
  const [id, setId] = useState("");
  
 const router = useRouter();
      const currentUrl = router.asPath;
     let addQuestion;
     let updateQuestion;
     let deleteQuestion;
     if (currentUrl === "/admin/components/addQuestion") {
       addQuestion = "sm:text-[---c4]  sm:bg-[---c3]";
       deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
       updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
     } else if (currentUrl === "/admin/components/updateQuestion") {
       updateQuestion = "sm:text-[---c4] sm:bg-[---c3]";
       addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
       deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
 
     } else if (currentUrl === "/admin/components/deleteQuestion") {
         updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
         addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
         deleteQuestion = "sm:text-[---c4] sm:bg-[---c3]";
   
     }  else{
       updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
       addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
       deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
 
     }

    const onDelete= async()=>{
      let res = await fetch('http://localhost:3000/api/deleteQuestion',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({question_id:id}),
      });
      let response = await res.json()
    }
  return (
    <>
     <div className="sm:flex sm:flex-wrap sm:w-auto place-content-center my-2">
        <Link href={`http://localhost:3000/admin/components/addQuestion`}>
            <button
              className={`${addQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
            >
              Add Question
            </button>
          </Link>
          <Link href={`http://localhost:3000/admin/components/updateQuestion`}>
            <button
              className={`${updateQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Update Question
            </button>
          </Link>
          
          <Link href={`http://localhost:3000/admin/components/deleteQuestion`}>
            <button
              className={`${deleteQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
            >
              Delete Question
            </button>
          </Link>
            </div>
      <div className="my-[2rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4]  space-y-[30px] mm:space-y-[35px] lm:space-y-[40px] t:space-y-[42px] l:space-y-[47px] ll:space-y-[52px] k:space-y-[60px] mx-4 pt-[2rem]">
        <div className="sm:flex sm:flex-col">
          
          <input
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

    
        <button
          onClick={onDelete}
          className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"
          type="submit"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteQuestion;
