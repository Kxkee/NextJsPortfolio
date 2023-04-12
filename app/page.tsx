"use client";
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";

export default function Portfolio() {
  return (
      <>
      <Navigation />
    <main className="min-h-screen w-screen bg-bg-purple px-[10px] lg:px-[100px] xl:px-[150px]">
        <div className=" h-screen mx-[10px] md:mx-[100px] lg:mx-[200px]">
            <Home />
        </div>
            <AboutMe />
        <div className="fixed bottom-10 left-10 flex flex-col gap-5">
            <FiGithub size={25} className="text-third-light-purple
             hover:text-elem-purple
              duration-200
               cursor-pointer collapse md:visible" />
            <FiLinkedin size={25} className="text-third-light-purple
             hover:text-elem-purple
              duration-200
               cursor-pointer collapse md:visible" />
        </div>
    </main>
      </>
  )
}
