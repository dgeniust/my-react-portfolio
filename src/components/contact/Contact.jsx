import React, { useRef, useState } from 'react'
import './Contact.css'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';


const items = [
    {
        id : 1,
        name : 'Email',
        content : 'dathiichan141@gmail.com',
    },
    {
        id : 2,
        name : 'Address',
        content : 'Phuoc Long A, District 9',
    },
    {
        id : 3,
        name : 'Phone',
        content : '+84 387 731 823',
    }

]
export default function Contact(){
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(true);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_q2fut8f', 'template_vk8vzv9', formRef.current, {
            publicKey: 'ypkcLezyRQZtc-JAz',
          })
        .then(
            () => {
                setSuccess(true);
            },
            (error) => {
                setError(true);
            },
        );
    };
    const ref = useRef();
    const formRef = useRef();
    const isInView = useInView(ref, {margin: "-100px"});
    const variants = {
        initial: {
            y : 500,
            opacity:0,
        },
        animate :{
            y : 0,
            opacity : 1,
            transition :{
                duration : 0.5 ,
                staggerChildren : 0.1,
            }
        }
    }
    return (
        <div>
            <motion.div className="container relative h-screen" variants = {variants} ref = {ref}>
                <motion.div className="wrapper w-full h-full flex flex-row justify-center items-center " variants = {variants} initial="initial" whileInView="animate">
                    <div className="textContainer text-white h-2/4 w-2/4 flex justify-center items-center">
                        <div className="content flex flex-col gap-7">
                            <h1 className='text-7xl font-bold text-left tracking-wide text-gray-300' variants = {variants}>Let's work <br /> together</h1>
                            {
                                items.map(item =>{
                                    return(
                                        <motion.div key={item.id} className="item text-left" variants = {variants}>
                                            <h2 className='font-bold text-base'>{item.name}</h2>
                                            <p className='text-sm'>{item.content}</p>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="textBoxContainer h-2/4 w-2/4 flex justify-center items-center">
                        <motion.div className="text flex flex-col text-white gap-5 relative"
                            // initial={{opacity:0}} 
                            // whileInView={{opacity:1}}
                            // transition={{delay:4, duration:1,}}  
                        >
                            {/* <motion.div className="rocketSvg stroke-white absolute m-auto" 
                                initial={{opacity:1}} 
                                whileInView={{opacity:0}}
                                transition={{delay:3, duration:1,}}    
                            >
                            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <title>rocket-launch</title> 
                                    <motion.path initial={{pathLength: 0}} animate={isInView && {pathLength: 1}} transition={{duration: 3}} d="M30.748 1.948c-0.026-0.38-0.333-0.68-0.713-0.697l-0.002-0c-6.141-0.269-11.588 2.375-16.457 7.999h-9.576c-0.35 0-0.643 0.239-0.726 0.563l-0.001 0.005-2 8c-0.014 0.054-0.022 0.117-0.022 0.181 0 0.414 0.335 0.75 0.75 0.751h5.302c-0.328 0.628-0.655 1.259-0.977 1.922-0.047 0.096-0.075 0.209-0.075 0.328 0 0.207 0.084 0.395 0.22 0.532l4 4c0.136 0.135 0.323 0.219 0.53 0.219h0c0.124-0 0.24-0.030 0.343-0.082l-0.004 0.002q0.962-0.487 1.911-0.989v5.476c0 0.001 0 0.001 0 0.002 0 0.413 0.335 0.748 0.748 0.748 0.001 0 0.001 0 0.002 0h-0c0.065-0 0.127-0.008 0.187-0.023l-0.006 0.001 8-2c0.329-0.085 0.568-0.379 0.568-0.728v-9.585c5.103-4.212 8.495-9.449 7.998-16.623zM2.961 17.25l1.625-6.5h7.759c-1.463 1.889-2.864 4.014-4.101 6.242l-0.131 0.258zM21.25 27.57l-6.5 1.625v-5.331c2.51-1.373 4.634-2.737 6.658-4.231l-0.158 0.111zM11.146 24.084l-3.236-3.236c6.019-12.18 12.987-18.116 21.274-18.116l0.104 0.001c0.328 10.329-8.441 16.387-18.142 21.352zM23 6.25c-1.519 0-2.75 1.231-2.75 2.75s1.231 2.75 2.75 2.75c1.519 0 2.75-1.231 2.75-2.75v0c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM23 10.25c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25v0c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM4.48 24.252l-0.476-0.002c-0.359 0.072-0.587 0.186-0.701 0.471l-2 5c-0.034 0.082-0.053 0.178-0.053 0.278 0 0.414 0.335 0.75 0.75 0.751h0c0.1-0 0.196-0.020 0.284-0.055l-0.005 0.002 5.004-1.996c0.267-0.11 0.455-0.361 0.471-0.658l0-0.002c0.021-0.404 0.048-0.754 0.071-1.055 0.078-1.006 0.13-1.672-0.33-2.172-0.508-0.551-1.241-0.555-3.014-0.563zM6.329 26.871c-0.015 0.186-0.031 0.389-0.046 0.613l-2.938 1.172 1.161-2.904c0.896 0.004 1.733 0.008 1.85 0.027 0.011 0.125 0.017 0.27 0.017 0.417 0 0.238-0.016 0.472-0.047 0.702l0.003-0.027z">
                                </motion.path>
                             </g></svg>
                            </motion.div> */}
                            <form ref = {formRef}action="" className='flex flex-col text-white gap-5 relative' onSubmit={sendEmail}>
                                <input type="text" placeholder="Name" name="user-name" className='outline-white h-10 bg-inherit border-2 rounded-md p-5'/>
                                <input type="text" placeholder="Email" name="user-email" className='outline-white h-10 bg-inherit border-2 rounded-md p-5'/>
                                <textarea type="text" placeholder="Message" name="user-message" className='outline-white h-64 p-5 bg-inherit border-2 rounded-md'/>
                                <button className='p-2 rounded-md bg-orange-400 text-black hover:bg-orange-500 hover:text-white'>Submit</button>
                                {error && "Error"}
                                {success && "Success"}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
