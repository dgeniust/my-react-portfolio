import { motion } from "framer-motion"

const variants = {
  open : {
    transition : {
      staggerChildren : 0.15,
    },
  },
  closed :{
    transition : {
      staggerChildren : 0.05,
      staggerDirection : -1,
    }
  },
}
const itemVariants = {
  open : {
    y : 0,
    opacity : 1,
  },
  closed : {
    y : 100,
    opacity : 0,
  }
}
export const Links = () => {

  const items = ["Home", "Project", "About", "Contact" ]
  return (
    <motion.div className="links absolute w-full	h-full flex flex-col items-center justify-center gap-5 text-2xl" variants={variants}>
      {
        items.map((item)=> (
          <motion.a className="hover:text-3xl" key={item} href={`#${item}`} variants={itemVariants}>{item}</motion.a>
        ))
      }
    </motion.div>
  )
}
