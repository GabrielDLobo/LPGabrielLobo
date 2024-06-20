import { SiSelenium } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: { x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}});

const Automacoes = () => {
  return (
  <div className="border-b border-neutral-900 pb-24 bg-inherit">
    <motion.h1 variants={container(1.0)} initial= "hidden" animate="visible" className='my-20 text-center text-4xl'>Automação Robótica de Processos - RPA</motion.h1>
      <motion.div variants={container(1.5)} initial= "hidden" animate="visible" className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className="rounded-2xl border-4 border-neutral-100 p-4">
           <SiSelenium className='text-7xl text-seleniumicon'/>
           <h1 className='text-center'>Selenium</h1>
        </motion.div>

        <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className="rounded-2xl border-4 border-neutral-100 p-4">
           <IoHome className='text-7xl text-pyautoguiicon'/>
           <h1 className='text-center'>PyAutoGUI</h1>
        </motion.div>

      </motion.div>
  </div>
  )
}

export default Automacoes
