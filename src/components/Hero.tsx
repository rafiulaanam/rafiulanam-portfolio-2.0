import { anamHome } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section >
    <div className="flex items-center justify-center">
    <div className="md:w-[50%]">
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
       <span className="text-primary-500">I&apos;m</span> Rafiul Anam
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      As a full-stack web developer, I assist emerging businesses in achieving their digital aspirations. I specialize in developing modern web applications.
      </p>
      <div className="flex gap-4 mt-10">
      <Link href="/contact">
      <Button>
        Get in Touch
      </Button>
      </Link>
      <Link href="https://drive.google.com/file/d/16h2H6GstJZQKoIB-qlpos3574Qszj1rd/view?usp=sharing">
      <Button>
        Download Resume
      </Button>
      </Link>
    </div>
      </div>
      <div className="  sm:w-[300px] sm:h-[350px] lg:w-[400px] lg:h-[450px] rounded-b-[20%]  ">
        <Image
          src={anamHome}
          alt="rafiulaanam"
          quality={100}
          className="w-full h-full object-cover rounded-b-[20%]"
        />
      </div>
    </div>
    
    </section>
  );
}
