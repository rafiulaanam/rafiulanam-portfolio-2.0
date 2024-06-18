
export default function EducationHome() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Education</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Learn about my academic background and qualifications.
          </p>
        </div>
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              <div className="space-y-2">
                <img
                  src="/placeholder.svg"
                  alt="Bachelor of Science"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <h3 className="text-xl font-bold">Bachelor of Science</h3>
                <p className="text-gray-500 dark:text-gray-400">Computer Science</p>
                <p className="text-gray-500 dark:text-gray-400">University of California, Berkeley</p>
                <p className="text-gray-500 dark:text-gray-400">2016 - 2020</p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              <div className="space-y-2">
                <img
                  src="/placeholder.svg"
                  alt="Master of Science"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <h3 className="text-xl font-bold">Master of Science</h3>
                <p className="text-gray-500 dark:text-gray-400">Computer Engineering</p>
                <p className="text-gray-500 dark:text-gray-400">Massachusetts Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-400">2020 - 2022</p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              <div className="space-y-2">
                <img
                  src="/placeholder.svg"
                  alt="PhD in Computer Science"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <h3 className="text-xl font-bold">PhD in Computer Science</h3>
                <p className="text-gray-500 dark:text-gray-400">Stanford University</p>
                <p className="text-gray-500 dark:text-gray-400">2022 - Present</p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    )
  }