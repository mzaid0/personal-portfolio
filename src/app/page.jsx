"use client"
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Reviews from "../components/Reviews";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Questions from "../components/Questions";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import Load from "@/components/sub-components/Load";

const Home = () => {

  const [id, setId] = useState(0)
  const compsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    )

    const compsArr = Array.from(compsRef.current.children)
    compsArr.forEach((component) => {
      observer.observe(component)
    })
  }, [])

  return (
    <>
      <Load />
      <Navbar id={id} />
      <div ref={compsRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Reviews />
        <Projects />
        <Pricing />
        <Contact />
        <Questions />
      </div>
    </>
  );
};
export default Home;