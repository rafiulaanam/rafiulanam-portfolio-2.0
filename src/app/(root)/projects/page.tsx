"use client"
import { Button } from "@/components/ui/button";
import { TProject } from "@/interface/project";
import { useGetProItemsQuery } from "@/redux/features/project/projectApi";
import { getProjectSuccess } from "@/redux/features/project/projectSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Projects | Anam - Full Stack Developer",
// };
export default function Projects() {


  const { data: getProjectsFromDB, isLoading } = useGetProItemsQuery(undefined);
  const dispatch = useAppDispatch()
const { currentProject } = useAppSelector((state) => state.project);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      if (getProjectsFromDB) {
        dispatch(getProjectSuccess(getProjectsFromDB));
      } else {
        dispatch(getProjectSuccess(null));
      }
    } catch (error) {
      throw new Error("Projects not fetched");
    }
  };
  fetchProjects();
}, [getProjectsFromDB]);



  return (
  <div className="flex justify-center">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {
      currentProject?.map((item:TProject)=><div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={300} height={300} className="w-full" src={item?.coverImage} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item?.title}</div>
    <p className="text-gray-700 text-base">
      {item?.overview}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  <div className="flex justify-around mb-3" >
    <Link href={item?.liveLink}>
    
     <Button>Preview</Button>
    </Link>
    <Link href={item?.githubLink}>
    
  <Button>Github</Button>
    </Link>
    <Link href={`/projects/${item?._id}`}>
    
  <Button>Details</Button>
    </Link>
  </div>
 
</div>)
    }

   </div>
  </div>
  );
}
