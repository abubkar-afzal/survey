import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const QuestionsAdmin = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  let addQuestion;
  let updateQuestion;
  let deleteQuestion;
  let viewallQuestion;

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
  } else if (currentUrl === "/admin/components/ViewAllQuestion") {
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

  return (
    <><Fade cascade>
      <div className="min-h-screen content-center grid justify-items-center my-[2rem]">
        <Slide direction="left"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/addQuestion`}>
          <button spellCheck="true"
            className={`${addQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
          >
            Add Question
          </button>
        </Link></Slide>

        <Slide direction="right"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/updateQuestion`}>
          <button spellCheck="true"
            className={`${updateQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Update Question
          </button>
        </Link></Slide>
        <Slide direction="left"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/deleteQuestion`}>
          <button spellCheck="true"
            className={`${deleteQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Delete Question
          </button>
        </Link> </Slide>
        <Slide direction="right"><Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/ViewAllQuestion`}>
          <button spellCheck="true"
            className={`${viewallQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Question
          </button>
        </Link></Slide>
      </div></Fade>
    </>
  );
};
export default QuestionsAdmin;
