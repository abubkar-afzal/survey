import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import { DotLoader } from "react-spinners";

const AddBlog = () => {
  const [loader, setLoader] = useState(false);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Content, setContent] = useState("");
  const [slug, setSlug] = useState("");
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
    deleteBlog = "sm:text-[---c4] sm:bg-[---c9]";
    viewallBlog = "sm:text-[---c4] sm:bg-[---c9]";
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
  const onAdd = async (e) => {
    setLoader(true);
    const scrollOptions = {
      left: 0,
      top: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
    e.preventDefault();

    let Blog = {
      blog_id: id,
      blog_title: title,
      blog_image: Image,
      blog_content: Content,
      blog_slug: slug,
    };
    let r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(Blog),
    });
    let unique = await r.json();
    if (
      (Image.substring(0, 5) == "https" &&
        title.length >= 4 &&
        slug.length >= 4 &&
        Content.length >= 4) ||
      (Image.substring(0, 5) == "http:" &&
        title.length >= 4 &&
        slug.length >= 4 &&
        Content.length >= 4)
    ) {
      if (unique.success == false) {
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addBlog`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(Blog),
        });
        let response = await res.json();
        toast("Blog Added Successfully 😀", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#5fff59",
          },
        });

        setId("");
        setTitle("");
        setImage("");
        setContent("");
        setSlug("");
        Notification.requestPermission().then((result) => {
      
          if (result === "granted") {
            const notifaiction = new Notification("New Blog Is Added 🥰💖", {
                body: "There is a new blog added in survey",
                icon: "/survey-logo.png",
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: "vibration-sample",
              });
             
              notifaiction.onclick = function(event) {
                event.preventDefault(); 
                window.open(`${process.env.NEXT_PUBLIC_HOST}/`, "_blank"); 
              };
      }
    }
 )
      } else {
        toast("Id must be unique 🥱", {
          style: {
            padding: "16px",
            color: "#ffffff",
            background: "#ff5959",
          },
        });
      }
    } else {
      toast("Please enter correct things 🤨", {
        style: {
          padding: "16px",
          color: "#ffffff",
          background: "#ff5959",
        },
      });
    }
    setLoader(false);
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <Fade cascade>
        {loader ? (
          <Fade>
            <div className=" mx-auto mt-[40vh] mb-[40vh] justify-items-center">
              <DotLoader
                color="rgba(0,168,89,255)"
                cssOverride={{}}
                loading
                size={60}
                speedMultiplier={1}
              />
              <br />
              <br />
              <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
                Adding Blog Please Wait !!
              </p>
            </div>
          </Fade>
        ) : (
          <div
            spellCheck="true"
            className=" mt-[1rem] grid justify-items-center my-[2rem]"
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/addBlog`}
            >
              <button
                className={`${addBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px] `}
              >
                Add Blog
              </button>
            </Link>
            <div
              spellCheck="true"
              className="my-[2rem] t:w-[30rem] l:w-[35rem] t:mx-auto text-center shadow-sm shadow-black rounded-[2rem] p-2 t:p-6 bg-[---c8] sm:text-[---c4]  space-y-[30px] mm:space-y-[35px] lm:space-y-[40px] t:space-y-[42px] l:space-y-[47px] ll:space-y-[52px] k:space-y-[60px] mx-4 pt-[2rem]"
            >
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p
                  spellCheck="true"
                  className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "
                >
                  ID Of Blog :
                </p>
                <input
                  spellCheck="true"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  type="number"
                  htnlFor="id"
                  className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
             focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
                  placeholder="Please Enter Your Blog Id ..."
                  name="id"
                  id="id"
                />
              </div>
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p
                  spellCheck="true"
                  className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "
                >
                  Title Of Blog :
                </p>
                <input
                  spellCheck="true"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  htnlFor="title"
                  className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black  "
                  placeholder="Please Enter Your Blog Title ..."
                  name="title"
                  id="title"
                />
              </div>
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p
                  spellCheck="true"
                  className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "
                >
                  Slug Of Blog :
                </p>
                <input
                  spellCheck="true"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                  type="text"
                  htnlFor="title"
                  className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black  "
                  placeholder="Please Enter Your Blog Slug ..."
                  name="slug"
                  id="slug"
                />
              </div>
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p
                  spellCheck="true"
                  className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "
                >
                  Image Of Blog :
                </p>
                <input
                  spellCheck="true"
                  value={Image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  type="text"
                  htnlFor="div"
                  className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-[85%] m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black  file:mr-4 file:py-2 file:px-4
      "
                  placeholder="Please Give Your Blog Image URL ..."
                  name="div"
                  id="div"
                />
              </div>
              <div spellCheck="true" className="sm:flex sm:flex-col">
                <p
                  spellCheck="true"
                  className=" my-[1rem] sm:text-[15px] mm:text-[18px] lm:text-[22px] t:text-[25px] l:text-[32px] ll:text-[37px] k:text-[45px] text-white font-bold  mt-[-16px] bg-transparent "
                >
                  Content Of Blog :
                </p>
                <textarea
                  spellCheck="true"
                  value={Content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  type="text"
                  htnlFor="div"
                  className="sm:rounded-[2rem] text-white h-auto  sm:px-3 w-auto m-2 sm:text-[15px] mm:text-[16px] lm:text-[19px] t:text-[21px] l:text-[24px] ll:text-[27px] k:text-[30px]  mt-1 block px-3 py-2 bg-[---t1] border border-slate-300 rounded-md text-sm shadow-sm placeholder-white
      focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:bg-[---c4] focus:text-black focus:placeholder-black "
                  placeholder="Please Enter Your Blog Content ..."
                  name="div"
                  id="div"
                />
              </div>
              <button
                onClick={onAdd}
                className="bg-[---b8] hover:bg-[---h8] p-2 m-2 w-[8rem] rounded-[2rem] font-bold shadow-lg sm:text-[16px] mm:text-[22px] lm:text-[26px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]"
                type="submit"
              >
                Add
              </button>
            </div>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/updateBlog`}
            >
              <button
                className={`${updateBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
              >
                Update Blog
              </button>
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/deleteBlog`}
            >
              <button
                className={`${deleteBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
              >
                Delete Blog
              </button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/admin/components/ViewAllBlog`}
            >
              <button
                className={`${viewallBlog}  p-2 px-4 m-2 w-auto rounded-[2rem] font-bold shadow-lg text-[---c4] sm:text-[16px] mm:text-[20px] lm:text-[23px] t:text-[26px] l:text-[29px] ll:text-[35px] k:text-[55px]`}
              >
                View All Blog
              </button>
            </Link>
          </div>
        )}
      </Fade>
    </>
  );
};

export default AddBlog;
