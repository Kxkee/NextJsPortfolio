import {RxTriangleRight} from 'react-icons/rx';
export default function AboutMe() {
    const skills: string[] = ['TypeScript', 'React', 'Next.JS 13', 'Node.js','Prisma', 'PostgreSQL'];
    return (
        <section className="min-h-[700px] md:w-[800px] flex justify-center x-[10px] md:mx-[100px] lg:mx-[200px]">
            <div className="w-full">
                <div className="h-[200px] flex items-end pb-10">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        <span className="mono number-title font-extralight text-elem-purple">01. </span>
                        About Me
                    </h2>
                </div>
                <div className="h-[calc(100%-200px]">
                    <div className='w-full space-y-7 text-1xl text-third-light-purple'>
                        <p className="text">Hello! My name is Tom and I have been interested in web development and
                            technology since I was a child, thanks to my love for video games.</p>

                        <p>I am naturally curious and always eager to learn more. Recently, I created CoinTastic,
                            a web application that allows users to track real-time cryptocurrency prices using NextJS.</p>

                        <p>My passion for web development has led me to gain experience in various settings,
                            including working on personal projects as well as professional experiences at different companies,
                            where I have honed my skills in coding and problem-solving.</p>

                        <p>I am currently looking for an Apprenticeship contract !</p>

                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className="skills">
                            {skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2 mono font-extralight text-[13px]">
                                    <span><RxTriangleRight size={20} className="text-elem-purple" /></span>
                                    {skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}