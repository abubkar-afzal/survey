import React from "react";
import Image from "next/image";
import { MongoClient } from "mongodb";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const Blogs = ({ allBlogs }) => {
  return (
    <><Fade cascade>
      <div spellCheck="true" className=" mt-[1rem] justify-items-center ">
        <div spellCheck="true" className="sm:font-bold sm:text-[24px] mm:text-[28px] lm:text-[30px] t:text-[32px] l:text-[39px] ll:text-[45px] k:text-[65px] sm:mt-[1rem] k:my-[2rem]">
          BLOGS
        </div>
        {allBlogs.map((item) => {
          return (
            <Slide duration={1500} direction="top" triggerOnce >
            <div spellCheck="true" key={item._id} className="h-auto cursor-pointer hover:scale-[1.04] duration-[1s] my-[2rem]">
              <Link href={`slug/${item.blog_slug}`} >
                <div spellCheck="true" className="sm:w-auto sm:h-auto bg-[---c4] place-items-center text-center items-center rounded-[2rem]  mt-[1rem]  sm:text-[16px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[29px] ll:text-[35px] k:text-[45px] sm:mt-[1rem] k:my-[2rem] m-[1rem] ">
                  <Image
                    src={item.blog_image}
                    alt="blog Image"
                    width={300}
                    height={300}
                    className="sm:w-[200px] sm:h-[200px] t:w-[300px] t:h-[300px]  m-2 p-2 rounded-[2rem]"
                  />

                  <div spellCheck="true" className="bg-[---c1] w-full sm:h-auto font-bold font-[bold] sm:rounded-b-[2rem] text-white  p-[1rem]">
                    {item.blog_title}
                  </div>
                </div>
              </Link>
            </div></Slide>
          );
        })}
        { allBlogs.length == 0 ? <div spellCheck="true" className=" text-center text-wrap rounded-[2rem] p-2">
             There Is No Blog There Please Add At Least One 😥 
            </div>:null

        }
      </div>
      </Fade></>
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
  const collection = database.collection("blogs");
  const allBolgs = await collection.find({}).toArray();

  return { props: { allBlogs: JSON.parse(JSON.stringify(allBolgs)) } };
}
export default Blogs;
