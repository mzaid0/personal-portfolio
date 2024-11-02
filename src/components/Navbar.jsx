"use client"

import { copyRightIcon, navbarData } from "@/assets"

const Navbar = ({ id }) => {
    return (
        <div className="w-[50px] h-full fixed top-0 left-0 flex flex-col justify-between border-r border-gray-200 px-2 py-5 z-20 dark:border-gray-700">
            <a href="#" className="">
                <span className="text-2xl sm:text-xl font-semibold text-red-400">M</span>.
                <span className="block w-min rotate-90 text-gray-600 dark:text-gray-300 origin-bottom text-[10px] sm:text-[9px] font-semibold">Zaid</span>
            </a>
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
                {navbarData.map((item, i) => (
                    <a href={`/#${item.id}`} key={i} className="group flex flex-col items-center">
                        <span className={`group-hover:scale-125 transition-all ${item.id === id ? "text-red-600 scale-110" : "text-yellow-600 scale-100"}`}>
                            {item.icon}
                        </span>
                        <span className={`text-[8px] sm:text-[9px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center ${i % 2 === 0 ? "translate-x-2" : "-translate-x-2"} ${item.id === id && "-translate-x-0 opacity-100"}`}>
                            {item.name}
                        </span>
                    </a>
                ))}
            </div>
            <p className="flex items-center justify-center text-[10px] sm:text-[11px] text-gray-500 mt-4">
                <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider text-[6px] sm:text-[8px]">{copyRightIcon} 2019 - {new Date().getFullYear()}</span>
            </p>
        </div>
    )
}

export default Navbar
