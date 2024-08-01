import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
<footer class="bg-black rounded-md">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center">© 2024 <a href="#" class="hover:underline">Gabriel Lobo</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} href="https://www.linkedin.com/in/gabrieldlobo/" target="_blank"><FaLinkedin /></motion.a>
        <motion.a className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} href="https://github.com/GabrielDLobo" target="_blank"><FaGithub /></motion.a>
        <motion.a className="box" whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} href="https://api.whatsapp.com/message/LE2H4PMJDG5VH1?autoload=1&app_absent=0" target="_blank"><FaWhatsapp /></motion.a>
        </div>
          </div>
      </div>
    </div>
</footer>
  )
}

export default Footer
