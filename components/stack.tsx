import { 
  Database, 
  Code2, 
  Layers, 
  Palette, 
  Sparkles, 
  Terminal,
  Cpu
} from "lucide-react"

import { 
  SiReact, 
  SiAngular, 
  SiNextdotjs, 
  SiNestjs, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiFigma, 
  SiTailwindcss, 
  SiGit, 
  SiAdobe 
} from "react-icons/si"

export default function Stack() {
  const stack = [
    {
      category: "Frameworks",
      icon: Layers,
      items: [
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Angular", icon: SiAngular, color: "text-red-600" },
        { name: "Nest", icon: SiNestjs, color: "text-red-500" },
      ],
    },
    {
      category: "Lenguajes",
      icon: Code2,
      items: [
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Python", icon: SiPython, color: "text-blue-500" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      ],
    },
    {
      category: "Bases de Datos",
      icon: Database,
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      ],
    },
    {
      category: "Herramientas",
      icon: Palette,
      items: [
        { name: "Figma", icon: SiFigma, color: "text-pink-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "Adobe Suite", icon: SiAdobe, color: "text-red-600" },
      ],
    },
  ]

  return (
    <section id="stack" className="py-10 px-4 sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Mi <span className="font-cursive text-4xl text-primary">stack</span> técnico
        </h2>
        <div className="h-1 w-24 bg-primary mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <category.icon size={24} />
                </div>
                <h3 className="font-mono font-bold text-lg text-foreground">{category.category}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="group cursor-pointer">
                    <div className="bg-card border border-border/50 hover:border-primary/50 rounded-lg p-3 px-6 flex items-center justify-between gap-3 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-md">
                      
                      <p className="text-foreground font-semibold text-sm font-sans group-hover:text-primary transition-colors">
                        {item.name}
                      </p>
                      
                      {/* Icono de la tecnología con su color de marca */}
                      <item.icon className={`text-2xl ${item.color} transition-colors`} />
                      
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skill highlights */}
        {/* <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Especialidades
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { skill: "Full Stack Development", desc: "Frontend + Backend" },
              { skill: "Responsive Design", desc: "Mobile-first approach" },
              { skill: "UX/UI Integration", desc: "Design & Code" },
            ].map((item) => (
              <div
                key={item.skill}
                className="texture-dots p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-bold text-foreground text-sm">{item.skill}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
