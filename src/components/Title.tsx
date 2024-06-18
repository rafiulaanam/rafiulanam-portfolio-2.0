"use client"

import React from "react";

const Title = ({ title, myTitle }:{title:string, myTitle:string}) => {
  return (
    <h1
      className="relative
         lg:text-9xl md:text-9xl text-7xl text-center font-bold text-[rgba(0,0,0,0.41)]  dark:text-[rgba(238,238,238,0.08)] uppercase"
    >
      {title}
      <span className="absolute text-4xl top-2 right-0 left-0 text-black dark:text-white">
        {myTitle}
        <div className="mt-10 mx-auto w-36">
          <span>
            <span></span>
            <span></span>
          </span>
        </div>
      </span>
    </h1>
  );
};

export default Title;
