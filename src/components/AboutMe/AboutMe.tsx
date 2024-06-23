"use client"
import React from "react";
import "./AboutMe.css"
import Image from "next/image";
import Title from "../Title";
import { anamHomeAbout } from "@/assets";

const AboutMe = () => {
  return (
    <div id="About">
      <Title title="about" myTitle="about me" />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded  ring ring-primary ring-offset-base-100 ring-offset-2"
              src={anamHomeAbout} width={500} height={500}
            />
          
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-white text-3xl title-font font-bold mb-1">
                Hi, I am <span className="text-[#72E2AE]">Rafiul Anam</span>
              </h1>

              <ul className="styledlist text-[#BFBECB] text-xl dot">
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    First Name{" "}
                  </strong>
                  : Rafiul
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Last Name{" "}
                  </strong>
                  : Anam
                </li>
                {/* <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Age{" "}
                  </strong>
                  : 22 years
                </li> */}
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Nationality{" "}
                  </strong>
                  : Bangladeshi
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Languages{" "}
                  </strong>
                  : English, Bengali, Hindi
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Address{" "}
                  </strong>
                  : Sylhet, Bangladesh
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Freelance{" "}
                  </strong>
                  : Available
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Work{" "}
                  </strong>
                  : Open
                </li>
              </ul>

              <div className="mt-8">
                {" "}
                <a href="RAFIUL_ANAM_Resume.pdf" download={true}>
                  {" "}
                  {/* <Button text="Download resume" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
