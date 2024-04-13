import React from 'react';
import './NavBar.css';
import {motion} from "framer-motion";
import { Sidebar } from '../Sidebar/Sidebar';

export default function NavBar() {
    const variants = {
        visible: (i)=>( {
            opacity : 1,
            transition :{delay: i*0.3},
        }),
        hidden :{opacity : 0},
    }
    const items = ["Home", "Projects","Contact", "About"]
    return (
        <div className='nav-content flex items-center text-center justify-between font-sans text-white h-14 p-3.5'>
            <Sidebar/>
            <h1 className='logo text-2xl text-center font-bold mr-96'>PORFOLIO</h1>
            <motion.ul initial="hidden" animate="visible" variants={variants} className='flex flex-row items-center justify-between gap-10 mr-5 font-bold text-lg cursor-pointer'>
                {
                    items.map((item, i)=>(
                        <motion.li key={item} custom={i} variants={variants} className='menu-item'>{item}</motion.li>
                    ))  
                }
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Hire me
                    </span>
                </button>
            </motion.ul>
        </div>
    );
};
