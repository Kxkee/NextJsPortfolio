import { slide as Menu } from 'react-burger-menu'

export default function Navigation() {
    return (
        <div className="h-[90px] w-full flex justify-between px-5 bg-bg-purple z-50 lg:px-10 mono font-extralight fixed">
            <div className="flex justify-start items-center w-[150px]">
                <p>Tom Cousin</p>
            </div>
            <div className="flex justify-around items-center w-[600px] hidden md:flex">
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
                            font-extralight
                            ">Resume</li>
                </ul>

            </div>
            <div className="space-y-2 w-[100px] flex md:hidden flex-col justify-center items-end">
                <span className="block w-8 h-0.5 bg-elem-purple"></span>
                <span className="block w-8 h-0.5 bg-elem-purple"></span>
                <span className="block w-5 h-0.5 bg-elem-purple"></span>
            </div>
        </div>
    )
}