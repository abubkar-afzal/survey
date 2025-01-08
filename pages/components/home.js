import React, { useState } from "react";

const Home = () => {
    const [input,setinput] =useState("");
  return (
    <>
      <div className="sm:m-4 scroll-smooth min-h-screen">
          <div className="font-bold sm:text-[1.8rem] text-center">Hi! There it's </div><div className="font-bold sm:mb-[2rem] sm:text-[2rem] text-center"><a className="sm:text-[---c5] font-black  strocktext">Abubakar Afzal</a></div>
        <div className="sm:bg-[---c2] sm:text-[---c4] sm:font-bold p-2 sm:h-[8rem] sm:overflow-y-scroll text-center scroll-auto">
          <p>
            First I want to <a className="sm:text-[---c5] font-black  stroke-black sm:text-[18px] ">Introduce</a> my self. I am a student of
            ICS <a className="sm:text-[---c5] font-black">Statistics</a> Part_II in <a className="underline font-semibold hover:cursor-pointer">Govt Islamia College Railway road Lahore</a>.
          </p>
          
          <p className="mt-[8px] pb-2">
            This is a <a className="sm:text-[---c7] font-black">Survey</a> by which I got some answers of common questions. These
            questions always make somes problems in every one life.
          </p>
        </div>
        <div className="sm:text-[24px] sm:text-center sm:font-[bold] mt-6">So let's <a className="sm:text-[---c5] font-black">start</a> it!</div>
        
        <div className="sm:text-[17px] sm:text-center sm:font- my-2">
        <a className="sm:text-[---c7] font-black">Note:</a> Give answers what you think your answers will very helpful for someone.
        </div>
        <div className="">
          <div className="text-center shadow-sm shadow-black rounded-[2rem] p-2 bg-[---c8] sm:text-[---c4] space-y-[10px]">
            <div className="font-bold sm:text-[20px] ">Question # 1</div>
            <hr className="text-[---c4] my-[2px]"/>
            <hr className="text-[---c4] my-[4px]"/>
            <p className="text-[17px] font-semibold">What you think that which is the best field for future ?</p>
            <input onChange={(e)=>{setinput(e.target.name)}} type="text" id="question" name="question" placeholder="Please Enter your Answer" className="h-[2rem] bg-[---c4] rounded-[2rem] mt-2 p-2 px-4 text-[---c6] sm:text-[14px]"/>
            <br />

            <button className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg ">Send</button>
          </div>
        </div>
        <div >
          <p className="text-center  mt-[25px] text-[1.4rem] font-[bold]">Do you give all answers !!</p>
          <div className="text-center">
          <button className="bg-[---c5] hover:bg-[---h5] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] ">Yes</button>
          <button className="bg-[---c7] hover:bg-[---h7] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4]">No</button></div>
        </div>
      </div>
    </>
  );
};
export default Home;
