import React from "react";
import { motion } from "framer-motion";
import './Home.css';

const textVariants = {
    initial: {
        x: -500,
        opacity : 0,
    },
    animate :{
        x : 0,
        opacity : 1,
        transition : {
            duration : 1,
            staggerChildren : 0.1,
        }
    },
    scrollButton : {
        opacity : 0,
        y:10,
        transition : {
            duration : 3,
            repeat : Infinity,
        }
    },
}

export default function Home() {
    return(
        <div>
            <div className="homepage relative overflow-hidden">
                <div className="wrapper items-center text-left text-white font-bold ">
                    <motion.div className="textContainer h-full flex flex-col justify-center gap-10 w-6/12 ml-40" variants={textVariants} initial="initial" animate ="animate">
                        <motion.h2 className="name text-2xl tracking-wider" variants={textVariants}>Nguyễn Thành Đạt</motion.h2>
                        <motion.h1 className="achievement text-6xl" variants={textVariants}>T làm j kệ con mẹ t</motion.h1>
                        <motion.div className="buttons font-semibold" variants={textVariants}>
                            <button className="latest-project" variants={textVariants}>See the latest project</button>
                            <button className="contact-me" variants={textVariants}>Contact me</button>
                        </motion.div>
                        
                        <motion.div className="scrollButton w-14" variants={textVariants} animate="scrollButton">
                            <img src="/scrollbtn.png" alt="" />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="imageContainer absolute top-20 right-20 h-full">
                    <img src="/ntd.png" width="400px" height="400px" alt="" />
                </div>
            </div>
        </div>
    );
};
