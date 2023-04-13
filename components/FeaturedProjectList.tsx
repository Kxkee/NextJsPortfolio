import Image from "next/image";
import devboard from '@/public/devboard.svg';
import cointastic from '@/public/coinTastic.svg';
import FeaturedProjectLeft from "@/components/FeaturedProjectLeft";
import FeaturedProjectRight from "@/components/FeaturedProjectRight";
import OtherProjects from "@/components/OtherProjects";

export default function FeaturedProjectList() {

    const devBoard = {
        link: "https://github.com/Kxkee/DevBoard-front",
        img: devboard,
        title: "DevBoard",
        description: "A Dashboard-type application where users have access to several tools/resources related to development.",
        stack: ['Javascript', 'React', 'Redux', 'Express', 'PostgreSQL']
    }

    const coinTastic = {
        img: cointastic,
        title: "CoinTastic",
        description: "A useful web App to keep tracking cryptoassets price, volume and many other things !",
        stack: ['TypeScript', 'Next.js', 'Tailwind', 'Prisma', 'PostgreSQL']
    }

    return (
        <section className="min-h-[700px] w-full md:w-[920px] flex justify-center x-[10px] md:mx-[100px] lg:mx-[200px]" id="Work">
            <div className="w-full">
                <div className="h-[200px] flex items-center">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        <span className="mono number-title font-extralight text-elem-purple">03. </span>
                        Some Things I've Built
                    </h2>
                </div>
                <FeaturedProjectRight
                    link={devBoard.link}
                    img={devBoard.img}
                    title={devBoard.title}
                    description={devBoard.description}
                    stack={devBoard.stack} />

                <FeaturedProjectLeft
                    img={coinTastic.img}
                    title={coinTastic.title}
                    description={coinTastic.description}
                    stack={coinTastic.stack} />

                <OtherProjects />

            </div>
        </section>
    )
}