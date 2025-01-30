import { MongoClient } from "mongodb";
import Link from "next/link";
import React from "react";
const AnswersDashboard=({allQuestions})=>{
   
    return(<>
        <div spellcheck="true" className="text-center justify-items-center">
            <div spellcheck="true" className="mt-[2rem] text-[2rem] font-semibold mb-[1rem]">QUESTIONS</div>
            {allQuestions.map((item)=>{
                return(
            <Link href={`${String(item.question_id)}`} className="cursor-pointer"><div spellcheck="true" className="flex text-[20px] space-x-2 hover:scale-[1.2] hover:text-[---f1] duration-[1s] w-auto px-4 rounded-[2rem] h-auto py-2 shadow-lg" key={item.question_id}>
            <span spellcheck="true" className="flex">Question # <p spellcheck="true" className="font-bold ">{item.question_id}</p></span>
            <p spellcheck="true">|</p>
            <p spellcheck="true">{item.question_title}</p>
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
  const collection = database.collection("questions");
  const allQuestions = await collection.find({}).toArray();

  return { props: { allQuestions: JSON.parse(JSON.stringify(allQuestions)) } };
}

export default AnswersDashboard