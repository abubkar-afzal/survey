import React from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
const AnswerDetails = ({ dataofanswer }) => {
  const router = useRouter();
  const { slug } = router.query;
  const data = dataofanswer;
  return (
    <>
      <div spellcheck="true" className=" flex-col flex-wrap p-4 space-y-[1rem] mt-[1rem] m-[2rem]">
        <div spellcheck="true" className="font-bold sm:text-[25px]  mm:text-[22px] lm:text-[26px] t:text-[32px] l:text-[40px] ll:text-[45px] k:text-[70px] text-center">
          DETAILS
        </div>
        <hr className="" />
        <hr className="" />
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
          <p spellcheck="true" className="font-bold"> NAME:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.user_name}</p>
        </div>
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2  ">
          <p spellcheck="true" className="font-bold"> Occoupation:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.user_occoupation}</p>
        </div>
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
          <p spellcheck="true" className="font-bold">Question:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.question_label}</p>
        </div>
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
          <p spellcheck="true" className="font-bold">Answer:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.question_answer}</p>
        </div>
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
          <p spellcheck="true" className="font-bold"> Address:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.user_address}</p>
        </div>
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
          <p spellcheck="true" className="font-bold"> Phone:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.user_phone}</p>
        </div>
        <div spellcheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
          <p spellcheck="true" className="font-bold"> Email:</p>
          <p spellcheck="true" className="overflow-x-scroll hidebar">{data.answerStructure.user_email}</p>
        </div>
      </div>
    </>
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
  const collection = database.collection("answers");
  //   let idofanswer = context.query.slug.trim();
  let dataofanswer = await collection.findOne({
    _id: new ObjectId(context.query.slug),
  });
  console.log(dataofanswer);

  return { props: { dataofanswer: JSON.parse(JSON.stringify(dataofanswer)) } };
}
export default AnswerDetails;
