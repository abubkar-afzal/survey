import { MongoClient } from "mongodb";
import Link from "next/link";
import React from "react";
const AnswersDashboard=({allAnswers})=>{
    const uniqueObjects = Array.from(new Set(allAnswers.map(o => JSON.stringify(o)))).map(str => JSON.parse(str));

      console.log(uniqueObjects)
    return(<>
        <div className="text-center justify-items-center">
            <div className="mt-[2rem] text-[2rem] font-semibold mb-[1rem]">Data Of Answers</div>
            {uniqueObjects.map((item)=>{
                return(
            <Link href={`${String(item.answerStructure.question_id)}`} className="cursor-pointer"><div className="flex text-[20px] space-x-2" key={item.answerStructure.question_id}>
            <span className="flex">Question # <p className="font-bold ">{item.answerStructure.question_id}</p></span>
            <p>|</p>
            <p>{item.answerStructure.question_title}</p>
        </div></Link>
        )

            })}
        </div>
    </>)  
}

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
  const allAnswers = await collection.find({}).toArray();

  return { props: { allAnswers: JSON.parse(JSON.stringify(allAnswers)) } };
}

export default AnswersDashboard