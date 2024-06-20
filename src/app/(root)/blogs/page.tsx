"use client";
import Loading from "@/components/Loading";
import TBlog from "@/interface/blog";
import { useGetBlogItemsQuery } from "@/redux/features/blog/blogApi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Blogs() {
   const { data: getBlogsFromDB, isLoading } = useGetBlogItemsQuery(undefined);
   const [query, setQuery] = useState('');
 const search =(data:any)=>{
   return data?.filter((item:TBlog)=>item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
 }
 const blog = search(getBlogsFromDB)
  return (
    <section className=" pb-10 lg:py-15 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Blogs
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Recent News
              </h2>
              <p className="text-base text-body-color">
                There are many variations of Technology of Blogs available but
                the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
     { isLoading ? <Loading loadingText="Loading"/>
        :
         blog?.map((item:TBlog)=><div key={item._id} className="flex flex-wrap -mx-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src={item?.coverImage}
                alt=""
                width={500}
                height={300}
              />
            </a>
            <div className="p-5">
              <a href="/blogs/1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {item?.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {item.description.substring(0,300)+"..."}
              </p>
              <Link
               href={`/blogs/${item._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>)
        }
     </div>
       
      </div>
    </section>
  );
}
