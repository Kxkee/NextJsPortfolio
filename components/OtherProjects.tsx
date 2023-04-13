import Project from "@/components/Project";

export default function OtherProjects() {

    const portfolio = {
        link: "",
        title: "Portfolio",
        description: "Here is the portfolio that I made in NextJS",
        stack: ["Next.js", "React", "Tailwind"],
    }

    const quivo = {
        link: "https://github.com/Kxkee/Quivo-Finance-Tracker",
        title: "Quivo",
        description: "Track all your accounts in one place with our easy-to-use banking app.",
        stack: ["Next.js", "Tailwind", "Supabase"],
    }

    const multisigDapp = {
        link: "https://github.com/Kxkee/Multisig-dApp",
        title: "Multisig dApp",
        description: "Multisig Wallet deployed on Sepolia testnet",
        stack: ["Next.js", "Tailwind", "Solidity", "Hardhat"],
    }

    return(
        <div className="min-h-[400px]  md:w-full mt-10 py-10">
            <div className="w-full h-full">
                <div className="flex justify-center items-center h-[200px]">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        Other Noteworthy Projects
                    </h2>
                </div>
                <div className="h-full flex flex-wrap gap-3 justify-center">
                    <Project link={portfolio.link} title={portfolio.title} description={portfolio.description} stack={portfolio.stack} />
                    <Project link={quivo.link} title={quivo.title} description={quivo.description} stack={quivo.stack} />
                    <Project link={multisigDapp.link} title={multisigDapp.title} description={multisigDapp.description} stack={multisigDapp.stack} />
                </div>
            </div>
        </div>
    )
}