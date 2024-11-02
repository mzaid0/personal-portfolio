"use client"

import { QuestionArrow } from "@/assets"
import { useState } from "react"
import { delay, motion } from "framer-motion"

const Question = ({ data, index }) => {

    const [show, setShow] = useState(false)

    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.07 },
        }),
        hidden: { opacity: 0, x: -30 }
    }

    return (
        <motion.li
            custom={index} initial="hidden" whileInView="visible" viewport={{ margin: "50px", once: true }} variants={variants}
            className="border border-yellow-500 p-1 rounded-lg ">
            <h1 onClick={() => setShow(!show)} className={`flex items-center  text-lg sm:text-sm hover:text-yellow-600 font-light tracking-wide cursor-pointer  ${show ? "border-b text-yellow-600" : "text-gray-800 dark:text-gray-200 "
                }`}>
                <motion.span animate={{ rotate: show ? 180 : 0 }}>{QuestionArrow}</motion.span>
                <span className="text-sm">{data.question}</span>
            </h1>
            <motion.p
                initial={{ scaleY: 0, height: 0, opacity: 0 }}
                animate={{ scaleY: show ? 1 : 0, height: show ? "auto" : 0, opacity: show ? 1 : 0 }}
                transition={{ duration: 0.1, type: "spring", stiffness: show ? 250 : 50, opacity: { delay: show ? 0.2 : 0 } }}
                className="box-border origin-top pl-8 font-extralight tracking-wide text-gray-900  dark:text-gray-200 first-letter:pl-3 sm:text-xs text-sm">
                {data.answer}
            </motion.p>
        </motion.li>
    )
}
export default Question