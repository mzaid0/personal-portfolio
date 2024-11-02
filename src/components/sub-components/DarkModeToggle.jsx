"use client"; // Client-side hooks ka use karne ke liye zaroori hai

import { useState, useEffect } from "react";
import { sunIcon, moonIcon } from "@/assets"; // Sun aur Moon icons ko import kar rahe hain

const DarkModeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme); // LocalStorage mein theme ko save karte hain
    };

    return (
        <button onClick={toggleTheme} className="text-xl text-yellow-600 hover:text-yellow-500 z-50 duration-700 dark:text-yellow-200 ">
            {theme === "light" ? moonIcon : sunIcon} {/* Icon toggle */}
        </button>
    );
};

export default DarkModeToggle;
