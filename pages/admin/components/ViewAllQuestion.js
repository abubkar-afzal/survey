import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import { Fade, Slide } from "react-awesome-reveal";

const AddQuestion = ({allData}) => {
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
    viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/admin/components/updateQuestion") {
    updateQuestion = "sm:text-[---c4] sm:bg-[---c3]";
    addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
    viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    deleteQuestion = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/admin/components/deleteQuestion") {
    updateQuestion = "sm:text-[---c4] sm:bg-[---c9]";
    addQuestion = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteQuestion = "sm:text-[---c4] sm:bg-[---c3]";
    viewallQuestion = "sm:text-[---c4] sm:bg-[---c9]";
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
      <div spellCheck="true" className="min-h-screen content-center grid justify-items-center my-[2rem]">
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/addQuestion`}>
          <button spellCheck="true"
            className={`${addQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
          >
            Add Question
          </button>
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/updateQuestion`}>
          <button spellCheck="true"
            className={`${updateQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
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
        <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/ViewAllQuestion`}>
          <button spellCheck="true"
            className={`${viewallQuestion}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Question
          </button>
        </Link>
        {allData.map ((item) => {
          return (
            <Slide triggerOnce duration={1500} direction="right">
               <div spellCheck="true"
            key={item._id}
              className="my-[2rem] sm:w-[12rem] mm:w-[15rem] lm:w-[18rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4]  space-y-[30px] mm:space-y-[35px] lm:space-y-[40px] t:space-y-[42px] l:space-y-[47px] ll:space-y-[52px] k:space-y-[60px] mx-4 pt-[2rem] break-all"
            >
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p spellCheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  
                  ID Of Question :
                </p>
                <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">{item.question_id}</p>
              </div>

              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p spellCheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  Title Of Question :
                </p>
                <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">{item.question_title}</p>
              </div>
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p spellCheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  
                  Label Of Question :
                </p>
                <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">{item.question_label}</p>
              </div>
            </div></Slide>
          );
        })}
        {!allData && (
          <Slide triggerOnce duration={1500} direction="right"><div spellCheck="true" className="bg-[---c7] text-center text-[---c4] rounded-[2rem] p-2">
            Please Add Question
          </div></Slide>
        )}
      </div>
    </Fade></>
  );
};
export async function getServerSideProps(context) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  // Choose a name for your database
  const database = client.db("survey");

  // Choose a name for your collection
  const collection = database.collection("questions");
  const allData = await collection.find({}).toArray();

  return { props: { allData: JSON.parse(JSON.stringify(allData)) } };
}
export default AddQuestion;
