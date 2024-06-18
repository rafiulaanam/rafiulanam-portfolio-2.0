import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TechStackList } from "@/utils/techStackList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "TechStack | Anam - Full Stack Developer",
  };
export default function TechStack() {
  return (
    <main className="container">
    <div className="flex flex-col gap-2  my-12">
      <h1  className="!text-3xl sm:text-4xl">
        Tech Stack
      </h1>
      <h1>
        The dev tools and tech stack I use{" "}
      </h1>
    </div>
    <span className="w-full block border border-primary-300  right-0"></span>

    <div className=" flex flex-col gap-4 mt-20 my-4">
      <h1>
        Tools & Technology
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 ">
        {TechStackList.sort((a, b) => b.id - a.id).map((data, index) => (
          <Card key={data.id}  className="flex flex-col items-center justify-center">
            <Link href={data.link}>
          <CardHeader className="pb-2 cursor-pointer">

            {data.icon}
           
           
          </CardHeader>
          </Link>
          <CardContent>
          
            <CardTitle className="text-xl font-bold">{data.title}</CardTitle>
        
 
          </CardContent>
           <div className="w-[80%] bg-gray-200 mb-4 -mt-4 rounded-full dark:bg-gray-700">
    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${data.progress}`}}> {data.progress}</div>
  </div>

          <CardFooter>
          <Badge variant="secondary" className="capitalize text-md">{data.subtitle}</Badge>
          </CardFooter>
        </Card>
        //   <Card
        //     key={data.id}
        //     title={data.title}
        //     description={data.subtitle}
        //     actionLink={data.link}
        //     techStackIcon={data.icon}
        //     variant="techCard"
        //   />
        ))}
      </div>
    </div>
  </main>
  )
}
