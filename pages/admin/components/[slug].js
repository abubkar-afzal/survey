import React from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import Link from "next/link";

const Answers = ({ dataofanswer }) => {
  const router = useRouter();
  const { slug } = router.query;
  let [data] = dataofanswer;
  console.log(data);

  return (
    <>
      <div className=" flex-col flex-wrap p-4 space-y-[1rem] mt-[1rem] m-[2rem]">
        <div className="justify-items-center">
          <div className="mt-[8px] pb-2 sm:text-[25px] mm:text-[28px] lm:text-[30px] t:text-[32px] l:text-[37px] ll:text-[42px] k:text-[47px] flex flex-wrap space-x-2 ">
            <p className="font-bold">Question #</p>
            <p>{data.answerStructure.question_id}</p>
          </div>
          <div className="mt-[8px] pb-2 place-content-center text-center sm:text-[20px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 ">
            <p className="font-bold">Question:</p>
            <p>{data.answerStructure.question_label}</p>
          </div>
        </div>
        <div>
        <div className="justify-items-center">
                <div className="flex space-x-2 text-center">
                  <div className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2 font-bold w-[30vw] place-content-center">
                    
                    USER
                  </div>
                  <div className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] flex flex-wrap space-x-2  w-[30vw] place-content-center">
                    ANSWER
                  </div>
                </div>
          {dataofanswer.map((item) => {
            return (
              
                <div className="text-center px-4 py-2 rounded-[2rem] shadow-lg w-auto h-auto hover:scale-[1.1] hover:text-[---f1] duration-[1s]" key={item._id}>
                  <Link href={`slug/${item._id}`}>
                    <div className="flex  ">
                      <div className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] text-wrap space-x-2 font-bold w-[30vw] place-content-center overflow-x-scroll hidebar ">
                        {item.answerStructure.user_name}
                      </div>
                      <div className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] h-auto w-[30vw] place-content-center overflow-x-scroll space-x-2 hidebar">   
                        {item.answerStructure.question_answer}
                      </div>
                    </div>
                  </Link>
                </div>
              
            );
          })}
          </div>
        </div>
      </div>
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
