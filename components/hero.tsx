import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-20 w-full ">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div className="flex justify-center ">
          
          {/* Contenedor con el marco y el borde */}
          <div className="relative w-72 z-20 md:w-96 rounded-lg transition-colors">
            <img
              src="/fotocv.png"
              alt="Foto de perfil de Syra Moran"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Right side - Photo placeholder with texture */}
        

        <div className="space-y-6 flex items-center flex-col text-center md:items-start md:flex-col md:text-start">
          <div className="flex items-center flex-col text-center md:items-start md:flex-col md:text-start">
            <p className="text-primary font-mono font-bold text-sm mb-2">// bienvenido a mi portfolio</p>
            <h1 className="text-6xl/14  md:text-7xl/16 font-bold font-cursive text-foreground">
              Syra
              <br />
              <span className="font-mono text-5xl md:text-6xl text-primary">Moran</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Desarrolladora web con experiencia en marketing digital y diseño. Enamorada de la tecnología y su poder de cambiar el mundo.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group shadow-md hover:shadow-lg cursor-pointer border-2 border-transparent"
            >
              Ver proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv.pdf"               // Asegúrate de que el archivo se llame así en la carpeta public
              download="Syra_Moran_CV.pdf" // Nombre sugerido al descargar
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-mono font-semibold hover:bg-primary/10 transition-colors cursor-pointer flex items-center"
            >
              Descargar CV
            </a>
          </div>

          {/* Location and Languages */}
        </div>
      </div>
    </section>
  )
}
