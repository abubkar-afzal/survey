import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import { DotLoader } from "react-spinners";
import Head from "next/head";
import { Fade, Slide } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import Popup from "reactjs-popup";

const Main = ({ allData, user }) => {
  const router = useRouter();
  // const [oldanswer, setoldanswer] = useState({});
  const [token, setToken] = useState(user.value);
  const [answer, setinput] = useState([
    {
      question_id: " ",
      question_answer: " ",
    },
  ]);
  const [display, setdisplay] = useState(false);
  const [thanks, setthanks] = useState(false);
  const [dyes,setdyes] = useState(true);
  const [dno,setdno] = useState(false);
  
  useEffect(() => {
    answerchange();
  }, [router.query]);

  
  
  
      Notification.requestPermission().then((result) => {
      
          if (result === "granted") {
            const notifaiction = new Notification("New Question Is Added 🥰💖", {
                body: "There is a new question added in survey",
                icon: "/survey-logo.png",
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: "vibration-sample",
              });
             
              notifaiction.onclick = function(event) {
                event.preventDefault(); // Prevent the browser from focusing the Notification's tab
                window.open(`${process.env.NEXT_PUBLIC_HOST}/`, "_blank"); // Open the link in a new tab
              };
      }
    }
 )

  
  
  const answerchange = async () => {
   
    if (token) {
      let r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getAllAnswers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(token),
      });
      const a = await r.json();
      let inputanswer = a.answer.map(({ answerStructure }) => ({
        _id: answerStructure._id,
        question_answer: answerStructure.question_answer,
        question_id: answerStructure.question_id,
      }));

      let remove = [];
      for(let i=0; inputanswer.length>=i+1; i++){
        var j = inputanswer[i].question_id;
        remove.push(j)
      }
      

      // allData.filter((obj) => obj.question_id !== remove.includes(obj.question_id));
     
        for (let i = allData.length - 1; i >= 0; i--) {
          if (remove.includes(allData[i].question_id)) {
            allData.splice(i, 1);
          }
        }
      setTimeout(()=>{setdisplay(true)},3000)
      if(allData.length == 0){
      setthanks(true);
      setdyes(false);
      setdno(true);

      }
    } else {
      setTimeout(()=>{setdisplay(true)},3000)
    }
  };
  const [yesModal, setYesModal] = useState(false);
  const [noModal, setNoModal] = useState(false);
  const [disableOther, setDisableOther] = useState(false);

  const greenModal = () => {
    setYesModal(!yesModal);
    setDisableOther(!disableOther);
  };
  const redModal = () => {
    setNoModal(!noModal);
    setDisableOther(!disableOther);
  };
  const answerofquestion = async (id, e) => {
    e.preventDefault();
    if (token) {
      let QA = answer.find((i) => i.id == id);

      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/giveAnswer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ QA, token }),
      });
      let response = await res.json();
      if (response) {
        if (response.success == true) {
          router.push({
            pathname: `${process.env.NEXT_PUBLIC_HOST}/`,
            
            },
            undefined, { shallow: true }
            )
         setTimeout(() => { toast("You Answer Has Been Send 🥰", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#5fff59",
          },
        }); }, 3000);
        } else {
          toast("Something went wrong 🙄", {
            style: {
              padding: "16px",
              color: "#ffffff",
              background: "#ff5959",
            },
          });
        }
      } else {
        toast("Something went wrong 🙄", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },
        });
      }
    } else {
      setTimeout(() => {
        toast("Please make an account first 😉", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#4872e4",
          },
        });
      }, 2000);

      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/components/signup`);
      }, 10);
    }
  };
  const setanswerwithid = (id, e, qid, qlb, qt) => {
    setinput([
      {
        id,
        question_id: qid,
        question_label: qlb,
        question_title: qt,
        question_answer: e.target.value,
      },
    ]);
  };

  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState("");

    useEffect(() => {
      if(!localStorage.getItem("token")){
          setOpen(true)
        }
    }, [])
    
    const closeModal = () => {setOpen(false) 
     
    };
  if(open  == true){
    document.body.style.overflow = "hidden";
   
}else{
    document.body.style.overflow = "auto";
   
}

  return (
    <>
    <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ background: 'rgba(255, 255, 255, 0)', border: 'none', width:500,  }}  >
              <div className="items-center text-center rounded-[2rem] bg-[---c2] xsm:mx-[2rem] sm:mx-[1px] shadow-lg">
              <iframe className="rounded-[2rem] w-full sm:h-[40vh] xsm:h-[25vh]"
src="https://www.youtube.com/embed/HUX6JvHrE5g?autoplay=1&mute=1" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>
                <h2 className=" text-white font-black p-4 rounded-[2rem] sm:text-[20px] xsm:text-[16px] m-4 ">This is Tutorial That How to Give Answer First Time ..!!</h2>
                <button onClick={closeModal} className="bg-[---c7] text-white font-black p-4 rounded-[1.5rem] sm:text-[20px] xsm:text-[14px] m-4">Ok..!!</button>
              </div>
            </Popup>
        <Toaster position="bottom-center" reverseOrder={true} />
        <Fade cascade className={`${open  ? "blurred-background":null}`}>
        <div spellCheck="true" className="">

        <div spellCheck="true" className=" m-4 space-y-2 ll:space-y-[1.5rem] k:space-y-[2rem]  text-justify t:p-4  k:p-10  l:text-center l:place-items-center l:p-10  k:text-center k:place-items-center ">
          <div spellCheck="true" className="text-center sm:text-[22px] mm:text-[24px] lm:text-[29px] t:text-[34px] l:text-[39px] ll:text-[44px] k:text-[64px]  font-sans font-bold">
            HI! There It's
          </div>
          <div spellCheck="true" className="font-bold sm:mb-[2rem] sm:text-[2rem] text-center">
            <a className="sm:text-[---c5] font-black strocktext sm:text-[30px] mm:text-[35px] lm:text-[40px] t:text-[42px] l:text-[49px] ll:text-[57px] k:text-[80px] ">
            <ReactTyped
                  strings={["Abubakar Afzal"]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
            </a>
          </div>
          <div spellCheck="true" className="sm:bg-[---c2] sm:text-[---c4] sm:font-bold p-2 sm:h-[8rem] sm:overflow-y-scroll text-center scroll-auto mm:text-[18px] lm:text-[20px] t:text-[20px] l:text-[25px] ll:text-[30px] k:text-[35px] ll:w-[70rem] t:mx-auto hidebar">
            <p spellCheck="true">
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

            <p spellCheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              This is a <a className="sm:text-[---c7] font-black">Survey</a> by
              which I got some answers of common questions. These questions
              always make somes problems in every one life.
            </p>
          </div>
          <div spellCheck="true" className="sm:text-[24px] sm:text-center sm:font-[bold] mt-6 mm:text-[28px] lm:text-[30px] t:text-[35px] l:text-[38px] ll:text-[42px] k:text-[50px]">
            So let's <a className="sm:text-[---c5] font-black">start</a> it!
          </div>

          <div spellCheck="true" className="sm:text-[17px] sm:text-center sm:font- my-2 mm:text-[16px] lm:text-[18px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
            <a className="sm:text-[---c7] font-black">Note:</a> Give answers
            what you think your answers will very helpful for someone.
          </div>
          {
            display ? 

           allData.map((item) => {
            
            return (
              <Slide triggerOnce duration={2000}><div spellCheck="true" key={item._id} className="h-auto">
             <div spellCheck="true" className="my-[2rem] t:w-[30rem] l:w-[35rem] mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] ">
               <div spellCheck="true" className="font-bold sm:text-[20px] mm:text-[27px] lm:text-[30px] t:text-[28px] l:text-[33px] ll:text-[38px] k:text-[47px] ">
                 {item.question_title}
               </div>
               <div spellCheck="true">
                 <hr className="text-[---c4] my-[2px]" />
                 <hr className="text-[---c4] my-[4px]" />
               </div>
               <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold ">
                 {item.question_label}
               </p>
               <input spellCheck="true"
                 onChange={(e) => {
                   setanswerwithid(
                     item._id,
                     e,
                     item.question_id,
                     item.question_label,
                     item.question_title
                   );
                 }}
                 type="text"
                 value={answer[item._id.qid]}
                 id="question"
                 name="question"
                 placeholder="Please Enter your Answer"
                 className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] break-all"
               />
               <br />

               <button spellCheck="true"
                 onClick={(e) => {
                   answerofquestion(item._id, e);
                 }}
                 className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] "
               >
                 Send
               </button>
             </div>
           </div></Slide> 
            );
         
          }): <div spellCheck="true" className="mx-auto mt-[60vh] mb-[40vh] justify-items-center">
          <DotLoader 
          color="rgba(0,168,89,255)"
          cssOverride={{}}
          loading
          size={30}
          speedMultiplier={1}
        />
        <br />
        <br />
            <p spellCheck="true" className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]" >Please Wait !!</p>
        </div>
          }

          {thanks?<div spellCheck="true" className=" text-center text-wrap rounded-[2rem] p-2">
             Thank You Very Much You Already Give All Answer's 🥰💖 
            </div>:null
           }
            
          <div spellCheck="true">
            <p spellCheck="true" className="text-center  mt-[25px] text-[1.4rem] font-[bold] sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              Do you give all answers !!
            </p>
            <div spellCheck="true" className="text-center sm:text-[16px] mm:text-[20px] lm:text-[24px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              <button spellCheck="true"
              disabled={dyes}
                onClick={greenModal}
                className="disabled:bg-[---h5] bg-[---c5] hover:bg-[---h5] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] "
              >
                Yes
              </button>
              <button spellCheck="true"
                onClick={redModal}
              disabled={dno}
                className="disabled:bg-[---bh7] bg-[---c7] hover:bg-[---h7] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/*yes modal */}
        {yesModal ? (
          <Fade cascade>
            <div spellCheck="true" className="m-4 sm:mt-[-8rem] mm:mt-[-8.5rem] lm:mt-[-9rem] t:mt-[-10rem] l:mt-[-12rem] ll:mt-[-13rem] relative">
            <div spellCheck="true" className="h-auto">
              <div spellCheck="true" className="my-[2rem] t:w-[30rem] l:w-[35rem] mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] ">
                <div spellCheck="true" className="font-bold sm:text-[20px] mm:text-[27px] lm:text-[30px] t:text-[28px] l:text-[33px] ll:text-[38px] k:text-[47px] ">
                  <RxCross2
                    onClick={greenModal}
                    className="hover:scale-[1.2] cursor-pointer duration-[1s] ml-auto mr-3"
                  />
                </div>
                <div spellCheck="true">
                  <hr className="text-[---c4] mb-[2px]" />
                  <hr className="text-[---c4] mb-[4px]" />
                </div>
                <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  THANK YOU VERY MUCH 😊
                </p>

                <br />

                <button spellCheck="true"
                  onClick={greenModal}
                  className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] "
                >
                  Close
                </button>
              </div>
            </div>
          </div></Fade>
        ) : null}

        {/*no modal */}
        {noModal ? (
          <Fade cascade>
          <div spellCheck="true" className="m-4 sm:mt-[-8rem] mm:mt-[-8.5rem] lm:mt-[-9rem] t:mt-[-10rem] l:mt-[-12rem] ll:mt-[-13rem] relative">
            <div spellCheck="true" className="h-auto">
              <div spellCheck="true" className="my-[2rem] t:w-[30rem] l:w-[35rem] mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c7] sm:text-[---c4] space-y-[10px] mm:space-y-[15px] lm:space-y-[20px] t:space-y-[22px] l:space-y-[27px] ll:space-y-[32px] k:space-y-[40px] ">
                <div spellCheck="true" className="font-bold sm:text-[20px] mm:text-[27px] lm:text-[30px] t:text-[28px] l:text-[33px] ll:text-[38px] k:text-[47px] ">
                  <RxCross2
                    onClick={redModal}
                    className="hover:scale-[1.2] cursor-pointer duration-[1s] ml-auto mr-3"
                  />
                </div>
                <div spellCheck="true">
                  <hr className="text-[---c4] mb-[2px]" />
                  <hr className="text-[---c4] mb-[4px]" />
                </div>
                <p spellCheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  PLEASE GIVE ALL ANSWERS 🥺
                </p>

                <br />

                <button spellCheck="true"
                  onClick={redModal}
                  className="bg-[---b7] hover:bg-[---bh7] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] "
                >
                  Close
                </button>
              </div>
            </div>
          </div></Fade>
        ) : null}
      </div>
      </Fade>
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
