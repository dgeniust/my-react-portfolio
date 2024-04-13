import { React, useRef } from 'react'
import './Portfolio.css'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
const items = [
    {
        id : 1,
        title : "Dictionary",
        img : "https://cdn.dribbble.com/users/3319851/screenshots/17140439/media/e03cc34b5786a375ea96d5ba0901aba1.jpg?resize=1000x750&vertical=center",
        link : "",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam a molestiae accusamus officiis autem suscipit."
    },
    {
        id : 2,
        title : "Space Shoes",
        img : "https://cdn.dribbble.com/userupload/8144438/file/original-d020501137c877787f0fa9393e5948cb.png?resize=1200x900",
        link : "https://space-market.vercel.app/",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam a molestiae accusamus officiis autem suscipit."
    },
    {
        id : 3,
        title : "Rock Paper Scissors",
        img : "https://cdn.dribbble.com/users/499193/screenshots/17620421/media/e9d3cfb687b36ee944bce4c67b28f2d4.png?resize=1000x750&vertical=center",
        link : "https://dgeniust.github.io/scissors-rock-paper/",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam a molestiae accusamus officiis autem suscipit."
    },
    {
        id : 4,
        title : "Music Player",
        img : "https://cdn.dribbble.com/userupload/2669446/file/original-ee4e7360a209eda6a4517eced70b0a0e.jpg?resize=752x",
        link : "https://dgeniust.github.io/audio-for-everyone/",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam a molestiae accusamus officiis autem suscipit."
    },
]
const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
            target : ref,
            // offset : ["end end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    return (
        <section>   
        <div className="container flex justify-center items-center w-full h-full text-white overflow-hidden">
            <div className="wrapper max-w-screen-xl	h-full m-auto flex justify-center items-center">
                <div className="imageContainer flex-1 h-2/4" ref = { ref }>
                    <img className="object-cover h-full w-full" src={item.img} alt="" />
                </div>
                <motion.div className="textContainer flex-1 flex flex-col gap-8 text-left justify-center items-center" style={{y}}>
                    <h2 className='text-6xl font-bold'>{item.title}</h2>
                    <p className='text-gray-600 text-xl'>{item.desc}</p>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <a href={item.link} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        View demo
                    </a>
                    </button>
                </motion.div>
            </div>
        </div>
        </section>
    )
}
export default function Portfolio() {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness : 100,
        damping : 30,
    });
    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1 className='progress-name'>MY PROJECT</h1>
                <motion.div style={{ scaleX: scaleX }} className='progress-bar h-2.5 bg-white'></motion.div>
            </div>
            {
                items.map((item) => {
                    return <Single key={item.id} item={item}></Single>
                })
            }
        </div>
    );
}
