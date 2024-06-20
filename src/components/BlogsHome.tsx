"use client"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { useGetBlogItemsQuery } from "@/redux/features/blog/blogApi";
import TBlog from "@/interface/blog";

export default function BlogsHome() {
  const { data: getBlogsFromDB, isLoading } = useGetBlogItemsQuery(undefined);
  const currentBlog = getBlogsFromDB?.slice(0, 3);
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Featured Blog Posts</h2>
      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-6">
        {
          currentBlog?.map((item:TBlog)=>  <Card key={item._id} className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href={`/blogs/${item._id}`} className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View blog post</span>
          </Link>
          <img
            src={item.coverImage}
            alt="Blog post image"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <CardContent className="p-4 bg-background">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">
              {item.description.substring(0, 200) + '...'}
            </p>
          </CardContent>
        </Card>)
        }
      
        {/* <Card className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View blog post</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Blog post image"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <CardContent className="p-4 bg-background">
            <h3 className="text-xl font-bold">Optimizing Next.js for Performance</h3>
            <p className="text-sm text-muted-foreground">
              Learn how to optimize your Next.js applications for lightning-fast performance and improved user
              experience.
            </p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View blog post</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Blog post image"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <CardContent className="p-4 bg-background">
            <h3 className="text-xl font-bold">Exploring Serverless with AWS</h3>
            <p className="text-sm text-muted-foreground">
              Dive into the world of serverless computing and learn how to build scalable, cost-effective applications
              with AWS.
            </p>
          </CardContent>
        </Card> */}
      </section>
      <div className="flex justify-center my-10 items-center">
        <Link href={"/blogs"}>
          <Button>See More Blogs</Button>
        </Link>
      </div>
    </div>
  )
}