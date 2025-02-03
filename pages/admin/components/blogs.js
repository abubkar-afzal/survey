import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const BlogAdmin = () => {
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
  } else if (currentUrl === "/admin/components/updateBlog") {
    updateBlog = "sm:text-[---c4] sm:bg-[---c3]";
    addBlog = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c9]";
  } else if (currentUrl === "/admin/components/deleteBlog") {
    updateBlog = "sm:text-[---c4] sm:bg-[---c9]";
    addBlog = "sm:text-[---c4]  sm:bg-[---c9]";
    deleteBlog = "sm:text-[---c4] sm:bg-[---c3]";
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
    <><Fade cascade>
      <div spellCheck="true" className=" mt-[1rem] grid justify-items-center my-[2rem]">
         <Slide direction="left"> <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/addBlog`}>
          <button spellCheck="true"
            className={`${addBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
          >
            Add Blog
          </button>
        </Link></Slide>
         <Slide direction="right"> <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/updateBlog`}>
          <button spellCheck="true"
            className={`${updateBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Update Blog
          </button>
        </Link></Slide>
         <Slide direction="left"> <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/deleteBlog`}>
          <button spellCheck="true"
            className={`${deleteBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Delete Blog
          </button>
        </Link> </Slide>
        <Slide direction="right">  <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/ViewAllBlog`}>
          <button spellCheck="true"
            className={`${viewallBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Blog
          </button>
        </Link></Slide>
      </div></Fade>
    </>
  );
};
export default BlogAdmin;
