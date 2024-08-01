import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import RecentProjects from "./components/RecentProjects";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">     {/* Div para definir as cores dos itens quando clicamos/selecionamos na página inteira*/}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1d4ed8_100%)]"></div> {/* Div para definir a cor do plano de fundo da página inteira */}
      </div>

        <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <RecentProjects />
        <Contactme />
        <Footer />
        </div>
    </div>
  )
}

export default App
