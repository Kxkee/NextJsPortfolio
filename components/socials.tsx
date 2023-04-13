import Link from "next/link";
import {FiGithub, FiLinkedin} from "react-icons/fi";

export default function Socials() {
    return(
        <div className="fixed bottom-10 left-10 flex flex-col gap-5">
        <Link href="https://github.com/Kxkee" target="_blank">
            <FiGithub size={25} className="text-third-light-purple
             hover:text-elem-purple
              duration-200
               cursor-pointer collapse md:visible" />
        </Link>
        <Link href="https://www.linkedin.com/in/tom-cousin1/" target="_blank">
            <FiLinkedin size={25} className="text-third-light-purple
             hover:text-elem-purple
              duration-200
               cursor-pointer collapse md:visible" />
        </Link>
    </div>
    )
}