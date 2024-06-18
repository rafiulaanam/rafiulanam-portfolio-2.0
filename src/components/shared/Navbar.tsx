import {  Menu, Package2 } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { navLinks } from "../../utils/navLinks";
export default function Navbar() {



  return (
    <>
      <header className="sticky z-20 backdrop-blur-md top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
          
            <h1
        
        title="Anam"
        className="!text-3xl !font-bold"
      >
        {"<Anam/>"}
      </h1>
            <span className="sr-only">Anam</span>
         
          </Link>
           {
            navLinks.map((item, index)=> <Link key={index}
            href={item.link}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.title}
          </Link>)
          }

          
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              {
            navLinks.map((item, index)=> <Link key={index}
            href={item.link}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.title}
          </Link>)
          }
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex sm:flex-initial">
          <div className="flex items-center border-r border-primary-700">
       <Link href={"https://linkedin.com/in/rafiulaanam"} target="_blank">
        <span
           
              title="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                className="w-6 h-6 mx-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.556 21.9979H2.44792C1.09813 21.9979 0.00390625 20.9037 0.00390625 19.5539V2.44584C0.00390625 1.09605 1.09813 0.00183105 2.44792 0.00183105H19.556C20.9058 0.00183105 22 1.09605 22 2.44584V19.5539C22 20.9037 20.9058 21.9979 19.556 21.9979ZM15.6797 18.9429H18.9438V12.2376C18.9438 9.40045 17.3355 8.02868 15.0891 8.02868C12.8417 8.02868 11.8959 9.7788 11.8959 9.7788V8.35224H8.75023V18.9429H11.8959V13.3835C11.8959 11.8938 12.5816 11.0074 13.8941 11.0074C15.1005 11.0074 15.6797 11.8592 15.6797 13.3835V18.9429ZM3.05773 5.01118C3.05773 6.0904 3.92598 6.96547 4.99746 6.96547C6.06894 6.96547 6.93668 6.0904 6.93668 5.01118C6.93668 3.93195 6.06894 3.05688 4.99746 3.05688C3.92598 3.05688 3.05773 3.93195 3.05773 5.01118ZM6.65329 18.9429H3.37317V8.35224H6.65329V18.9429Z"
                  fill="currentColor"
                />
              </svg>
            </span>
       </Link>
           
           <Link href={"https://github.com/rafiulaanam"} target="_blank">
           <span
           
        
              title="Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="currentColor"
                className="w-6 h-6 mx-2"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>{" "}
              </svg>
            </span>
           </Link>
            
          </div>
         
          </div>
       
         <ThemeToggle/>
        </div>
      </header>
    </>
  );
}
