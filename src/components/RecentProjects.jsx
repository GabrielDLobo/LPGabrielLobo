import imgprogramacao from '../assets/imgprogramacao.jpg'
import ProgramacaoFundo from '../assets/ProgramacaoFundo.jpg'
import RPAImage from '../assets/RPAImage.png'
import { FaGithub } from "react-icons/fa";
import { FaChrome } from 'react-icons/fa';
import {ecommercedes, landingpageumbandades, landingpagerpades } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: { x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}});

const RecentProjects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 variants={container(1.0)} initial= "hidden" animate="visible" className="my-20 text-center text-4xl">Projetos</motion.h1>
      <div className="flex flex-wrap items-center justify-center pt-16 pb-10 sm:pt-16 lg:pb-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-xl bg-black overflow-hidden shadow-xl z-10">
            <a href="/" className="group col-span-3:">
            <img src={imgprogramacao} alt="imagem eCommerce" className="h-52 w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"/></a>
          
          <div className="p-4">
            <h2 className="text-gray-200"> Projeto eCommerce</h2>
            <p className="text-gray-400 text-left">{ecommercedes}</p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a className="cursor-pointer" href="#"><FaGithub className="w-[35px] h-auto"/></a>
            <a className="cursor-pointer" href="#"><FaChrome className="w-[35px] h-auto"/></a>
          </div>
          </div>

          <div className="rounded-xl bg-black overflow-hidden shadow-xl z-10">
            <a href="/" className="group col-span-3:">
            <img src={ProgramacaoFundo} alt="imagem Landing Page Umbanda" className="h-52 w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"/></a>
          
          <div className="p-4">
            <h2 className="text-gray-200"> Landing Page Umbanda</h2>
            <p className="text-gray-400 text-left" >{landingpageumbandades}</p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a className="cursor-pointer" href="#"><FaGithub className="w-[35px] h-auto"/></a>
            <a className="cursor-pointer" href="#"><FaChrome className="w-[35px] h-auto"/></a>
          </div>
          </div>

          <div className="rounded-xl bg-black overflow-hidden shadow-xl z-10">
            <a href="/" className="group col-span-3:">
            <img src={RPAImage} alt="imagem Landing Page Empresa RPA" className="h-52 w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"/></a>
          
          <div className="p-4">
            <h2 className="text-gray-200"> Landing Page Empresa RPA</h2>
            <p className="text-gray-400 text-left">{landingpagerpades}</p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a className="cursor-pointer" href="#"><FaGithub className="w-[35px] h-auto"/></a>
            <a className="cursor-pointer" href="#"><FaChrome className="w-[35px] h-auto"/></a>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecentProjects
