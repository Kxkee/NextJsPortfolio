import {FiGithub} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

type props = {
    link: string;
    img: any;
    title: string;
    description: string;
    stack: string[];

}

export default function FeaturedProjectSM({link, img, title, description, stack}: props) {
    return (
        <>
            <Link href={link ? link : ""} target="_blank">
                <div className="h-[500px] flex md:hidden">
                <div className='w-full space-y-7 text-1xl text-third-light-purple'>
                    <div className="w-full min-h-[450px] relative md:static flex items-center justify-end">
                        <div className="w-full flex justify-start items-center">
                            <div className="w-full h-[450px] md:static flex items-center justify-end">
                                <div className="w-full h-full rounded backdrop-sepia-0 bg-featured-project-SM z-10 absolute md:absolute opacity-90 duration-500 p-10 sm:py-20 sm:px-6 shadow-md shadow-black">
                                    <div className="w-full flex flex-col justify-start items-start gap-5 md:hidden">
                                        <div className="mb-5">
                                            <p className="font-extralight mono text-elem-purple text-[13px]">Featured Project</p>
                                            <p className="font-bold featuredProjectTitle text-secondary-light-purple">{title}</p>
                                        </div>
                                        <p className="">{description}</p>
                                        <ul className="flex flex-wrap gap-3 font-extralight mono text-[13px] mb-5">
                                            {stack && stack.map((tool, idx)=> (
                                                <li key={idx}>{tool}</li>
                                            ))}
                                        </ul>
                                        <FiGithub size={25} className="text-third-light-purple hover:text-elem-purple duration-200" />
                                    </div>
                                </div>
                                <Image src={img} alt="devboard" className="rounded w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </>
    )
}