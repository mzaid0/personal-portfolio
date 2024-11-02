"use client"

import Heading from "./sub-components/Heading"
import Achievement from "./sub-components/Achievement"
import Image from "next/image"
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "../assets/index"

const About = () => {
    return (
        <div id="about" className="min-h-screen lg:h-auto px-16 w-full lg:px-16 xl:px-24 flex flex-col items-center justify-center">
            <Heading text={"About Me"} />
            {/* Spacing between Heading and Content reduced */}
            <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:space-y-0">

                {/* Image sirf medium screens aur us se badi par visible hai */}
                <Image
                    src={"/about-me.png"}
                    alt="About Image"
                    width={400}
                    height={400}
                    className="hidden md:block w-[300px] lg:w-[400px] mb-4 md:mb-0"
                />

                <div className="relative max-w-[800px] mx-auto rounded-xl bg-zinc-100 dark:bg-gray-700 p-5 text-justify">
                    <span className="absolute text-2xl -left-3 top-10 scale-[1.5] text-zinc-100 hidden md:inline-block">
                        {arrowLeftIcon}
                    </span>
                    <p className="font-light text-gray-700 dark:text-white first-letter:pl-3 text-xs md:text-xs lg:text-lg">
                        {aboutText}
                    </p>
                    <a href="/Muhammad-Zaid.pdf" download className="mt-4 inline-flex items-center gap-x-2 rounded-full bg-red-400 px-4 py-2 text-sm font-light text-white hover:bg-red-500 hover:scale-105 transition-transform duration-100">
                        <span>Download CV</span>
                        <span className="text-base">{downloadIcon}</span>
                    </a>
                </div>
            </div>
            <div className="mt-12 w-full flex flex-wrap items-center justify-start xl:justify-between gap-4 xl:px-10">
                {aboutData.map((item, i) => (
                    <Achievement key={i} title={item.title} amount={item.amount}>
                        {item.icon}
                    </Achievement>
                ))}
            </div>
        </div>
    )
}

export default About
