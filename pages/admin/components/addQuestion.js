import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const AddQuestion = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
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
    deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]"
  } else if (currentUrl === "/admin/components/deleteQuestion") {
    updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteQuestion = "sm:text-[---c4] sm:bg-[---c3]";viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]"
  }else if (currentUrl === "/admin/components/ViewAllQuestion") {
    updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    viewallQuestion = "sm:text-[---c4] sm:bg-[---c3]";

  } else {
    updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]";

  }
  const onAdd = async (e) => {
    e.preventDefault();
    let question = {
      question_id: id,
      question_title: title,
      question_label: label,
    };
    let r = await fetch("http://localhost:3000/api/checkQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(question),
    });
    let unique = await r.json();
    if ( title.length >=4 && label.length >=4 ){
    if (unique.success == false) {
    let res = await fetch("http://localhost:3000/api/addQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(question),
    });
    let response = await res.json();
    console.log(response);
    toast("Qestion Added Successfully 😀", {
      style: {
        padding: "16px",
        color: "#ffffff",
        background: "#5fff59",
      },
    });
    
    setId("");
    setTitle("");
    setLabel("");
  } else {
    toast("Id must be unique 🥱", {
      style: {
        padding: "16px",
        color: "#ffffff",
        background: "#ff5959",
      },
    });
  }}else{
    toast("Please enter correct things 🤨", {
      style: {
        padding: "16px",
        color: "#ffffff",
        background: "#ff5959",
      },
    });
  }}
  return (
    <>
      <div spellcheck="true" className="grid justify-items-center my-[2rem]">
      <Toaster position="bottom-center" reverseOrder={true} />

        <Link href={`http://localhost:3000/admin/components/addQuestion`}>
          <button spellcheck="true"
            className={`${addQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
          >
            Add Question
          </button>
        </Link>
        <div spellcheck="true" className="my-[2rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4]  space-y-[30px] mm:space-y-[35px] lm:space-y-[40px] t:space-y-[42px] l:space-y-[47px] ll:space-y-[52px] k:space-y-[60px] mx-4 pt-[2rem]">
          <div spellcheck="true" className="sm:flex sm:flex-col">
          <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "> ID Of Question :</p>
            <input spellcheck="true"
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

          <div spellcheck="true" className="sm:flex sm:flex-col">
          <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">Title Of Question :</p>
            <input spellcheck="true"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              htnlFor="title"
              className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black  "
              placeholder="Please Enter Your Question Title ..."
              name="title"
              id="title"
            />
          </div>
          <div spellcheck="true" className="sm:flex sm:flex-col">
          <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "> Label Of Question :</p>
            <input spellcheck="true"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
              type="text"
              htnlFor="div"
              className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
              placeholder="Please Enter Your Question Label ..."
              name="div"
              id="div"
            />
          </div>
          <button spellcheck="true"
            onClick={onAdd}
            className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"
            type="submit"
          >
            Add
          </button>
        </div>
        <Link href={`http://localhost:3000/admin/components/updateQuestion`}>
          <button spellcheck="true"
            className={`${updateQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Update Question
          </button>
        </Link>

        <Link href={`http://localhost:3000/admin/components/deleteQuestion`}>
          <button spellcheck="true"
            className={`${deleteQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Delete Question
          </button>
        </Link>
        <Link href={`http://localhost:3000/admin/components/ViewAllQuestion`}>
          <button spellcheck="true"
            className={`${viewallQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Question
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddQuestion;
