import {useState} from "react";
import {RxTriangleRight} from 'react-icons/rx';

export default function Experience() {

    const tabItems: string[] = ["O'clock", "TiMOTION"]
    const oclock: string[] = [
        "News: allowing users to retrieve multiple RSS feeds or internal posts within" +
        " the application to stay informed about the latest technology news in the development field.",
        "GitHub: users have the option to log in via an external provider, which then allows them to retrieve their" +
        " repositories and organizations from GitHub within the application.",
        "Users can also create posts that will be automatically published in the News section of the app with RSS feeds.",
        "Integrated StackOverflow search within the application.",
        "Playground for direct coding within the app.\n" +
        "And several other functionalities that allow users to have a centralized panel of tools within a single application!"
    ]
    const timotion: string[] = [
        "Developed and shipped highly interactive web applications for TiMOTION using PHP",
        "Developed a command creation management application aimed at automating and optimizing the statistical data collection of operators within the TiMOTION Europe production service.",
        "Contributed to create the architecture and relational schema of the Database"
    ]
    const [selectedItem, setSelectedItem] = useState<number>(0);

    return (
        <section className="min-h-[700px] md:w-[700px] flex justify-center x-[10px] md:mx-[100px] lg:mx-[200px] pb-10" id="Experience">
            <div className="w-full">
                <div className="h-[200px] flex items-end pb-10">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        <span className="mono number-title font-extralight text-elem-purple">02. </span>
                        Where I&apos;ve worked
                    </h2>
                </div>
                <div className="h-[calc(100%-200px]">
                    <div className='w-full flex flex-col items-center md:items-start md:flex-row gap-5 text-third-light-purple'>
                        <div className="w-[200px]"><ul className="mono font-extralight text-[13px] flex md:block">
                            {tabItems.map((item, idx) => (
                                <li key={idx} className={`
                                ${selectedItem == idx ? "border-b border-b-elem-purple md:border-b-0 md:border-l md:border-l-elem-purple"
                                    : "border-b md:border-b-0 md:border-l"}`}>
                                    <button
                                        role="tab"
                                        aria-label={item}
                                        aria-selected={selectedItem == idx}
                                        aria-controls={`tabpanel-${idx + 1}`}
                                        className={`p-3 w-full text-start hover:bg-[#262230] duration-200
                                        ${selectedItem == idx ? "bg-[#262230] text-elem-purple" : null}`}
                                        onClick={() => setSelectedItem(idx)}
                                    >
                                        {item}
                                    </button></li>
                            ))}
                        </ul></div>
                        <div className="w-full md:w-[calc(100%-200px)]">
                            {selectedItem === 0 ? (
                                <div className="w-full h-full">
                                    <div className="h-[70px]">
                                        <h3 className="name font-medium text-[22px]">Front End Developer <span className="text-elem-purple">@ O&apos;clock</span></h3>
                                        <p className="mono text-[13px] font-extralight">February - March 2023</p>
                                    </div>
                                    <div className="h-calc[100%-70px]">
                                        <p className="mb-5">I have developed a Dashboard-type application where users have access to several tools/resources such as:</p>
                                        <ul className="space-y-4 text-[15px]">
                                            {oclock.map((features: string, idx: number)=> (
                                                <li className="flex items-start gap-2" key={idx}><span><RxTriangleRight size={20} className="text-elem-purple" /></span>{features}</li>
                                            ) )}
                                        </ul>
                                    </div>
                                </div>
                            ) :
                                (
                                    <div className="w-full h-full">
                                        <div className="h-[70px]">
                                            <h3 className="name font-medium text-[22px]">PHP Developer <span className="text-elem-purple">@ TiMOTION</span></h3>
                                            <p className="mono text-[13px] font-extralight">January - March 2022</p>
                                        </div>
                                        <div className="h-calc[100%-70px]">
                                            <ul className="space-y-4 text-[15px]">
                                                {timotion.map((features: string, idx: number)=> (
                                                    <li className="flex items-start gap-2" key={idx}><span><RxTriangleRight size={20} className="text-elem-purple" /></span>{features}</li>
                                                ) )}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}