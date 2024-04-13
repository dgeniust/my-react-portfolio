import { Links } from "./links/Links"
import { ToogleButton } from "./toogleButton/ToogleButton"
import { useState } from "react"
import { motion } from "framer-motion";


export const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open : {
            //clipPath : "circle (1200px at 50px 50px)",
            clipPath : "circle(1200px at 50px 50px)",
            transition : {
                type : "spring",
                stiffness : 20,
            }
        },
        closed : {
            clipPath : "circle(20px at 50px 30px)",
            transition : {
                delay : 0.5,
                type : "spring",
                stiffness : 400,
                damping : 20, 
            },
        },
    }
    return (
        <motion.div className="Sidebar flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
            <motion.div className="bg fixed top-0 left-0 bottom-0 w-96 bg-white z-40" variants={variants}>
                <Links/>
            </motion.div>
            <ToogleButton setOpen={setOpen} />
        </motion.div>
    )
}
