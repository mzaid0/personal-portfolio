"use client"

import { checkIcon, pricingPlans } from "@/assets"
import Heading from "./sub-components/Heading"
import { motion } from "framer-motion"

const Pricing = () => {
    return (
        <div id="pricing" className="py-20 px-16 md:px-24 lg:px-48">
            <Heading text={"Pricing Plan"} />
            <div className="h-full flex flex-wrap items-center justify-center gap-8">
                {
                    pricingPlans.map((plan, i) => (
                        <motion.div
                            initial={{ y: 0, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, delay: i * 0.2, scale: { duration: 0.15 } }}
                            key={i} className={`dark:bg-gray-700 w-full sm:w-[270px] md:w-[350px] xl:w-[30%] flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 ${i === 1 ? " bg-white" : "bg-zinc-50"}`}
                        >
                            <h1 className="text-xl md:text-3xl font-light tracking-wide text-center dark:text-gray-200">{plan.title}</h1>
                            <span className="text-lg md:text-2xl text-center dark:text-gray-200">{plan.pricing}</span>
                            <ul className="flex flex-col gap-y-2">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-x-3">
                                        <span className={`text-xl ${i === 1 ? "text-red-500" : "text-yellow-500"}`}>{checkIcon}</span>
                                        <li className="text-xs md:text-[15px] font-light tracking-wide dark:text-gray-200">{feature}</li>
                                    </div>
                                ))}
                            </ul>
                            <p className="text-xs md:text-sm font-light text-center">
                                <span className="font-semibold dark:text-gray-200">{plan.recommended}</span>
                            </p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pricing
