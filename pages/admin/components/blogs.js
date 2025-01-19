import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
    <>
      <div className="grid justify-items-center my-[2rem]">
        <Link href={`http://localhost:3000/admin/components/addBlog`}>
          <button
            className={`${addBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
          >
            Add Blog
          </button>
        </Link>
        <Link href={`http://localhost:3000/admin/components/updateBlog`}>
          <button
            className={`${updateBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Update Blog
          </button>
        </Link>
        <Link href={`http://localhost:3000/admin/components/deleteBlog`}>
          <button
            className={`${deleteBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            Delete Blog
          </button>
        </Link>{" "}
        <Link href={`http://localhost:3000/admin/components/ViewAllBlog`}>
          <button
            className={`${viewallBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
          >
            View All Blog
          </button>
        </Link>
      </div>
    </>
  );
};
export default BlogAdmin;
