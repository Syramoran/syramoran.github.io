import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "Borgert",
      description:
        "Sitio web corporativo para empresa de aberturas de aluminio con catálogo de productos.",
      technologies: ["Angular", "TypeScript"],
      link: "https://borgert.vercel.app/",
      github: "#",
      gradient: "/webborgert.png",
    },
    {
      name: "Bellafarma",
      description:
        "Plataforma para farmacia online con productos, promociones y formulario de contacto.",
      technologies: ["React", "Tailwind"],
      link: "https://farmaciabellafarma.com.ar/",
      github: "#",
      gradient: "/webbellafarma.png",
    },
    {
      name: "Bajo Cero",
      description: "Sitio web para empresa de refrigeración.",
      technologies: ["Angular", "TypeScript", "Swiper"],
      link: "https://bajocerosoluciones.com/",
      github: "#",
      gradient: "/webbajocero.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          <span className="font-cursive text-5xl text-primary">Proyectos</span> principales
        </h2>
        <div className="h-1 w-24 bg-primary mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="texture-grain bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:shadow-lg flex flex-col h-full"
            >
              {/* Gradient header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.gradient} // La ruta de tu imagen
                  alt={`Captura de pantalla del proyecto ${project.name}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Si necesitas un overlay, añádelo aquí */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-mono font-bold text-lg text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/15 text-primary text-xs rounded font-mono border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-primary hover:text-accent transition-colors flex items-center gap-1 text-sm font-mono font-semibold"
                  >
                    Ver <ExternalLink size={14} />
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
