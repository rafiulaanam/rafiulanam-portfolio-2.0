
"use client"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useGetBlogByIdQuery } from "@/redux/features/blog/blogApi"

export default function BlogDetails({ params }: { params: { id: string } }) {
  const {id} = params
  const {data: singleBlog, isLoading}:any = useGetBlogByIdQuery(id)

  return (
    <div className="flex flex-col min-h-[100dvh]">
  
      <main className="flex-1">
        <article className="prose prose-gray mx-auto my-12 px-4 md:px-6 dark:prose-invert">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {singleBlog?.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg" width={32} height={32} alt="Author Avatar" className="rounded-full" />
                <span className="text-sm font-medium">John Doe</span>
              </div>
              <Separator orientation="vertical" />
              <time dateTime="2023-06-20" className="text-sm">
                June 20, 2023
              </time>
            </div>
          </div>
          <p>
          {singleBlog?.description}
          </p>
          <img
            src={singleBlog?.coverImage}
            width={800}
            height={450}
            alt="Serverless Architecture"
            className="rounded-lg object-cover"
          />
          <h2>Progressive Web Apps (PWAs)</h2>
          <p>
            Another exciting development in web development is the growth of Progressive Web Apps (PWAs). PWAs are web
            applications that leverage modern browser capabilities to provide an app-like experience to users, even on
            mobile devices. PWAs can offer features such as offline functionality, push notifications, and home screen
            installation, blurring the line between web and native applications.
          </p>
          <img
            src="/placeholder.svg"
            width={800}
            height={450}
            alt="Progressive Web App"
            className="rounded-lg object-cover"
          />
          <h2>WebAssembly</h2>
          <p>
            WebAssembly, or Wasm, is a low-level, binary instruction format that runs alongside JavaScript in modern web
            browsers. Wasm provides a way to run high-performance, compiled code on the web, enabling developers to
            create applications that can rival the speed and efficiency of native applications. This technology opens up
            new possibilities for web-based games, scientific computing, and other performance-critical applications.
          </p>
          <img src="/placeholder.svg" width={800} height={450} alt="WebAssembly" className="rounded-lg object-cover" />
          <h2>Conclusion</h2>
          <p>
            The future of web development is filled with exciting advancements, from serverless architecture and
            Progressive Web Apps to the power of WebAssembly. As these technologies continue to evolve and become more
            widely adopted, we can expect to see even more innovative and engaging web experiences. Developers who stay
            up-to-date with these trends and embrace the latest technologies will be well-positioned to create the web
            applications of tomorrow.
          </p>
        </article>
        <section className="bg-muted px-4 py-8 md:px-6 md:py-12">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Related Posts</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    The Rise of Serverless Architecture
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Explore the benefits and implications of serverless computing for web development.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    The Future of Progressive Web Apps
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Discover how PWAs are revolutionizing the web experience.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    WebAssembly: The Future of High-Performance Web Apps
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn how WebAssembly is transforming the capabilities of web applications.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Blog. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

