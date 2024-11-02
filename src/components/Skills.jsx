"use client"

import { skillsData } from "@/assets"
import Heading from "./sub-components/Heading"
import Image from "next/image"
import { motion } from "framer-motion"

const Skills = () => {
    const variants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.07
            },
        }),
        hidden: {
            opacity: 0,
            y: 30
        }
    }

    return (
        <div id="skills" className="h-screen lg:h-auto  my-20 md:my-6 lg:my-20  flex flex-col items-center justify-center  px-16 lg:px-24">
            <Heading text={"Skills"} />
            <div className="w-full flex justify-between flex-wrap gap-x-4 gap-y-8 lg:gap-y-6">
                {skillsData.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: "50px", once: true }}
                        key={i} 
                        className="flex items-center justify-center gap-x-1 rounded-xl border border-yellow-500 bg-zinc-200 px-2 py-1 md:px-3 sm:px-1">
                        <Image src={item.icon} alt={item.name} width={100} height={100} className="h-auto w-[25px] md:w-[20px] sm:w-[15px]" />
                        <p className="text-xs text-gray-600 sm:text-[9px]">{item.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
