
import ProjectHome from "@/components/ProjectHome";
// import Hero from "../../components/Hero";
import HeroCus from "@/components/HeroCus";
import AboutMe from "@/components/AboutMe/AboutMe";


export default function Home() {
  return (
  
     <div className="mx-5 md:mx-20 " >
     {/* <Hero/> */}
     <HeroCus/>
     <AboutMe/>
    <ProjectHome/>
  
     
     </div>
  );
}
