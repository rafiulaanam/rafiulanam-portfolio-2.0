

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks } from "../../utils/navLinks";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { footerGradient } from "@/assets";


const Footer = () => {
 


  const socialLinks = [
    {
      title: "Github",
      link: "https://github.com/rafiulaanam",
    },
    {
      title: "Linkedin",
      link: "https://linkedin.com/in/rafiulaanam",
    },
  ];



  return  <footer className="relative mt-8 pb-8 ">
      <span className="w-full block border border-primary-300 mb-10"></span>

      <div className="container">
        <div className="flex justify-between gap-2">
          <div className="hidden sm:block">
            {/* logo */}
            <Button
            
              title="rafiulaanam"
              className={`!text-3xl  !p-0 !font-bold`}
            >
              {"<Anam/>"}
            </Button>
          </div>
          {/* footer links */}
          <div className="flex justify-between flex-col sm:flex-row gap-4 sm:gap-20 mr-4">
            <div className="flex flex-col gap-4">
              <h1>Link</h1>
              <ul className="grid grid-cols-2 gap-2">
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <Link
                      href={navLink.link}
                      title={navLink.title}
                      className="text-primary-600 dark:text-primary-500 font-medium hover:text-primary-900 dark:hover:text-primary-300"
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1>Social</h1>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <Link
                      href={socialLink.link}
                      title={socialLink.title}
                      className="text-primary-600 dark:text-primary-500 font-medium hover:text-primary-900 dark:hover:text-primary-300"
                    >
                      {socialLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start sm:hidden my-8">
         <ThemeToggle/>
          {/* logo */}
          <Button
            
            title="rafiulaanam"
            className={`!text-3xl  !p-0 !font-bold`}
          >
            {"<Anam/>"}
          </Button>
        </div>
        <h1
          
          className="mb-16 sm:mb-0"
        >
          © 2024 Rafiul Anam. All Rights Reserved.
        </h1>
      </div>

      {/* background gradient */}
      <div className="w-full h-[500px] absolute bottom-0 right-0 -z-10 ">
        <Image
          src={footerGradient}
          alt="gradient"
          quality={100}
          fill
          sizes="100vw"
          priority
          className="w-full object-cover blur-2xl"
        />
      </div>
      <h1
    
        className="text-center"
      >
      
        Website Develop by{" "}
        <a
          href="https://linkedin.com/in/rafiulaanam"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
        Rafiul Anam
        </a>
      </h1>
    </footer>
  
};

export default Footer;
