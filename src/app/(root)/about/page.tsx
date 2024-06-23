import { anamAbout } from "@/assets";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Anam - Full Stack Developer",
};
export default function page() {
  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <h1  className="!text-3xl sm:text-4xl">
          A litle bit about me
        </h1>
        <h1 >
          Who am i and what i do
        </h1>
      </div>
      <span className="w-full block border border-primary-300 right-0"></span>

      <section className="flex flex-col sm:flex-row gap-4  mt-20 my-4">
        {/* image on top in mobile view */}
        <div className="block sm:hidden w-48 h-fit bg-primary-800 rounded-3xl">
          <Image
            src={anamAbout}
            alt="rafiulaanam"
            width={300}
            height={200}
            quality={100}
            className="w-full h-full object-cover rounded-3xl"
            style={{ filter: "drop-shadow(2px 2px 5px gray)" }}
          />
        </div>
        <div className="flex flex-col gap-6 sm:w-3/4">
          <div className="flex flex-col gap-2">
            <h1  className="uppercase">
              Who i am
            </h1>
            <h1 >
              I am Rafiul Anam, a self-taught Full Stack developer from Sylhet,
              Bangladesh.
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1  className="uppercase">
              What i do
            </h1>
            <h1  >
              I have one year of experience in creating user-friendly web
              applications. I am currently working as a front-end developer at
              SAHUKAR CONSULTANCY, a tech company. I have honed my skills in
              React.js, TailwindCSS, and TypeScript, which enable me to craft
              seamless and interactive user experiences. During my time at
              SAHUKAR CONSULTANCY, I worked on building an e-commerce website
              with Astro.js and open-source commerce modules Medusa.js. I am
              enthusiastic about delivering seamless and interactive user
              experiences.
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1  className="uppercase">
              What i did
            </h1>
            <h1  >
              I hold a BSc(H) degree in chemistry, but I also have a strong
              passion for web technology. My interest began when I was in
              college, where I used to create blogging websites using
              Google&apos;s Blogspot platform and customize the blog themes and
              templates with the help of HTML and CSS. Now, as a front-end
              developer, I am exploring web technology with various tools and
              frameworks.
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1  className="uppercase">
              My Learing resources
            </h1>
            <h1  >
              I have acquired web technology skills from various online
              resources, such as YouTube videos, freecodecamp, W3Schools, and
              official documentation etc.
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1  className="uppercase">
              Certificates
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="w-full h-fit">
                <Image
                  src="https://i.imgur.com/cAXmewy.jpeg"
                  alt="programming-hero"
                  width={300}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover rounded-md"
                />
                <Link href="https://i.imgur.com/cAXmewy.jpeg" target="_blank">
                  <Button variant="link">View details</Button>
                </Link>
              </div>
              <div className="w-full h-fit">
                <Image
                  src="https://i.imgur.com/nyO8mv3.jpeg"
                  alt="programming-hero"
                  width={300}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover rounded-md"
                />
                <Link href="https://i.imgur.com/nyO8mv3.jpeg" target="_blank">
                  <Button variant="link">View details</Button>
                </Link>
              </div>
              <div className="w-full h-fit">
                <Image
                  src="https://i.imgur.com/7wgLkqp.jpeg"
                  alt="programming-hero"
                  width={300}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover rounded-md"
                />
                <Link href="https://i.imgur.com/7wgLkqp.jpeg" target="_blank">
                  <Button variant="link">View details</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {/* image on right side */}
          <div className="hidden sm:block w-72 h-fit bg-primary-800 rounded-3xl">
            <Image
              src={anamAbout}
              alt="rafiulaanam"
              width={300}
              height={200}
              quality={100}
              className="w-full h-full object-cover rounded-3xl "
              style={{ filter: "drop-shadow(2px 2px 5px gray)" }}
            />
          </div>
          <Link href={"/contact"}>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
