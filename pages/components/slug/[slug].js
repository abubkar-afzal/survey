import React from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
const blogPage =({allBlogs})=>{
    const router = useRouter();
    const { slug } = router.query;
    const data = allBlogs;
    
    return(<> 
            <Fade cascade duration={3000}>
            <div spellCheck="true" className="min-h-screen content-center text-center flex-col p-4 space-y-[1rem] mt-[1rem]">
                <div spellCheck="true"><Image src={data.blog_image} width={500} height={500} className="sm:w-[300px] sm:h-[300px] t:w-[500px] t:h-[500px] rounded-[2rem] mx-auto"/></div>
                <div spellCheck="true" className="font-bold sm:text-[25px] text-center mm:text-[22px] lm:text-[26px] t:text-[32px] l:text-[40px] ll:text-[45px] k:text-[70px]">{data.blog_title}</div>
                <div spellCheck="true" className="mt-[8px] pb-2 sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"><p spellCheck="true">{data.blog_content}</p></div>
            </div>
            <hr className=""/>
            <hr className=""/></Fade>
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
  const collection = database.collection("blogs");
  const slugofblog =context.query.slug
  const allBlogs = await collection.findOne({blog_slug:slugofblog});
  
  return { props: { allBlogs: JSON.parse(JSON.stringify(allBlogs)) } };
}
export default blogPage;