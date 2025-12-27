export default function About() {
  const education = [
    {
      title: "Técnica en Desarrollo Web",
      institution: "UNER - FCAD",
      details: "Graduada en 2025",
    },
    {
      title: "Inglés B1",
      institution: "UBA & English Academy",
      details: "Curso para desarrolladores",
    },
    {
      title: "Marketing Digital",
      institution: "Luzzi, Juliana Comunidad",
      details: "Cursos especializados",
    },
  ]

  return (
    <section id="about" className="py-4 px-4 sm:px-6 lg:px-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Estudios 
        </h2>
        <div className="h-1 w-24 bg-primary rounded-full mb-8"></div>

        {/* <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          Soy una desarrolladora web apasionada por crear soluciones digitales que combinen estética y funcionalidad. Mi
          trayectoria incluye experiencia en desarrollo web, marketing digital y diseño de interfaces. Me encanta
          trabajar en la intersección entre diseño y desarrollo, garantizando que cada proyecto sea tanto hermoso como
          técnicamente sólido.
        </p> */}

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-card/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-mono font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
              <p className="text-xs text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
