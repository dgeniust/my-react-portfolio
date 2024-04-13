import {React, useRef} from 'react'
import "./Parallax.css"
import { motion, useScroll, useTransform } from "framer-motion"
export const Parallax = ({type}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start start", "end start"]
    })
    const yBg = useTransform(scrollYProgress,[0,1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress,[0,1], ["0%", "400%"])
    return (
        <div className='parallax h-full w-full relative flex items-center justify-center overflow-hidden' ref={ref} 
            style={{
                background: 
                    type ==="services" 
                        ? "linear-gradient(180deg, #111132,#0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)",
            }}>
            <motion.h1 style={{y : yText}}className='text-5xl font-bold text-white'>{type==="services" ? "What we do?" : "What we did?"}</motion.h1>
            <motion.div className="mountains w-full h-full absolute bg-bottom bg-cover"></motion.div>
            <motion.div style={{y : yBg, backgroundImage: `url(${type ==="services" ? "/planets.png" : "/sun.png"})`}} className="planets w-full h-full absolute bg-bottom bg-cover"></motion.div>
            <motion.div style={{x : yBg}} className="stars w-full h-full absolute bg-bottom bg-cover"></motion.div>
        </div>
    )
}
