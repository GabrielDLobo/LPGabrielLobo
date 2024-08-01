import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: { x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h1 variants={container(1.0)} initial= "hidden" animate="visible" className='my-20 text-center text-4xl'>Tecnologias</motion.h1>
        <motion.div variants={container(1.5)} initial= "hidden" animate="visible" className='flex flex-wrap items-center justify-center gap-4'>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <FaHtml5 className='text-7xl text-html5icon' />
            <h1 className='text-center'>HTML5</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className= 'rounded-2xl border-4 border-neutral-100 p-4'>
            <FaCss3Alt className='text-7xl text-css3icon' />
            <h1 className='text-center'>CSS3</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <BiLogoJavascript className='text-7xl text-javascripticon' />
            <h1 className='text-center'>JavaScript</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <SiTypescript className='text-7xl text-typescripticon' />
            <h1 className='text-center'>TypeScript</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <FaReact className='text-7xl text-cyan-400' />
            <h1 className='text-center'>React</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <SiTailwindcss className='text-7xl text-tailwindcss' />
            <h1 className='text-center'>TailwindCSS</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <FaSass className='text-7xl text-sassicon' />
            <h1 className='text-center'>SASS</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <FaPython className='text-7xl text-pythonicon' />
            <h1 className='text-center'>Python</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <DiDjango className='text-7xl text-djangoicon' />
            <h1 className='text-center'>Django</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <FaNodeJs className='text-7xl text-nodejsicon' />
            <h1 className='text-center'>NodeJS</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <SiMysql className='text-7xl text-mysqlicon' />
            <h1 className='text-center'>SQL/mySQL</h1>
          </motion.div>

          <motion.div className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className='rounded-2xl border-4 border-neutral-100 p-4'>
            <FaGithub className='text-7xl text-githubicon' />
            <h1 className='text-center'>Git/Github</h1>
          </motion.div>

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

export default Technologies
