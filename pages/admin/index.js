import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Admin=()=>{
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
   
    return(
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
            
            </>

    )
}
export default Admin