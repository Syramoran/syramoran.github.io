import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ArrowRight, ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

// Definimos la interfaz para que TypeScript no se queje
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
  content: React.ReactNode; // ReactNode permite JSX, strings, null, etc.
}

const Blog = () => {

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

const blogContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedPost && blogContainerRef.current) {
      blogContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedPost]);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Por qué tu PyME pierde ventas por una web lenta",
      excerpt: "La velocidad no es solo UX, es facturación. Analizamos cómo los Core Web Vitals afectan directamente a tu ROI.",
      date: "12 Feb 2026",
      readTime: "4 min",
      category: "Tech Business",
      link: "#",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-[var(--foreground)]">
            ¿Sabías que Amazon calculó que por cada 100ms de retraso en la carga de su web, pierden un 1% en ventas? Para una PyME, el impacto es aún mayor porque la confianza del usuario es más frágil.
          </p>
          <h3 className="text-2xl font-bold mb-4 mt-8 text-[var(--foreground)]">Los Core Web Vitals no son opcionales</h3>
          <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
            Google ya no solo mira palabras clave. Mira experiencia. Si tu LCP (Largest Contentful Paint) tarda más de 2.5 segundos, tu posicionamiento cae y tus usuarios se van a la competencia.
          </p>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic my-8 text-xl font-medium text-[var(--foreground)] bg-[var(--primary)]/5 p-4 rounded-r-lg">
            "La optimización técnica no es un gasto, es la base de tu embudo de conversión."
          </blockquote>
          <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
            En mis auditorías técnicas, lo primero que reviso es el peso de las imágenes y la ejecución de JavaScript innecesario. Reducir el tamaño del bundle de React puede significar un aumento del 20% en la tasa de conversión móvil.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "IoT en la Industria: Del ESP32 a la Nube",
      excerpt: "Cómo estoy construyendo Sentinel para prevenir fallas críticas en maquinaria usando microcontroladores económicos.",
      date: "28 Ene 2026",
      readTime: "6 min",
      category: "Engineering",
      link: "#",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-[var(--foreground)]">
            La industria 4.0 suena cara, pero no tiene por qué serlo. Con el proyecto Sentinel, estoy demostrando que se puede hacer mantenimiento predictivo de alta calidad usando hardware accesible.
          </p>
          <h3 className="text-2xl font-bold mb-4 mt-8 text-[var(--foreground)]">La arquitectura de Sentinel</h3>
          <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
            Utilizo un ESP32 como cerebro local para leer sensores de temperatura y vibración. Estos datos se procesan en el borde (Edge Computing) y solo se envían las anomalías a la nube vía MQTT.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--muted-foreground)] marker:text-[var(--primary)]">
            <li><strong>Hardware:</strong> ESP32 WROOM + Sensores DS18B20.</li>
            <li><strong>Protocolo:</strong> MQTT sobre WiFi/LoRa.</li>
            <li><strong>Backend:</strong> Node.js + InfluxDB para series temporales.</li>
          </ul>
          <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
            Esto permite a las PyMEs industriales de Paraná tener un dashboard en tiempo real sin invertir miles de dólares en PLCs importados.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "API de Conversiones de Meta: Guía Técnica",
      excerpt: "El Píxel ya no alcanza. Aprendé a configurar la CAPI para no perder ni un solo dato de tus campañas publicitarias.",
      date: "15 Ene 2026",
      readTime: "5 min",
      category: "Marketing Dev",
      link: "#",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-[var(--foreground)]">
            Con el fin de las cookies de terceros y las actualizaciones de iOS, el Píxel de Meta ha perdido cerca del 30% de su eficacia. Si solo dependés del navegador, estás volando a ciegas.
          </p>
          <h3 className="text-2xl font-bold mb-4 mt-8 text-[var(--foreground)]">Server-Side Tracking</h3>
          <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
            La API de Conversiones (CAPI) permite enviar eventos directamente desde tu servidor al de Facebook, bypasseando bloqueadores de anuncios y restricciones del navegador.
          </p>
          <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
            Implementar esto requiere conocimientos de backend, pero asegura que tus campañas de ROAS se alimenten con datos reales y no con estimaciones. Es la diferencia entre gastar presupuesto e invertirlo.
          </p>
        </>
      )
    }
  ];


  if (selectedPost) {
    return (
      <>
        <div ref={blogContainerRef} className="min-h-screen bg-[var(--background)] py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedPost(null)}
              className="group flex items-center gap-2 text-sm font-bold text-[var(--muted-foreground)] hover:text-[var(--primary)] mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Volver
            </button>

            <header className="mb-10">
              <div className="flex flex-wrap gap-4 items-center text-sm text-[var(--muted-foreground)] mb-6">
                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-bold uppercase text-xs tracking-wider">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime} lectura</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight mb-8">
                {selectedPost.title}
              </h1>

              <div className="border-b border-[var(--border)] w-full mb-8"></div>
            </header>

            <article className="prose prose-lg max-w-none text-[var(--muted-foreground)]">
              {selectedPost.content}
            </article>

            {/* <div className="mt-16 pt-8 border-t border-[var(--border)] flex justify-between items-center">
               <div className="flex gap-2">
                 <span className="text-sm font-bold text-[var(--foreground)]">Etiquetas:</span>
                 <span className="text-sm text-[var(--muted-foreground)]">Tecnología, Negocios, Estrategia</span>
               </div>
               <button className="flex items-center gap-2 text-[var(--primary)] font-bold hover:underline">
                 <Share2 size={18} /> Compartir nota
               </button>
            </div> */}

            <div className="mt-12 p-8 bg-[var(--card)] border border-[var(--primary)]/20 rounded-2xl text-center">
              <h4 className="text-xl font-bold mb-2 text-[var(--foreground)]">¿Necesitás ayuda con esto?</h4>
              <p className="text-[var(--muted-foreground)] mb-6">Transformo estos conceptos técnicos en resultados para tu empresa.</p>
              <a 
              href="https://wa.me/3435083034"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:opacity-90 text-primary-foreground px-6 py-4 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Agendar consultoría
            </a>
            </div>
            <button 
              onClick={() => setSelectedPost(null)}
              className="group flex items-center gap-2 text-sm font-bold text-[var(--muted-foreground)] hover:text-[var(--primary)] my-8 transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Volver
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section id="blog" className="py-12 px-6 border-t border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
          
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="text-[var(--primary)]" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col group h-full bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                <div className="mb-4">
                  <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mt-1">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                  <button onClick={() => setSelectedPost(post)} className="text-left">
                    {post.title}
                  </button>
                </h3>

                <p className="text-sm text-[var(--muted-foreground)] mb-4 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)] group-hover:gap-3 transition-all mt-auto cursor-pointer"
                >
                  Leer artículo <ArrowRight size={16} className="text-[var(--primary)]" />
                </button>
                
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;