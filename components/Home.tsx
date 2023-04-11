import stripes from '@/public/stripes.svg';
import Image from "next/image";
export default function Home(){
    return (
        <div className="w-full h-full flex flex-col justify-center items-start gap-3 pb-[50px]">
            <p className="mono text-elem-purple pb-3">Hi, my name is</p>
            <h1 className="ptitle name font-bold text-primary-light-purple opacity-[90%]">Tom Cousin.</h1>
            <h2 className="stitle name font-bold text-secondary-light-purple opacity-[80%]">Fullstack <span className="text-elem-purple">JS</span> Developer.</h2>
            <p className="text-third-light-purple max-w-[600px] mt-5">I’m a web developer specializing in building (and occasionally designing) web application.
                Currently I am looking for an <span className="text-elem-purple">Apprenticeship contract</span>.</p>
            <button className="
                    p-4
                     px-10
                      border-[1.5px]
                       border-[#864AB5]
                        rounded
                         hover:bg-[#262230]
                          duration-200
                          cursor-pointer
                           text-[16px]
                            text-elem-purple
                            mt-10
                            mono
                            font-extralight
                            ">Check out my bio !</button>
            <Image
                priority
                src={stripes}
                height={350}
                width={350}
                alt="stripes"
                className="absolute right-0 bottom-0 collapse md:visible"
            />
        </div>
    )
}