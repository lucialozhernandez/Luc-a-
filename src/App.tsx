/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Scale, 
  UserRound, 
  Briefcase, 
  FileText, 
  ShieldCheck, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  MessageSquare,
  CheckCircle2,
  Clock,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Litigación Laboral",
      icon: <Scale className="w-6 h-6" />,
      description: "Sólida base técnica en la gestión de extinciones de contrato, despidos disciplinarios y objetivos, con enfoque en la protección de derechos fundamentales."
    },
    {
      title: "Derecho Retributivo",
      icon: <Zap className="w-6 h-6" />,
      description: "Conocimiento profundo en reclamaciones de cantidad, auditoría de salarios impagados, horas extra y complementos salariales derivados de convenios."
    },
    {
      title: "Relaciones Colectivas",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Estudio y seguimiento de conflictos colectivos, modificaciones sustanciales de condiciones de trabajo y procedimientos ante el SMAC."
    },
    {
      title: "Asesoría Corporativa",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Visión integral de la asesoría jurídica de empresa, aportando soluciones estratégicas alineadas con la normativa vigente y los objetivos del negocio."
    },
    {
      title: "Técnica Documental",
      icon: <FileText className="w-6 h-6" />,
      description: "Capacidad avanzada en la redacción de demandas, recursos, contratos y cualquier documento jurídico con rigor, precisión y claridad expositiva."
    }
  ];

  const valueProps = [
    { text: "Atención personalizada", icon: <UserRound className="w-5 h-5" /> },
    { text: "Comunicación clara y directa", icon: <MessageSquare className="w-5 h-5" /> },
    { text: "Implicación en cada caso", icon: <ShieldCheck className="w-5 h-5" /> },
    { text: "Enfoque práctico y realista", icon: <CheckCircle2 className="w-5 h-5" /> }
  ];

  const whyMe = [
    { title: "Formación Jurídica Actualizada", description: "Máster de Acceso a la Abogacía y Asesoría Jurídica de Empresa.", icon: <Clock className="w-5 h-5" /> },
    { title: "Enfoque dinámico", description: "Experiencia práctica adquirida durante mi etapa formativa con enfoque en litigación laboral.", icon: <Scale className="w-5 h-5" /> },
    { title: "Cercanía y Confianza", description: "Trato directo sin barreras técnicas, priorizando la comprensión del cliente.", icon: <UserRound className="w-5 h-5" /> },
    { title: "Compromiso Total", description: "Dedicación exclusiva a la resolución eficiente de cada conflicto planteado.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen font-sans bg-brand-bg relative overflow-x-hidden">
      {/* Background Ornaments */}
      <div className="fixed top-[15%] -right-[10%] w-[500px] h-[500px] border border-brand-accent/10 rounded-full pointer-events-none z-0"></div>
      <div className="fixed -bottom-[10%] -left-[5%] w-[400px] h-[400px] border border-brand-accent/5 rounded-full pointer-events-none z-0"></div>
      
      {/* Side Label */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 vertical-text z-40 hidden xl:block">
        <span className="text-[10px] uppercase tracking-[0.6em] text-brand-ink/20 font-bold select-none whitespace-nowrap">
          ESPECIALISTA EN DERECHO LABORAL • ABOGADA
        </span>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 px-6 py-6 lg:px-24 ${
          scrolled ? "glass py-4 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-brand-ink" : "text-brand-ink"}`}>
              Lucía Loza
            </span>
            <div className="h-px bg-brand-accent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center text-[10px] font-bold uppercase tracking-[0.25em]">
            {["Inicio", "Perfil", "Competencias", "Contacto"].map((item, idx) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="hover:text-brand-accent transition-colors relative group"
              >
                <span className="text-brand-accent/40 mr-2 font-serif italic normal-case tracking-normal">0{idx + 1}</span>
                {item}
              </a>
            ))}
            <a 
              href="#contacto" 
              className="px-6 py-2 bg-brand-ink text-brand-bg text-[10px] tracking-widest hover:bg-brand-accent transition-all duration-500"
            >
              CONTACTAR
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-ink" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-brand-bg text-brand-ink flex flex-col items-center justify-center space-y-12 text-3xl font-serif z-40"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            {["Inicio", "Perfil", "Competencias", "Contacto"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:italic hover:text-brand-accent transition-all"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center bg-brand-bg pt-20">
        <div className="section-padding relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Junior Talent • Jurista en Formación</span>
            <h1 className="text-6xl md:text-8xl leading-[1.05] mb-10 font-medium text-brand-ink tracking-tight">
              Excelencia técnica <br/>
              y visión jurídica <br/>
              <span className="italic font-normal text-brand-accent">especializada.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-lg font-light leading-relaxed">
              Graduada en Derecho con especialización en Asesoría Jurídica de Empresa. En busca de una oportunidad para aportar rigor, dinamismo y compromiso en el área de Derecho Laboral.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#perfil" className="btn-primary text-center">
                Ver Perfil Profesional
              </a>
              <a href="#contacto" className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] group">
                <span className="w-12 h-px bg-brand-ink group-hover:w-16 group-hover:bg-brand-accent transition-all duration-500"></span>
                Propuesta de Colaboración
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[3/4] relative z-10 overflow-hidden shadow-2xl bg-brand-ink/5 border border-brand-accent/20 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-ink/20 font-bold">L.L.H.</span>
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full border border-brand-accent/20 -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section -> Now Competencies */}
      <section id="competencias" className="section-padding bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Áreas de Enfoque Académico</span>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight">Especialización Laboral</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs font-light italic">
              Conocimiento actualizado de la jurisdicción social y dinámicas corporativas.
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-ink/5"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="p-12 md:p-16 bg-white hover:bg-brand-bg transition-all duration-700 group hover:z-10"
              >
                <div className="text-brand-accent mb-12 flex justify-between items-center">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-brand-ink/10 tracking-widest uppercase">0{index + 1}</span>
                </div>
                <h3 className="text-2xl mb-6 font-medium tracking-tight text-brand-ink uppercase text-sm font-bold tracking-widest">{service.title}</h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="h-px bg-brand-ink/10 w-8 group-hover:w-full transition-all duration-1000 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section -> Now Perfil */}
      <section id="perfil" className="section-padding bg-brand-bg relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-brand-ink overflow-hidden border-[15px] border-white shadow-xl flex items-center justify-center">
              <span className="text-white/10 text-6xl font-serif italic">L.L.</span>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-accent text-white p-8 hidden md:block">
              <span className="block text-4xl font-serif italic mb-2">Talento</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 text-right">Potencial Junior</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Trayectoria Académica</span>
            <h2 className="text-5xl md:text-6xl mb-12 leading-tight tracking-tight">Lucía Loza Hernández</h2>
            
            <div className="space-y-8 text-slate-600 font-light leading-relaxed">
              <p className="text-xl text-brand-ink italic font-serif">
                "Mi objetivo es integrarme en un equipo jurídico de primer nivel para aportar mi rigor analítico, proactividad y sólida formación técnica."
              </p>
              <p>
                Graduada en Derecho y actualmente cursando el Doble Máster de Acceso a la Abogacía y la Procura junto con un Máster en Asesoría Jurídica de Empresa. Mi formación se ha diseñado para cubrir las necesidades más complejas del entorno laboral corporativo.
              </p>
              <p>
                Como recién graduada con una visión fresca y actualizada del Derecho Laboral, mi objetivo es ofrecer una defensa técnica de vanguardia. Cuento con experiencia práctica inicial donde he demostrado capacidad de redacción técnica, investigación jurisprudencial y apoyo en litigación.
              </p>

              <div className="pt-6">
                <a 
                  href="https://www.linkedin.com/in/luc%C3%ADa-loza-hern%C3%A1ndez/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent hover:text-brand-ink transition-all group"
                >
                  <span className="w-8 h-px bg-brand-accent group-hover:w-12 transition-all"></span>
                  Perfil Completo en LinkedIn
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-brand-ink/5">
              <div>
                <span className="block text-3xl font-serif mb-2 text-brand-accent italic">100%</span>
                <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Dedicación</span>
              </div>
              <div>
                <span className="block text-3xl font-serif mb-2 text-brand-accent italic">24h</span>
                <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Respuesta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me - Luxury Grid */}
      <section className="section-padding bg-brand-ink text-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Valor Diferencial</span>
            <h2 className="text-5xl md:text-6xl font-light text-brand-white">¿Por qué confiar en <br/><span className="italic font-serif">nuestra visión?</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {whyMe.map((item, i) => (
              <div key={i} className="flex flex-col h-full border-l border-brand-white/10 pl-8 py-4">
                <span className="text-brand-accent font-serif italic mb-10 block text-2xl">0{i+1}</span>
                <h4 className="text-lg mb-6 font-medium text-brand-white tracking-widest uppercase text-xs">{item.title}</h4>
                <p className="text-white/40 font-light text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-0 px-6 md:px-0">
        <div className="max-w-6xl mx-auto -mb-32 relative z-20">
          <div className="bg-brand-accent flex flex-col md:flex-row items-center justify-between p-12 md:p-20 text-brand-white shadow-2xl">
            <div className="max-w-xl mb-10 md:mb-0">
              <h2 className="text-4xl font-serif italic mb-6">¿Busca un perfil comprometido y con excelencia académica?</h2>
              <p className="text-brand-white/70 font-light text-sm">Disponible para procesos de selección en el área laboral y corporativa. Incorpore energía y rigor jurídico a su equipo.</p>
            </div>
            <a href="#contacto" className="bg-brand-white text-brand-ink px-10 py-5 text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-brand-ink hover:text-brand-bg transition-all duration-700">
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding bg-brand-bg pt-64">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Ofertas de Colaboración</span>
              <h2 className="text-5xl mb-12 tracking-tighter">Hablemos de futuro</h2>
              
              <div className="space-y-16 mt-20">
                <div className="group cursor-pointer">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-ink/30 mb-4 font-bold group-hover:text-brand-accent transition-colors">Email Profesional</span>
                  <p className="text-2xl font-serif italic underline decoration-1 underline-offset-8">lucialozhernandez@gmail.com</p>
                </div>
                <div className="flex gap-20">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-brand-ink/30 mb-4 font-bold">Residencia</span>
                    <p className="text-sm font-light uppercase tracking-widest">España (Movilidad Geográfica)</p>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-brand-ink/30 mb-4 font-bold">Disponibilidad</span>
                    <p className="text-sm font-light uppercase tracking-widest">Inmediata / Madrid</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-12 lg:p-20 shadow-sm border border-brand-ink/5">
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-accent">Firma / Despacho</label>
                    <input type="text" className="w-full bg-transparent border-b border-brand-ink/10 py-4 outline-none focus:border-brand-accent transition-all font-light placeholder:text-brand-ink/10" placeholder="Nombre de la entidad..." />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-accent">Persona de Contacto</label>
                    <input type="text" className="w-full bg-transparent border-b border-brand-ink/10 py-4 outline-none focus:border-brand-accent transition-all font-light placeholder:text-brand-ink/10" placeholder="Responsable de Selección..." />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-accent">Propuesta / Mensaje</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-brand-ink/10 py-4 outline-none focus:border-brand-accent transition-all font-light placeholder:text-brand-ink/10 resize-none" placeholder="Descripción de la oportunidad o comentario adicional..."></textarea>
                </div>
                <div className="pt-6">
                  <button type="submit" className="btn-primary w-full py-6">
                    Enviar Propuesta Profesional
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg text-brand-ink py-20 px-6 lg:px-24 border-t border-brand-ink/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start relative z-10">
          <div>
            <span className="text-3xl font-serif font-bold tracking-tight block mb-4">Lucía Loza</span>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 leading-relaxed">
              Jurista y Candidata a la Abogacía <br/> Especializada en Derecho Laboral
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/60">
            <p className="text-brand-accent mb-2">Navegación</p>
            <a href="#inicio" className="hover:text-brand-ink transition-colors">Inicio</a>
            <a href="#perfil" className="hover:text-brand-ink transition-colors">Perfil</a>
            <a href="#competencias" className="hover:text-brand-ink transition-colors">Competencias</a>
          </div>

          <div className="md:text-right">
            <p className="text-[10px] text-brand-ink/30 uppercase tracking-[0.3em] mb-6">© {new Date().getFullYear()} Lucía Loza Hernández</p>
            <div className="flex md:justify-end space-x-6 text-[9px] uppercase tracking-widest font-black text-brand-ink/20">
              <a href="#" className="hover:text-brand-accent transition-all">Cookies</a>
              <a href="#" className="hover:text-brand-accent transition-all">Privacidad</a>
              <a href="#" className="hover:text-brand-accent transition-all">Aviso Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
