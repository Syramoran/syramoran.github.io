import { Code2, Cpu } from "lucide-react"

export default function ProfilePhoto() {
  return (
    // Reducimos un poco el padding lateral para que la foto tenga espacio de crecer
    <div className="flex-1 flex justify-center items-center p-4 md:p-8">
      <div className="relative group">
        
        {/* Decoración de fondo - Más amplia para la nueva escala */}
        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
        
        {/* Contenedor de la foto: Aumentamos de 80 a 112 (o medida custom) */}
        <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[3rem] overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500 shadow-2xl bg-card">
          <img 
            src="/fotosyra.jpg" 
            alt="Syra Moran - Desarrollo Web & Ingeniería"
            className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>

        {/* Badge: Status Coding - Ajustado el tamaño y posición */}
        <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-card border border-border p-3 md:p-5 rounded-2xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 block z-10">
          <div className="flex items-center gap-3 text-primary font-mono text-xs md:text-sm font-bold">
            <Code2 size={20} className="animate-pulse" />
            <span>{`{ status: 'coding' }`}</span>
          </div>
        </div>

        {/* Badge: Women in STEM - Ajustado el tamaño y posición */}
        <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-card border border-border p-3 md:p-5 rounded-2xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 block z-10">
          <div className="flex items-center gap-3 text-foreground font-mono text-xs md:text-sm font-medium">
            <Cpu size={20} className="text-primary" />
            <span>Women in STEM</span>
          </div>
        </div>

      </div>
    </div>
  )
}