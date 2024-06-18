import { CodepenIcon, DatabaseIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function TechstackHome() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32  ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">My Tech Stack</h2>
              
            </div>
            
            <Button variant="secondary">Have a look my all skills</Button>
            
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-950">
                  <CodepenIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-950">
                  <CodepenIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-950">
                  <CodepenIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-950">
                  <DatabaseIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-950">
                  <DatabaseIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
