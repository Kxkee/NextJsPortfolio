export default function Home(){
    return (
        <div className="w- h-full flex flex-col justify-center items-start gap-3 pb-[200px]">
            <p className="mono text-elem-purple">Hi, my name is</p>
            <h1 className="text-7xl name font-bold text-primary-light-purple opacity-[90%]">Tom Cousin.</h1>
            <h2 className="text-6xl name font-bold text-secondary-light-purple opacity-[80%]">Fullstack JS Developer.</h2>
            <p className="text-third-light-purple w-[600px] mt-5 text">I’m a web developer specializing in building (and occasionally designing) web application.
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
                            ">Check out my bio !</button>
        </div>
    )
}