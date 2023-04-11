"use client";
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";

export default function Portfolio() {
  return (
    <main className="min-h-screen w-screen bg-bg-purple flex justify-center px-[10px] lg:px-[100px] xl:px-[150px]">
        <Navigation />
        <div className="w-full h-screen mx-[10px] md:mx-[40px] lg:mx-[100px]">
            <Home />
        </div>
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
  )
}
