export default function Navigation() {
    return (
        <div className="h-[90px] w-full flex justify-between px-10 mono fixed">
            <div className="flex justify-start items-center w-[150px]">
                <p>Tom Cousin</p>
            </div>
            <div className="flex justify-around items-center w-[600px]">
                <ul className="w-full h-[40px] flex justify-around items-center text-[13px]">
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">01.</span> About</li>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">02.</span> Experience</li>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">03.</span> Work</li>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">04.</span> Contact</li>
                    <li className="
                    p-2
                     px-3
                      border-[1.5px]
                       border-[#864AB5]
                        rounded
                         hover:bg-[#262230]
                          duration-200
                          cursor-pointer
                           text-[16px]
                            text-elem-purple
                            ">Resume</li>
                </ul>
            </div>
        </div>
    )
}