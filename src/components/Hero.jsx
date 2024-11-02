"use client"

import Image from "next/image"
import { heroIcons } from "../assets/index"
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion"
import { useState } from "react"

const Hero = () => {

  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseHandle = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
    setMouseMove(true)
  }

  const { innerWidth, innerHeight } = windowOffset

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  return (
    <div id="home" className="h-screen flex items-center justify-center px-16 " onMouseMove={handleMouseMove} onMouseEnter={handleMouseHandle}>
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div className="flex items-center justify-center relative" style={{ rotateX: mouseMove ? rotateX : 0, rotateY: mouseMove ? rotateY : 0, transition: "0.1s" }}>
            <Image src={"/person.png"} alt="person image" width={300} height={300} priority={true} className=" w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[160px]" />
            <motion.span
              className="absolute text-xl sm:text-3xl lg:text-5xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 1 : 0,
                scale: buttonHover ? 2 : 1,
                y: buttonHover ? -30 : 0
              }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-4xl lg:h-auto font-bold tracking-wider text-gray-600 dark:text-gray-200 ">My name is Muhammad Zaid <span className="text-red-500">&</span></h1>
          <p className="text-sm sm:text-lg tracking-wider text-gray-700 dark:text-gray-400">I like web development</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-4 sm:gap-x-8 text-xl sm:text-3xl text-yellow-600">
          {heroIcons.map((item, index) => (
            <a href={item.href} target="_blank" className="rounded-lg hover:bg-red-400 hover:text-white transition-colors p-1 sm:p-2" key={index}>{item.icon}</a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#" className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 text-sm sm:text-base font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>Talk to me</motion.a>
      </div>
    </div>
  )
}

export default Hero
