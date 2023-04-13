import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import {useEffect, useState} from "react";
import {flag} from "arg";

export default function Navigation() {

    const [menuState, setMenuState] = useState(false);

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const handleMenu = () => {
        setMenuState(!menuState);
    }
    return (
        <div className="h-[90px] w-full flex justify-between px-5 bg-bg-purple opacity-[95%] z-50 lg:px-10 mono font-extralight fixed">
            <div className="flex justify-start items-center w-[150px]">
                <h1 className="font-bold name text-[20px]">Tom Cousin</h1>
            </div>
            <div className="flex justify-around items-center w-[600px] hidden md:flex">
                <ul className="w-full h-[40px] flex justify-around items-center text-[13px]">
                    <Link href="/"
                          onClick={e => {
                              let hero = document.getElementById("About");
                              e.preventDefault();
                              hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                              window.history.pushState("About", "About");
                          }}>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">01.</span> About</li>
                    </Link>
                    <Link href="/"
                          onClick={e => {
                              let hero = document.getElementById("Experience");
                              e.preventDefault();
                              hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                              window.history.pushState("Experience", "Experience");
                          }}>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">02.</span> Experience</li>
                    </Link>
                    <Link href="/"
                          onClick={e => {
                              let hero = document.getElementById("Work");
                              e.preventDefault();
                              hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                              window.history.pushState("Work", "Work");
                          }}>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">03.</span> Work</li>
                    </Link>
                    <Link href="/"
                          onClick={e => {
                              let hero = document.getElementById("Contact");
                              e.preventDefault();
                              hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                              window.history.pushState("Contact", "Contact");
                          }}>
                    <li className="p-2 hover:text-elem-purple duration-200 cursor-pointer"><span className="text-elem-purple">04.</span> Contact</li>
                    </Link>
                    <Link href="/Resume.pdf" target="_blank">
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
                    </Link>
                </ul>

            </div>
            <div className="flex md:hidden">
                <Menu right width={'200px'} isOpen={menuState} >
                    <a id="about" href="#About" className="menu-item mono text-[15px] p-2 hover:text-elem-purple duration-200 cursor-pointer" onClick={setMenuState}><span className="text-elem-purple">01.</span>About</a>
                    <a id="experience" href="#Experience" className="menu-item mono text-[15px] p-2 hover:text-elem-purple duration-200 cursor-pointer" onClick={setMenuState}><span className="text-elem-purple">02.</span>Experience</a>
                    <a id="work" href="#Work" className="menu-item mono text-[15px] p-2 hover:text-elem-purple duration-200 cursor-pointer" onClick={setMenuState}><span className="text-elem-purple">03.</span>Work</a>
                    <a id="contact" href="#Contact" className="menu-item mono text-[15px] p-2 hover:text-elem-purple duration-200 cursor-pointer" onClick={setMenuState}><span className="text-elem-purple">04.</span>Contact</a>
                </Menu>
            </div>

        </div>
    )
}