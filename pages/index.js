import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";

const Main = ({ allData, }) => {
  const [token,setToken] = useState("");
  useEffect(()=>{
    const tk = localStorage.getItem("token");
    setToken(tk);
  },[])
  const [answer, setinput] = useState([
    {
      question_id: " ",
      question_answer: " ",
    },
  ]);
  const [yesModal, setYesModal] = useState(false);
  const [noModal, setNoModal] = useState(false);
  const [disableOther, setDisableOther] = useState(false);

  const router = useRouter();
  const greenModal = () => {
    setYesModal(!yesModal);
    setDisableOther(!disableOther);
  };
  const redModal = () => {
    setNoModal(!noModal);
    setDisableOther(!disableOther);
  };
  const answerofquestion = async (id,e) => {
    e.preventDefault();
    let QA = answer.find(i=>i.id == id );
    
    let res = await fetch('http://localhost:3000/api/giveAnswer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({QA,token}),
    });
    let response = await res.json();
    console.log(response);
    if(response){
      if(response.success == true){
      router.push("http://localhost:3000/")    
      toast("Login Successfully 🥰", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#5fff59",
        },});
      }
      else{
        toast("Something went wrong 🙄", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },});
        console.log("fail to loggin")
      }
    }else{
      toast("Something went wrong 🙄", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },});
      console.log("fail to loggin")
    }
  
  };
  const setanswerwithid = (id, e, qid, qlb,qt ) => {
   
    setinput([
      
      {
        id,
        question_id: qid,
        question_label : qlb,
        question_title : qt,
        question_answer: e.target.value,
      },
    ]);
  };
  console.log(answer);

  return (
    <>
      <div className="">
        <div className=" m-4 space-y-2 ll:space-y-[1.5rem] k:space-y-[2rem]  text-justify t:p-4  k:p-10  l:text-center l:place-items-center l:p-10  k:text-center k:place-items-center ">
          <div className="text-center sm:text-[22px] mm:text-[24px] lm:text-[29px] t:text-[34px] l:text-[39px] ll:text-[44px] k:text-[64px]  font-sans font-bold">
            Hi! There It's
          </div>
          <div className="font-bold sm:mb-[2rem] sm:text-[2rem] text-center">
            <a className="sm:text-[---c5] font-black strocktext sm:text-[30px] mm:text-[35px] lm:text-[40px] t:text-[42px] l:text-[49px] ll:text-[57px] k:text-[80px] typing-text typing-container">
              Abubakar Afzal
            </a>
          </div>
          <div className="sm:bg-[---c2] sm:text-[---c4] sm:font-bold p-2 sm:h-[8rem] sm:overflow-y-scroll text-center scroll-auto mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] ll:w-[70rem] t:mx-auto hidebar">
            <p>
              First I want to .
              <a className="sm:text-[---c5] font-black  stroke-black sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] ">
                Introduce
              </a>
              . my self. I am a student of ICS .
              <a className="sm:text-[---c5] font-black">Statistics</a>. Part_II
              in .
              <Link
                href={`https://maps.app.goo.gl/rZwTdKpLKLXEp9Jq5`}
                className="sm:underline hover:text-[---f1]"
              >
                Govt, Islmaia College Railway Road, Lahore, Pakistan
              </Link>
              .
            </p>

            <p className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              This is a <a className="sm:text-[---c7] font-black">Survey</a> by
              which I got some answers of common questions. These questions
              always make somes problems in every one life.
            </p>
          </div>
          <div className="sm:text-[24px] sm:text-center sm:font-[bold] mt-6 mm:text-[28px] lm:text-[30px] t:text-[35px] l:text-[38px] ll:text-[42px] k:text-[50px]">
            So let's <a className="sm:text-[---c5] font-black">start</a> it!
          </div>

          <div className="sm:text-[17px] sm:text-center sm:font- my-2 mm:text-[16px] lm:text-[18px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
            <a className="sm:text-[---c7] font-black">Note:</a> Give answers
            what you think your answers will very helpful for someone.
          </div>

          {allData.map((item) => {
            return (
              <div key={item._id} className="h-auto">
                <div className="my-[2rem] t:w-[30rem] l:w-[35rem] mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] ">
                  <div className="font-bold sm:text-[20px] mm:text-[27px] lm:text-[30px] t:text-[28px] l:text-[33px] ll:text-[38px] k:text-[47px] ">
                    {item.question_title}
                  </div>
                  <div>
                    <hr className="text-[---c4] my-[2px]" />
                    <hr className="text-[---c4] my-[4px]" />
                  </div>
                  <p className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                    {item.question_label}
                  </p>
                  <input
                    onChange={(e) => {
                      setanswerwithid(item._id, e, item.question_id, item.question_label, item.question_title);
                    }}
                    type="text"
                    value={answer[item._id.qid]}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Answer"
                    className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"
                  />
                  <br />

                  <button
                    onClick={(e) => {
                      answerofquestion(item._id,e);
                    }}
                    className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] "
                  >
                    Send
                  </button>
                </div>
              </div>
            );
          })}
          {!allData && (
            <div className="bg-[---c7] text-center text-[---c4] rounded-[2rem] p-2">
              Please Add Question
            </div>
          )}
          <div>
            <p className="text-center  mt-[25px] text-[1.4rem] font-[bold] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              Do you give all answers !!
            </p>
            <div className="text-center sm:text-[16px] mm:text-[20px] lm:text-[24px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              <button
                onClick={greenModal}
                className="bg-[---c5] hover:bg-[---h5] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] "
              >
                Yes
              </button>
              <button
                onClick={redModal}
                className="bg-[---c7] hover:bg-[---h7] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/*yes modal */}
        {yesModal ? (
          <div className="m-4 sm:mt-[-8rem] mm:mt-[-8.5rem] lm:mt-[-9rem] t:mt-[-10rem] l:mt-[-12rem] ll:mt-[-13rem] relative">
            <div className="h-auto">
              <div className="my-[2rem] t:w-[30rem] l:w-[35rem] mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] ">
                <div className="font-bold sm:text-[20px] mm:text-[27px] lm:text-[30px] t:text-[28px] l:text-[33px] ll:text-[38px] k:text-[47px] ">
                  <RxCross2
                    onClick={greenModal}
                    className="hover:scale-[1.2] cursor-pointer duration-[1s] ml-auto mr-3"
                  />
                </div>
                <div>
                  <hr className="text-[---c4] mb-[2px]" />
                  <hr className="text-[---c4] mb-[4px]" />
                </div>
                <p className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  THANK YOU VERY MUCH 😊
                </p>

                <br />

                <button
                  onClick={greenModal}
                  className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/*no modal */}
        {noModal ? (
          <div className="m-4 sm:mt-[-8rem] mm:mt-[-8.5rem] lm:mt-[-9rem] t:mt-[-10rem] l:mt-[-12rem] ll:mt-[-13rem] relative">
            <div className="h-auto">
              <div className="my-[2rem] t:w-[30rem] l:w-[35rem] mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c7] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] ">
                <div className="font-bold sm:text-[20px] mm:text-[27px] lm:text-[30px] t:text-[28px] l:text-[33px] ll:text-[38px] k:text-[47px] ">
                  <RxCross2
                    onClick={redModal}
                    className="hover:scale-[1.2] cursor-pointer duration-[1s] ml-auto mr-3"
                  />
                </div>
                <div>
                  <hr className="text-[---c4] mb-[2px]" />
                  <hr className="text-[---c4] mb-[4px]" />
                </div>
                <p className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  PLEASE GIVE ALL ANSWERS 😳
                </p>

                <br />

                <button
                  onClick={redModal}
                  className="bg-[---b7] hover:bg-[---bh7] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
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
  const collection = database.collection("questions");
  const allData = await collection.find({}).toArray();

  return { props: { allData: JSON.parse(JSON.stringify(allData)) } };
}

export default Main;
