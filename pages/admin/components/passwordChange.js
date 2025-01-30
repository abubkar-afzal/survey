import { MongoClient } from "mongodb";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserSecret } from "react-icons/fa";

const PasswordChange = ({admin})=>{
    const router = useRouter();
    const [secretkey, setSecretkey] = useState("");
    const checkandchange =()=>{
        let [secret] = admin;
        console.log(secret.secret)
        if(secret.secret == secretkey){
            router.push(`http://localhost:3000/admin/components/changepass/${secretkey}`)
        }else{
            toast("Wrong secert 🙄", {
                style: {
                  padding: "16px",
                  color: "#ffffff",
                  background: "#ff5959",
                },});
        }
    }
    const back =()=>{
        
            router.push("http://localhost:3000/admin/components/goto")
        
    }
return(<>
     <div spellcheck="true" className="t:w-auto t:place-items-center t:mx-auto t:mt-[4rem]">
 <Toaster position="bottom-center" reverseOrder={true} />

              <div spellcheck="true" className=" sm:text-center sm:font- my-2 pt-[3rem] bg-[---c8] rounded-[2rem] mx-[1rem] text-[---c4] sm:h-auto sm:space-y-[2rem] font-semibold items-center place-items-center place-content-start p-[2rem]   ">
                <div spellcheck="true">
                  <div spellcheck="true" className=" sm:text-[22px] mm:text-[26px] lm:text-[30px] t:text-[42px] l:text-[49px] ll:text-[55px] k:text-[85px] mb-2">What's the Secret !!</div>
                  <hr className="bg-[---c4] mb-2" />
                  <hr className="bg-[---c4]" />
                </div>
                <div spellcheck="true" className=" ">
                <div spellcheck="true" className="text-left">
                  
                  <div spellcheck="true" className="flex ">
                    <FaUserSecret className="text-white m-2 sm:text-[22px] mm:text-[28px] lm:text-[32px] t:text-[37px] l:text-[42px] ll:text-[47px] k:text-[55px]" />
                    <input spellcheck="true"
                      onChange={(e) => {
                        setSecretkey(e.target.value);
                      }}
                      placeholder=" Enter your Secret Key"
                      type="text"
                      name="key"
                      value={secretkey}
                      id="key"
                      htmlFor="key"
                      className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
          focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
                    />
                  </div>
                </div>
              
                </div>
               
                <button spellcheck="true" onClick={checkandchange} className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]">
                    Check
                  </button>
                  
                  <button spellcheck="true" onClick={back} className="bg-[---c5] hover:bg-[---h5] p-2 mb-2 w-[8rem] rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[18px] lm:text-[22px] t:text-[27px] l:text-[32px] ll:text-[37px] k:text-[45px]">
                    Back
                  </button>
              </div>
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
  const collection = database.collection("admin");
  const admin = await collection.find({}).toArray();

  return { props: { admin: JSON.parse(JSON.stringify(admin)) } };
}
export default PasswordChange