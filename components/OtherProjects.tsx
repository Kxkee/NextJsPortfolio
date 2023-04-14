import Project from "@/components/Project";
import {id} from "postcss-selector-parser";

export default function OtherProjects() {

    const projectList = {
        projects:
        [{
            link: "",
            title: "Portfolio",
            description: "Here is the portfolio that I made in NextJS",
            stack: ["Next.js", "React", "Tailwind"],
        },
        {
            link: "https://github.com/Kxkee/Quivo-Finance-Tracker",
            title: "Quivo",
            description: "Track all your accounts in one place with our easy-to-use banking app.",
            stack: ["Next.js", "Tailwind", "Supabase"],
        },
        {
            link: "https://github.com/Kxkee/Discord-BOT-NFT-Checker",
            title: "Discord BOT NFT Checker",
            description: "It can link a Wallet Adress to the user discord account and scan by 30 sec interval for his eligibility.",
            stack: ["Javascript", "Node.js", "Ethers.js", "Discord.js"],
    },
            {
                link: "https://github.com/Kxkee/Multisig-dApp",
                title: "Multisig dApp",
                description: "Multisig Wallet deployed on Sepolia testnet",
                stack: ["Next.js", "Tailwind", "Solidity", "Hardhat"],
            },
    ]}


    return(
        <div className="min-h-[400px]  md:w-full mt-10 py-10">
            <div className="w-full h-full">
                <div className="flex justify-center items-center h-[200px]">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        Other Noteworthy Projects
                    </h2>
                </div>
                <div className="h-full flex flex-wrap gap-3 justify-center">
                    {projectList.projects.map((project, idx) => (
                        <Project key={idx} link={project.link} title={project.title} description={project.description} stack={project.stack} />

                    ))}
                </div>
            </div>
        </div>
    )
}