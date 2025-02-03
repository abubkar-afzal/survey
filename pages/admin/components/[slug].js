import React from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const Answers = ({ dataofanswer }) => {
  const router = useRouter();
  const { slug } = router.query;
  let [data] = dataofanswer;

  return (
    <><Fade cascade> 
    {dataofanswer.length == 0 ? <div className="text-center px-4 mt-[2rem] py-2 rounded-[2rem] shadow-lg w-auto h-auto ">There is no answer of this question 😞</div>: 
      <div spellCheck="true" className="min-h-screen content-center flex-col flex-wrap p-4 space-y-[1rem] mt-[1rem] m-[2rem]">
        <div spellCheck="true" className="justify-items-center">
          <div spellCheck="true" className="mt-[8px] pb-2 sm:text-[25px] mm:text-[28px] lm:text-[30px] t:text-[32px] l:text-[37px] ll:text-[42px] k:text-[47px] flex flex-wrap space-x-2 ">
            <p spellCheck="true" className="font-bold">Question #</p>
            <p spellCheck="true">{data.answerStructure.question_id}</p>
          </div>
          <div spellCheck="true" className="mt-[8px] pb-2 place-content-center text-center sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
            <p spellCheck="true" className="font-bold">Question:</p>
            <p spellCheck="true">{data.answerStructure.question_label}</p>
          </div>
        </div>
        <div spellCheck="true">
        <div spellCheck="true" className="justify-items-center">
                <div spellCheck="true" className="flex space-x-2 text-center">
                  <div spellCheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 font-bold w-[30vw] place-content-center">
                    
                    USER
                  </div>
                  <div spellCheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2  w-[30vw] place-content-center">
                    ANSWER
                  </div>
                </div>
          {dataofanswer.map((item) => {
            return (
              <Slide triggerOnce duration={1500} direction="up">
                <div spellCheck="true" className="text-center px-4 mt-[2rem] py-2 rounded-[2rem] shadow-lg w-auto h-auto hover:scale-[1.1] hover:text-[---f1] duration-[1s]" key={item._id}>
                  <Link href={`slug/${item._id}`}>
                    <div spellCheck="true" className="flex  ">
                      <div spellCheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] text-wrap space-x-2 font-bold w-[30vw] place-content-center overflow-x-scroll hidebar ">
                        {item.answerStructure.user_name}
                      </div>
                      <div spellCheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] h-auto w-[30vw] place-content-center overflow-x-scroll space-x-2 hidebar">   
                        {item.answerStructure.question_answer}
                      </div>
                    </div>
                  </Link>
                </div></Slide>
              
            );
          })}
          {dataofanswer.length ==0 ? <Slide triggerOnce duration={1500} direction="up">
          <div spellCheck="true" className="text-center px-4 mt-[2rem] py-2 rounded-[2rem] shadow-lg w-auto h-auto hover:scale-[1.1] hover:text-[---f1] duration-[1s]">NO ANSWER GIVEN 😪</div></Slide>:null}
          </div>
        </div>
      </div>}</Fade>
    </>
  );
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
  let idofanswer = parseInt(context.query.slug);
  let dataofanswer = await collection
    .find({ "answerStructure.question_id": idofanswer })
    .toArray();

  return { props: { dataofanswer: JSON.parse(JSON.stringify(dataofanswer)) } };
}
export default Answers;
