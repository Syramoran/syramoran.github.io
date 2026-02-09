import { Code2, Cpu } from "lucide-react"

export default function ProfilePhoto() {
  return (
    <div className="flex-1 flex justify-center items-center p-10">
      <div className="relative group">
        
        {/* Decoración de fondo - Usa tu rosa primario con desenfoque */}
        <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
        
        {/* Contenedor de la foto */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500 shadow-2xl bg-card">
          <img 
            src="/fotosyra.jpg" // Asegúrate de tener tu foto en la carpeta public
            alt="Syra Moran - Desarrollo Web & Ingeniería"
            className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          
          {/* Overlay elegante para modo oscuro/claro */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>

        {/* Badge: Status Coding */}
        <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-2xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 block">
          <div className="flex items-center gap-3 text-primary font-mono text-xs font-bold">
            <Code2 size={18} className="animate-pulse" />
            <span>{`{ status: 'coding' }`}</span>
          </div>
        </div>

        {/* Badge: Proyecto SENTINEL (Tu toque de ingeniería) */}
        <div className="absolute -top-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 block">
          <div className="flex items-center gap-3 text-foreground font-mono text-xs font-medium">
            <Cpu size={18} className="text-primary" />
            <span>Women in STEM</span>
          </div>
        </div>

      </div>
    </div>
  )
}