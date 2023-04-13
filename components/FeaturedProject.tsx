import Image from "next/image";
import devboard from '@/public/devboard.svg';
import {FiGithub} from 'react-icons/fi';

export default function FeaturedProject() {
    return (
        <section className="min-h-[700px] w-full md:w-[800px] flex justify-center x-[10px] md:mx-[100px] lg:mx-[200px]">
            <div className="w-full">
                <div className="h-[200px] flex items-center">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        <span className="mono number-title font-extralight text-elem-purple">03. </span>
                        Some Things I've Built
                    </h2>
                </div>
                <div className="h-[calc(100%-200px)]">
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
                            <div className="relative z-10 hidden md:flex">
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
            </div>
        </section>
    )
}