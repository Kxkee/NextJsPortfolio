import Image from "next/image";
import devboard from '@/public/devboard.svg';

export default function FeaturedProject() {
    return(
        <section className="min-h-[700px] md:w-[800px] flex justify-center x-[10px] md:mx-[100px] lg:mx-[200px]">
            <div className="w-full">
                <div className="h-[200px] flex items-end pb-10">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        <span className="mono number-title font-extralight text-elem-purple">03. </span>
                        Some Things I've Built
                    </h2>
                </div>
                <div className="h-[calc(100%-200px]">
                    <div className='w-full space-y-7 text-1xl text-third-light-purple'>
                        <div className="w-full flex">
                            <div className="w-1/2">
                                <Image src={devboard} alt="devboard" className="rounded" />
                            </div>
                            <div className="flex flex-col w-1/2 justify-center items-end">
                                <p className="font-extralight mono text-elem-purple text-[13px]">Featured Project</p>
                                <p className="font-bold featuredProjectTitle text-secondary-light-purple">DevBoard</p>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}