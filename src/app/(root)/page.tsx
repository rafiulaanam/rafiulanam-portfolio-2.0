import ProjectHome from "@/components/ProjectHome";
// import Hero from "../../components/Hero";
import HeroCus from "@/components/HeroCus";
import AboutMe from "@/components/AboutMe/AboutMe";
import FAQ from "@/components/FAQ";
import EducationHome from "@/components/EducationHome";
import ExperienceHome from "@/components/ExperienceHome";
import TechstackHome from "@/components/TechstackHome";
import Link from "next/link";
import BlogsHome from "@/components/BlogsHome";

export default function Home() {
  return (
    <div className="mx-5 md:mx-20 ">
      {/* <Hero/> */}
      <HeroCus />
      <Link href="/techstack">
        <TechstackHome />
      </Link>
      <AboutMe />
      <ExperienceHome />
      <ProjectHome />
      <EducationHome />
      <BlogsHome/>
      <FAQ />
    </div>
  );
}
