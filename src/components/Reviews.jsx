"use client"

import Image from "next/image"
import Heading from "./sub-components/Heading"
import { arrowIcons, reviewsData, starIcons } from "@/assets"
import { useEffect, useRef, useState } from "react"
import { animate, motion } from "framer-motion"

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(false)
    const prevIndex = useRef(0)
    const slides = useRef([])

    const rightClickHandler = () => {
        animate(slides.current[index], { x: 0 }, { delay: 0.3 })
        animate(slides.current[prevIndex.current], {
            scale: index === 0 ? 1 : 0.4,
            rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10
        })
    }

    const leftClickHandler = () => {
        animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 })
        animate(slides.current[prevIndex.current], { x: "100%" })
    }

    useEffect(() => {
        direction ? leftClickHandler() : rightClickHandler()
        prevIndex.current = index
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    return (
        <div id="reviews" className="my-20 px-16 md:px-16 lg:px-24 sm:px-5">
            <Heading text={"Reviews"} />
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full max-w-[800px] lg:max-w-[90%] md:max-w-[95%] h-[500px] lg:h-[600px] md:h-[400px] sm:h-[300px] xl:w-[70%] flex items-center justify-center overflow-hidden">

                    {reviewsData.map((review, i) => (
                        <motion.div
                            initial={{ x: "100%" }}
                            key={i}
                            ref={(element) => slides.current.push(element)}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 md:gap-y-3 border border-yellow-500 bg-zinc-50 dark:bg-gray-700 p-5 sm:p-4 rounded-xl">
                            <Image src={review.image} alt={review.name} width={120} height={120} className="w-[120px] md:w-[80px] sm:w-[60px] aspect-square rounded-full border border-yellow-500 p-4 object-contain" />
                            <h1 className="text-sm md:text-xl sm:text-lg text-center tracking-wider text-yellow-600 dark:text-yellow-400">
                                {review.name}
                            </h1>
                            <p className=" md:text-sm sm:text-xs text-justify font-light tracking-wide text-gray-600 dark:text-gray-200 first-letter:pl-2 text-xs">
                                {review.comment}
                            </p>
                            <div className="flex flex-col items-center gap-y-2">
                                <span className="text-sm font-light text-yellow-500 mr-3">{review.stars.reduce((sum, item) => {
                                    return (sum += item)
                                }, 0).toFixed(1)}</span>
                                <div className="flex items-center gap-x-1 text-yellow-500 sm:gap-x-1">
                                    {review.stars.map((star, i) => (
                                        <span key={i}>
                                            {star === 1 ? starIcons[0].icon : starIcons[1].icon}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5 mx-auto">
                    <button className={`${index === 0 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"} hover:scale-125 transition-all`} onClick={() => {
                        setDirection(true)
                        setIndex(index - 1)
                    }}>{arrowIcons[0].icon}</button>
                    <button className={`${index === reviewsData.length - 1 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"} hover:scale-125 transition-all`} onClick={() => {
                        setDirection(false)
                        setIndex(index + 1)
                    }}>{arrowIcons[1].icon}</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews
