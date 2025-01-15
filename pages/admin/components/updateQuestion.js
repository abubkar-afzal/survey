import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const UpdateQuestion = () => {
  
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
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
  const onCheck = async (e) => {
    e.preventDefault();
    let question = {
      question_id: id,
      question_title: title,
      question_label: label,
    };
    let res = await fetch('http://localhost:3000/api/updateQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(question),
    });
    let response = await res.json();
    console.log(response);
    setId("");
    setTitle("");
    setLabel("");
  };
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
      <div className="my-[2rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] mx-4 ">
        <div className="sm:flex sm:flex-col">
          <div className="sm:my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] font-bold">
            Enter Question Id
          </div>
          <input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="number"
            htnlFor="id"
            className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] py-2  "
            placeholder="Please Enter Your Question Id"
            name="id"
            id="id"
          />
        </div>

        <div className="sm:flex sm:flex-col">
          <div className="sm:my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] font-bold">
            Enter Question Title
          </div>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            htnlFor="title"
            className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] py-2   "
            placeholder="Please Enter Your Question Title"
            name="title"
            id="title"
          />
        </div>
        <div className="sm:flex sm:flex-col">
          <div className="sm:my-2 sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] font-bold">
            Enter Question Label
          </div>
          <input
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
            type="text"
            htnlFor="div"
            className="bg-[---c4] sm:rounded-[2rem] text-black h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px] py-2   "
            placeholder="Please Enter Your Question Label"
            name="div"
            id="div"
          />
        </div>
        <button
          onClick={onCheck}
          className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"
          type="submit"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default UpdateQuestion;
