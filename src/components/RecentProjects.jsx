import ImgPortfolioProjectWithJavascript from '../assets/ImgPortfolioProjectWithJavascript.jpg'
import ImgPortfolioProjectWithTypescript from '../assets/ImgPortfolioProjectWithTypescript.png'
import ImgPortfolioPessoal from '../assets/ImgPortfolioPessoalGabrielLobo.jpg';
import { FaGithub } from "react-icons/fa";
import { FaChrome } from 'react-icons/fa';
import {ecommercedesjs, ecommercedests, landingpagerjs } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: { x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}});

const RecentProjects = () => {
  return (
    <div id="ProjectsSession" className="border-b border-neutral-900 pb-24">
      <motion.h1 variants={container(1.0)} initial= "hidden" animate="visible" className="my-20 text-center text-4xl">Projetos</motion.h1>
      <div className="flex flex-wrap items-center justify-center pt-16 pb-10 sm:pt-16 lg:pb-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-xl bg-black overflow-hidden shadow-xl z-10">
            <a href="https://github.com/GabrielDLobo/ECommerceWithJAVASCRIPT" target="_blank" className="group col-span-3:">
            <img src={ImgPortfolioProjectWithJavascript} alt="imagem eCommerce" className="h-52 w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"/></a>
          
          <div className="p-4">
            <h2 className="text-gray-200"> Projeto eCommerce com JavaScript</h2>
            <p className="text-gray-400 text-left">{ecommercedesjs}</p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a className="cursor-pointer" href="https://github.com/GabrielDLobo/ECommerceWithJAVASCRIPT" target="_blank"><FaGithub className="w-[35px] h-auto"/></a>
            <a className="cursor-pointer" href="#" target="_blank"><FaChrome className="w-[35px] h-auto"/></a>
          </div>
          </div>

          <div className="rounded-xl bg-black overflow-hidden shadow-xl z-10">
            <a href="https://github.com/GabrielDLobo/ECommerceWithTYPESCRIPT" target="_blank" className="group col-span-3:">
            <img src={ImgPortfolioProjectWithTypescript} alt="imagem Landing Page Umbanda" className="h-52 w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"/></a>
          
          <div className="p-4">
            <h2 className="text-gray-200"> Projeto eCommerce com TypeScript</h2>
            <p className="text-gray-400 text-left" >{ecommercedests}</p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a className="cursor-pointer" href="https://github.com/GabrielDLobo/ECommerceWithTYPESCRIPT" target="_blank"><FaGithub className="w-[35px] h-auto"/></a>
            <a className="cursor-pointer" href="#https://github.com/GabrielDLobo/ECommerceWithTYPESCRIPT" target="_blank"><FaChrome className="w-[35px] h-auto"/></a>
          </div>
          </div>

          <div className="rounded-xl bg-black overflow-hidden shadow-xl z-10">
            <a href="https://github.com/GabrielDLobo/LPGabrielLobo" target="_blank" className="group col-span-3:">
            <img src={ImgPortfolioPessoal} alt="imagem Landing Page Empresa RPA" className="h-52 w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"/></a>
          
          <div className="p-4">
            <h2 className="text-gray-200"> Portfólio pessoal</h2>
            <p className="text-gray-400 text-left">{landingpagerjs}</p>
          </div>

          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a className="cursor-pointer" href="https://github.com/GabrielDLobo/LPGabrielLobo" target="_blank"><FaGithub className="w-[35px] h-auto"/></a>
            <a className="cursor-pointer" href="https://github.com/GabrielDLobo/LPGabrielLobo" target="_blank"><FaChrome className="w-[35px] h-auto"/></a>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecentProjects
