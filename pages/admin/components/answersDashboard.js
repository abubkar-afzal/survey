import { MongoClient } from "mongodb";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
const AnswersDashboard=({allQuestions})=>{
   
    return(<><Fade cascade>
        <div spellCheck="true" className="min-h-screen content-center text-center justify-items-center">
            <div spellCheck="true" className="mt-[2rem] text-[2rem] font-semibold mb-[1rem]">QUESTIONS</div>
            {allQuestions.map((item)=>{
                return(
            <Slide duration={1500} direction="top" triggerOnce>
           <Link href={`${String(item.question_id)}`} className="cursor-pointer"><div spellCheck="true" className="flex text-[20px] space-x-2 hover:scale-[1.2] hover:text-[---f1] duration-[1s] w-auto px-4 rounded-[2rem] h-auto py-2 shadow-lg break-all" key={item.question_id}>
            <span spellCheck="true" className="flex">Question # <p spellCheck="true" className="font-bold ">{item.question_id}</p></span>
            <span spellCheck="true ">|</span>
            <span spellCheck="true ">{item.question_title}</span>
        </div></Link></Slide>
        )

            })}
        </div></Fade>
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