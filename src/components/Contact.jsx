"use client"

import Image from "next/image"
import Heading from "./sub-components/Heading"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div id="contact" className="h-screen py-20 px-16 lg:px-24 lg:h-auto lg:my-20">
            <Heading text={"Get in touch"} />
            <div className="w-full h-full my-auto flex flex-col lg:flex-row items-center justify-center gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Image
                        src={"/contact.gif"}
                        alt="Contact Image"
                        width={400}
                        height={400}
                        className="w-full max-w-[250px] md:max-w-[300px] rounded-md opacity-80"
                    />
                </motion.div>
                <motion.form
                    // initial={{ opacity: 0, x: 150 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full max-w-[600px] lg:max-w-[400px] flex flex-col gap-4"
                >
                    <div className="w-full flex flex-col lg:flex-row gap-3">
                        <input
                            type="text"
                            className="dark:bg-gray-700 dark:text-gray-200 w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            className="dark:bg-gray-700 dark:text-gray-200 w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            placeholder="Your Email"
                        />
                    </div>
                    <input
                        type="text"
                        className="dark:bg-gray-700 dark:text-gray-200 w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        placeholder="Subject"
                    />
                    <textarea
                        className="dark:bg-gray-700 dark:text-gray-200 max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        placeholder="Write Me..."
                    ></textarea>
                    <input
                        type="submit"
                        className="w-full border border-yellow-500 rounded-md bg-yellow-500 text-white px-4 py-2 text-sm font-light tracking-wider outline-none hover:bg-yellow-600 transition-colors cursor-pointer"
                    />
                </motion.form>
            </div>
        </div>
    )
}

export default Contact
