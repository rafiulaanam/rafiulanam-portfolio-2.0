
export default function ExperienceHome() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">A summary of my professional background.</p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">DevWave Programmer</h3>
                    <p className="text-gray-500 dark:text-gray-400">Full-stack Developer - Freelancer</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2020 - Present</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Responsible for designing and developing scalable web applications using modern JavaScript frameworks
                  and technologies. Collaborated with cross-functional teams to deliver high-quality software solutions
                  that met business requirements.
                </p>
              </div>
              <div className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Webtricker</h3>
                    <p className="text-gray-500 dark:text-gray-400">Full-stack Developer - Internship</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2018 - 2020</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Developed and maintained responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with
                  designers and backend developers to ensure seamless integration and optimal user experience.
                </p>
              </div>
              <div className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">HILLBORN TECHNOLOGIES PRIVATE LIMITED</h3>
                    <p className="text-gray-500 dark:text-gray-400">Full-stack Developer - Internship</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2017 - 2018</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Gained hands-on experience in web development, participating in various projects and learning new
                  technologies. Contributed to the development of a company website and internal tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }