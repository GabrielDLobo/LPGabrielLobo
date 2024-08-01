const Contactme = () => {
  return (
    <div id="ContactSession" className="items-center justify-center ">
        <div className="rounded-lg bg-zinc-900 overflow-hidden shadow-xl z-10 px-6 pt-6 sm:px-6 md:pt-6 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0">
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-center">
                <h2 className="font-bold tracking-tight text-white sm:text-4xl">
                  
                Pronto para transformar sua presença digital em algo incrível?
                </h2>
                
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Conte-me qual a principal dor do seu negócio e vamos discutir como posso ajudar você a superar seus objetivos.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a href="https://api.whatsapp.com/message/LE2H4PMJDG5VH1?autoload=1&app_absent=0" target="_blank">
                Contate-me</a></button>       
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactme
