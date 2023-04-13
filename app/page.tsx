"use client";
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import Link from 'next/link';
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import FeaturedProjectList from "@/components/FeaturedProjectList";
import Contact from "@/components/Contact";
import Socials from "@/components/socials";

export default function Portfolio() {
  return (
      <>
      <Navigation />
    <main className="min-h-screen w-screen flex flex-col justify-center items-center bg-bg-purple px-[10px] lg:px-[100px] xl:px-[150px]">
        <div className=" h-screen mx-[10px] md:mx-[100px] lg:mx-[200px]">
            <Home />
        </div>
        <AboutMe />
        <Experience />
        <FeaturedProjectList />
        <Contact />
        <Socials />
    </main>
      </>
  )
}
