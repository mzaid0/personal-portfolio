"use client"

import { projectsButton, projectsData } from "@/assets"
import Heading from "./sub-components/Heading"
import Project from "./sub-components/Project"
import { useEffect, useRef, useState } from "react"
import { animate, motion } from "framer-motion"

const Projects = () => {

    const [tech, setTech] = useState("All")
    const [index, setIndex] = useState(0)
    const prevIndex = useRef(0)
    const buttonRef = useRef([])

    const handleClick = () => {
        animate(buttonRef.current[prevIndex.current], { opacity: 0.5, scale: 1 })
        animate(buttonRef.current[index], { opacity: 1, scale: 1.2 })
    }

    useEffect(() => {
        handleClick()
        prevIndex.current = index
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    return (
        <div id="projects" className="min-h-screen py-20 px-16 lg:px-24">
            <Heading text={"Projects"} />

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-5 sm:gap-3">
                {
                    projectsButton.map((button, i) => (
                        <motion.button
                            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
                            key={i}
                            ref={(elem) => buttonRef.current.push(elem)}
                            onClick={() => {
                                setTech(button)
                                setIndex(i)
                            }}
                            className="border border-yellow-500 rounded-lg px-3 py-1 text-xs sm:text-xs font-light tracking-wider text-gray-600 sm:px-2 sm:py-1 hover:bg-yellow-50 dark:text-gray-400 transition-all duration-150"
                        >
                            {button}
                        </motion.button>
                    ))
                }
            </div>

            {/* Projects Grid */}
            <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-3">
                {projectsData
                    .filter((project) => project.tech.some((item) => (tech === "All" ? true : item === tech)))
                    .map((data, i) => (
                        <motion.div key={`id-${i}`} layout>
                            <Project data={data} index={i} />
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}

export default Projects
