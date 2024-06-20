import Logo from "../assets/GldLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"

const Navbar = () => {
    return (
    <nav className="bg-transparent mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={Logo} alt="Logo"></img>
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