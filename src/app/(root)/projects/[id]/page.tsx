"use client"
import Loading from "@/components/Loading"
import { Button } from "@/components/ui/button"
import { useGetProByIdQuery } from "@/redux/features/project/projectApi"
import Link from "next/link"

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const {id} = params
  const {data: singleProject, isLoading}:any = useGetProByIdQuery(id)

if(isLoading){return <Loading loadingText="Loading"/>}
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <img
              src={singleProject?.coverImage}
              width={700}
              height={500}
              alt="Project Featured Image"
              className="mx-auto rounded-xl object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
               {singleProject?.title}
              </h1>
              <p className="text-muted-foreground md:text-xl">
               {singleProject?.overview}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href={singleProject?.liveLink}
              target="_blank"
              >
               <Button>View Demo</Button> 
              </Link>
              <Link
                href={singleProject?.githubLink}
                target="_blank"
                prefetch={false}
              >
               <Button variant="outline">View Code</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">Project Details</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-lg font-semibold">Technologies Used</h3>
                <p className="text-muted-foreground"><ul >{singleProject?.techUsed?.map((item:any)=><li key={item._id}>{item?.label}</li>)}</ul></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Project Goals</h3>
                <p className="text-muted-foreground">
                  Streamline business operations, improve customer experience, and increase efficiency through a modern
                  web application.
                </p>
                <p>{singleProject?.description}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">Project Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
             
              <img
                src={singleProject?.coverImage}
                width={300}
                height={200}
                alt="Project Screenshot 1"
                className="rounded-xl object-cover"
              />
              <img
                src={singleProject?.coverImage}
                width={300}
                height={200}
                alt="Project Screenshot 2"
                className="rounded-xl object-cover"
              />
              <img
                src={singleProject?.coverImage}
                width={300}
                height={200}
                alt="Project Screenshot 3"
                className="rounded-xl object-cover"
              />
              <img
                src={singleProject?.coverImage}
                width={300}
                height={200}
                alt="Project Screenshot 4"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}