import Image from "next/image";
import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import FeaturedProjectSM from "@/components/FeaturedProjectSM";

type props = {
    link: string
    img: any;
    title: string;
    description: string;
    stack: string[];

}

export default function FeaturedProjectRight({link, img, title, description, stack}: props) {
    return (
        <>
        <FeaturedProjectSM link={link} img={img} title={title} description={description} stack={stack} />
    <div className="min-h-[400px] hidden md:flex">
            <div className='w-full space-y-7 text-1xl text-third-light-purple'>
                <div className="w-full min-h-[450px] relative md:static flex items-center justify-end ">
                    <div className="w-full flex justify-start items-center px-2">
                        <div className="z-0 w-full md:w-fit relative md:absolute">
                            <div className="w-full min-h-full sm:max-h-full rounded bg-featured-project-hover z-10 absolute md:absolute backdrop-blur-sm hover:opacity-0 duration-500 p-5 sm:py-20 sm:px-6 shadow-md shadow-black">
                            </div>
                            <Image src={img} alt="devboard" className="rounded w-full h-full opacity-0 sm:opacity-100 duration-500" />
                        </div>
                    </div>
                    <div className="relative z-10">
                        <div className="flex flex-col justify-center items-end">
                            <p className="font-extralight mono text-elem-purple text-[13px]">Featured Project</p>
                            <p className="font-bold featuredProjectTitle text-secondary-light-purple mb-5">{title}</p>
                            <div className="p-7 w-[450px] bg-bg-light-purple text-end rounded shadow-md shadow-black mb-5">
                                <p>{description}</p>
                            </div>
                            <ul className="flex gap-3 font-extralight mono text-[13px] mb-5">
                                {stack && stack.map((tools, idx) => (
                                    <li key={idx}>{tools}</li>
                                ))}
                            </ul>
                            <Link href={link} target="_blank">
                                <FiGithub size={25} className="text-third-light-purple hover:text-elem-purple duration-200 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            </>
    )
}