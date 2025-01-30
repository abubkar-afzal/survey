import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";

const AddBlog = ({ allData }) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  let addBlog;
  let updateBlog;
  let deleteBlog;
  let viewallBlog;

  if (currentUrl === "/admin/components/addBlog") {
    addBlog = "sm:text-[---c4]  sm:bg-[---c3]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c9]";
    updateBlog = "sm:text-[---c4] sm:bg-[---c9]";
    viewallBlog = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/admin/components/updateBlog") {
    updateBlog = "sm:text-[---c4] sm:bg-[---c3]";
    addBlog = "sm:text-[---c4]  sm:bg-[---c9]";
    viewallBlog = "sm:text-[---c4] sm:bg-[---c9]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/admin/components/deleteBlog") {
    updateBlog = "sm:text-[---c4] sm:bg-[---c9]";
    addBlog = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c3]";
    viewallBlog = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/admin/components/ViewAllBlog") {
    updateBlog = "sm:text-[---c4] sm:bg-[---c9]";
    addBlog = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c9]";
    viewallBlog = "sm:text-[---c4] sm:bg-[---c3]";
  } else {
    updateBlog = "sm:text-[---c4] sm:bg-[---c9]";
    addBlog = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c9]";
    viewallBlog = "sm:text-[---c4] sm:bg-[---c9]";
  }

  return (
    <>
      <div spellcheck="true" className="grid justify-items-center my-[2rem]">
        <Link href={`http://localhost:3000/admin/components/addBlog`}>
          <button spellcheck="true"
            className={`${addBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
          >
            Add Blog
          </button>
        </Link>

        <Link href={`http://localhost:3000/admin/components/updateBlog`}>
          <button spellcheck="true"
            className={`${updateBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Update Blog
          </button>
        </Link>

        <Link href={`http://localhost:3000/admin/components/deleteBlog`}>
          <button spellcheck="true"
            className={`${deleteBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Delete Blog
          </button>
        </Link>
        <Link href={`http://localhost:3000/admin/components/ViewAllBlog`}>
          <button spellcheck="true"
            className={`${viewallBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Blog
          </button>
        </Link>
        {allData.map((item) => {
          let img = item.blog_image;
          return (
            <div spellcheck="true"
              key={item._id}
              className="my-[2rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4]  space-y-[30px] mm:space-y-[35px] lm:space-y-[40px] t:space-y-[42px] l:space-y-[47px] ll:space-y-[52px] k:space-y-[60px] mx-4 pt-[2rem]"
            >
              <div spellcheck="true" className="sm:flex sm:flex-col">
                <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  ID Of Blog :
                </p>
                <p spellcheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  {item.blog_id}
                </p>
              </div>

              <div spellcheck="true" className="sm:flex sm:flex-col">
                <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  Title Of Blog :
                </p>
                <p spellcheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  {item.blog_title}
                </p>
              </div><div spellcheck="true" className="sm:flex sm:flex-col">
                <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  Title Of Slug :
                </p>
                <p spellcheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  {item.blog_slug}
                </p>
              </div>
              <div spellcheck="true" className="sm:flex sm:flex-col items-center">
                <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                 Image Of Blog :
                </p>
                <Image src={img} width={200} height={200} className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold" />
                  
                
              </div><div spellcheck="true" className="sm:flex sm:flex-col">
                <p spellcheck="true" className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent ">
                  Content Of Blog :
                </p>
                <p spellcheck="true" className="text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
                  {item.blog_content}
                </p>
              </div>
            </div>
          );
        })}
        {allData.length == 0 ?
          <div spellcheck="true" className="mt-[2rem] text-[17px] sm:text-[18px] mm:text-[22px] lm:text-[25px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px] font-semibold">
            Please Add Blog 🙃
          </div>:null
        }
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
  const collection = database.collection("blogs");
  const allData = await collection.find({}).toArray();

  return { props: { allData: JSON.parse(JSON.stringify(allData)) } };
}
export default AddBlog;
