import Logo from "../assets/GldLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"

const Navbar = () => {
    return (
    <nav id = "NavSection" className="bg-transparent mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <img src={Logo} alt="Logo"></img>
        </div>

        <div class="items-center justify-center hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent">
            <li>
                <a href="#NavSection" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#SobreSection" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
            </li>
            <li>
                <a href="#ProjectsSession" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projetos</a>
            </li>
            <li>
                <a href="#ContactSession" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contato</a>
            </li>
            </ul>
        </div>
  
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} href="https://www.linkedin.com/in/gabrieldlobo/" target="_blank"><FaLinkedin /></motion.a>
        <motion.a className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} href="https://github.com/GabrielDLobo" target="_blank"><FaGithub /></motion.a>
        <motion.a className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} href="https://api.whatsapp.com/message/LE2H4PMJDG5VH1?autoload=1&app_absent=0" target="_blank"><FaWhatsapp /></motion.a>
        </div>
    </nav>
    )
}

export default Navbar;