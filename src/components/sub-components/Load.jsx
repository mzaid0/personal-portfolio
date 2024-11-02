"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Load = () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
    }, [])
    return (
        <motion.div
            initial={{ top: 0 }}
            animate={{ top: loader ? "-100%" : 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50">
            <Image src={"/spinner.gif"} alt="spinner gif" width={50} height={50} />
        </motion.div>
    )
}

export default Load