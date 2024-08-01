import { ABOUT_TEXTMISSAO, ABOUT_TEXTVISAO, ABOUT_TEXTVALORES, ABOUT_TEXTCONFIAVEIS, ABOUT_TEXTATUALIZADO, ABOUT_TEXTCOLABORACAO, ABOUT_TEXTFEEDBACK } from "../constants";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: { x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}});
const About = () => {
  return (
    <div id="SobreSection" className="border-b border-neutral-900 pb-4 "> {/* Configurações Div geral e título da seção */}
        <motion.h1 variants={container(1)} initial= "hidden" animate="visible" className="my-20 text-center text-4xl">Minha
            <span className="text-neutral-500"> missão
            </span>
        </motion.h1>

        <motion.div variants={container(1.5)} initial= "hidden" animate="visible" className="flex flex-wrap"> {/* Sub Div geral */}
            <div className="w-full lg:w-1/2 lg:p-8 sm:my-6"> {/* Div Missão */}
                <div className=" flex-items-center justfy-center ">
                    <h1 className="bg-gradient-to-r from-neutral-600 via-slate-50 to-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent font-normal">Atender às necessidades reais dos clientes</h1>
                        <span>{ABOUT_TEXTMISSAO}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8 sm:my-6"> {/* Div Visão */}
                <div className=" flex-items-center justify-center">
                    <h1 className="bg-gradient-to-r from-neutral-600 via-slate-50 to-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent font-normal">Criar projetos que sejam intuitivos e atraentes</h1>
                        <span>{ABOUT_TEXTVISAO}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8 sm:my-6"> {/* Div colaboração */}
                <div className=" flex-items-center justify-center">
                    <h1 className="bg-gradient-to-r from-neutral-600 via-slate-50 to-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent font-normal">Colaboração com outros desenvolvedores</h1>
                        <span>{ABOUT_TEXTCOLABORACAO}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8 sm:my-6"> {/* Div confiabilidade */}
                <div className=" flex-items-center justify-center">
                    <h1 className="bg-gradient-to-r from-neutral-600 via-slate-50 to-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent font-normal">Ser confiáveis e seguros</h1>
                        <span>{ABOUT_TEXTCONFIAVEIS}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8 sm:my-6"> {/* Div feedbacks */}
                <div className=" flex-items-center justify-center">
                    <h1 className="bg-gradient-to-r from-neutral-600 via-slate-50 to-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent font-normal">Buscar feedback dos clientes</h1>
                        <span>{ABOUT_TEXTFEEDBACK}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8 sm:my-6"> {/* Div mantenho-me atualizado */}
                <div className=" flex-items-center justify-center">
                    <h1 className="bg-gradient-to-r from-neutral-600 via-slate-50 to-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent font-normal">Manter-me atualizado com as últimas tecnologias</h1>
                        <span>{ABOUT_TEXTATUALIZADO}</span>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About
