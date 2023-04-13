import {FiGithub} from "react-icons/fi";
import Image from "next/image";
import devboard from "@/public/devboard.svg";

export default function FeaturedProjectLeft() {
    return (
        <>
            <div className="h-[calc(100%-200px)] hidden md:flex">
                <div className='w-full space-y-7 text-1xl text-third-light-purple'>
                    <div className="w-full min-h-[450px] relative md:static flex items-center justify-end ">
                        <div className="w-full flex justify-start items-center px-2">
                            <div className="z-0 w-full md:w-fit relative md:absolute">
                                <div className="w-full min-h-full sm:max-h-full rounded bg-featured-project-hover z-10 absolute md:absolute sm:opacity-90 md:opacity-80 hover:opacity-0 duration-500 p-5 sm:py-20 sm:px-6">
                                    <div className="w-full flex flex-col justify-start items-start gap-5 md:hidden">
                                        <div className="mb-5">
                                            <p className="font-extralight mono text-elem-purple text-[13px]">Featured Project</p>
                                            <p className="font-bold featuredProjectTitle text-secondary-light-purple">DevBoard</p>
                                        </div>
                                        <p className="">A Dashboard-type application where users have access to several tools/resources related to development.</p>
                                        <ul className="flex flex-wrap gap-3 font-extralight mono text-[13px] mb-5">
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Redux</li>
                                            <li>Express</li>
                                            <li>Postgres</li>
                                        </ul>
                                        <FiGithub size={25} className="text-third-light-purple hover:text-elem-purple duration-200" />
                                    </div>
                                </div>
                                <Image src={devboard} alt="devboard" className="rounded w-full h-full opacity-0 sm:opacity-100 duration-500" />
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-col justify-center items-end">
                                <p className="font-extralight mono text-elem-purple text-[13px]">Featured Project</p>
                                <p className="font-bold featuredProjectTitle text-secondary-light-purple">DevBoard</p>
                                <div className="p-7 w-[450px] bg-bg-light-purple text-end rounded shadow mb-5">
                                    <p>A Dashboard-type application where users have access to several tools/resources related to development.</p>
                                </div>
                                <ul className="flex gap-3 font-extralight mono text-[13px] mb-5">
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Express</li>
                                    <li>Postgres</li>
                                </ul>
                                <FiGithub size={25} className="text-third-light-purple hover:text-elem-purple duration-200" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="h-[calc(100%-200px)] flex md:hidden">
                <div className='w-full space-y-7 text-1xl text-third-light-purple'>
                    <div className="w-full min-h-[450px] relative md:static flex items-center justify-end">
                        <div className="w-full flex justify-start items-center">
                            <div className="w-full h-[450px] md:static flex items-center justify-end">
                                <div className="w-fit h-full rounded bg-featured-project-hover z-10 absolute md:absolute opacity-90 hover:opacity-0 duration-500 p-10 sm:py-20 sm:px-6">
                                    <div className="w-full flex flex-col justify-start items-start gap-5 md:hidden">
                                        <div className="mb-5">
                                            <p className="font-extralight mono text-elem-purple text-[13px]">Featured Project</p>
                                            <p className="font-bold featuredProjectTitle text-secondary-light-purple">DevBoard</p>
                                        </div>
                                        <p className="">A Dashboard-type application where users have access to several tools/resources related to development.</p>
                                        <ul className="flex flex-wrap gap-3 font-extralight mono text-[13px] mb-5">
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Redux</li>
                                            <li>Express</li>
                                            <li>Postgres</li>
                                        </ul>
                                        <FiGithub size={25} className="text-third-light-purple hover:text-elem-purple duration-200" />
                                    </div>
                                </div>
                                <Image src={devboard} alt="devboard" className="rounded w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}