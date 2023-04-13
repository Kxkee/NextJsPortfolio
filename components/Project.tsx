import {CiFolderOn} from "react-icons/ci";
import {FiGithub} from "react-icons/fi";
import Link from "next/link";

type props = {
    link: string | undefined;
    title: string;
    description: string;
    stack: string[];
}

export default function Project({link, title, description, stack}: props) {
    return (

            <div className="min-h-[300px] w-full sm:w-[48%] md:w-[32%] p-5 py-7 rounded shadow-lg shadow-black bg-bg-light-purple cursor-pointer duration-500 hover:bg-[#262230]">
                <Link href={link ? (link) : ""} target="_blank" className="flex">
                <div className="w-full h-full flex flex-col gap-5">
                    <div className=" flex justify-between items-start items-center">
                        <CiFolderOn size={45} className="text-elem-purple" />
                        <FiGithub size={25} />
                    </div>
                    <div>
                        <h4 className="text-[22px] name font-bold">{title}</h4>
                    </div>
                    <div className="mb-5">
                        <p className="text[13px] font-light text-third-light-purple">
                            {description}
                        </p>
                    </div>
                    <ul className="flex gap-3 flex-wrap">
                        {stack && stack.map((tool, idx) => (
                            <li key={idx} className="flex items-center gap-2 mono font-extralight text-[13px]">{tool}</li>
                        ))}
                    </ul>
                </div>
                </Link>

            </div>
)
}