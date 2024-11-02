"use client"
import { arrowLeftIcon, experienceData } from "@/assets"
import Heading from "./sub-components/Heading"
import { motion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const Experience = () => {
    const date = new Date().getFullYear()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "end end"]
    })

    const scrollY = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 20
    })
    return (
        <div id="experience" className="min-h-screen relative px-16 md:px-16 lg:px-24 sm:px-5 py-20 md:py-6 xl:py-20 -z-10">
            <Heading text="Experience & Education" />

            {/* Image is now visible only on large screens */}
            <Image src={"/education.png"} alt="Experience & Education image" width={400} height={400} className="absolute top-10 right-10 opacity-70 hidden" />

            <div ref={containerRef} className="relative w-full h-full flex flex-col items-center gap-y-10 lg:gap-y-20 py-10">
                {
                    experienceData.map((data, i) => (
                        <div key={`id-${i}`} className="w-full max-w-[600px] px-5 relative mx-auto flex flex-col items-center">
                            <motion.div
                                // initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                                className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-gray-700 w-full text-center">
                                <h1 className=" sm:text-lg font-light text-gray-700 dark:text-gray-200 ">{data.title}</h1>
                                <p className="text-gray-800">
                                    <span className="block font-light dark:text-gray-200 text-sm">Education:</span>
                                    <span className="my-1 block pl-2 font-extralight dark:text-gray-200 text-xs">{data.education}</span>
                                </p>
                                <div className="text-gray-800">
                                    <span className="font-light dark:text-gray-200 text-sm">Experience:</span>
                                    <ul className="pl-2 text-sm dark:text-gray-200">
                                        {
                                            data.experience.map((exp, j) => (
                                                <li key={j} className="my-1 font-extralight text-xs">{exp}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <span className=" absolute top-20 text-red-300 -translate-y-1/2 left-1/2 transform -translate-x-1/2 rotate-180 md:hidden">{arrowLeftIcon}</span>
                            </motion.div>
                            <div className="hidden md:hidden w-14 absolute top-20 z-10 bg-white border border-gray-300 rounded-full aspect-square sm:grid place-items-center text-red-400 font-light -translate-y-1/2">
                                {date - experienceData.length + i + 1}
                            </div>
                        </div>
                    ))
                }
                <motion.div
                    initial={{ scaleY: 0 }}
                    style={{ scaleY: scrollY }}
                    className="absolute w-1 h-full rounded-full bg-gray-300 origin-top left-0 right-0 mx-auto -z-10">
                </motion.div>
            </div>
        </div >
    )
}
export default Experience
