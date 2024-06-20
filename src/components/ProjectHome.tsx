"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Title from "./Title";
import { TProject } from "@/interface/project";
import { useGetProItemsQuery } from "@/redux/features/project/projectApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProjectSuccess } from "@/redux/features/project/projectSlice";
import { useEffect } from "react";
import Loading from "./Loading";

export default function ProjectHome() {
  // const dispatch = useAppDispatch();
  // const { currentProject } = useAppSelector((state) => state.project);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       if (getProjectsFromDB) {
  //         const projectsCopy = getProjectsFromDB.slice(0, 3);
  //         dispatch(getProjectSuccess(projectsCopy));
  //       } else {
  //         dispatch(getProjectSuccess(null));
  //       }
  //     } catch (error) {
  //       throw new Error("Projects not fetched");
  //     }
  //   };
  //   fetchProjects();
  // }, [getProjectsFromDB]);
  
  const { data: getProjectsFromDB, isLoading } = useGetProItemsQuery(undefined);
  const currentProject = getProjectsFromDB?.slice(0, 3);

  return (
    <div className="mt-20">
      <Title title="project" myTitle="project" />
      {isLoading ? <Loading loadingText="Loading" />
      :
        <>
          
          {currentProject?.map((item: TProject) => (
            <div
              key={item._id}
              className=" md:container md:w-[80%] mx-auto mt-16 text-white"
            >
              <Card className={`lg:flex `}>
                <div
                  style={{ backgroundImage: `url(${item.fullPageImage})` }}
                  className={`m-5 p-5 lg:w-[50%] border border-gray-800 rounded-2xl box h-72 md:h-96 bg-top bg-cover hover:bg-bottom`}
                ></div>

                <CardContent className=" pt-6 text-center lg:w-[50%]">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p>{item.overview}</p>
                  <div className="  mt-8">
                    {
                    
                    item.techUsed?.map((tech,i)=><Badge key={i} variant="secondary" className="mr-2 md:font-bold text-md"> {tech.label}
                    </Badge>
                    )
                  }

                   
                  </div>

                  <CardFooter className="card-actions justify-center mt-5">
                    <Link href={item.liveLink} target="_blank">
                      <Button>Preview</Button>
                    </Link>
                    <Link href={item.githubLink} target="_blank">
                      <span className="ml-5">
                        <Button>Github</Button>
                      </span>
                    </Link>
                  </CardFooter>
                </CardContent>
              </Card>
            </div>
          ))}
        </>
      }
      <div className="flex justify-center my-10 items-center">
        <Link href={"/projects"}>
          <Button>See More Projects</Button>
        </Link>
      </div>
    </div>
  );
}
