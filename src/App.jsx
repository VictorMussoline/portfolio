import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./App.css";

// Mapeamento de nomes de tecnologias para URLs dos ícones
const techIcons = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Node.js": "https://nodejs.org/static/logos/nodejsStackedLight.svg",
  "APIs REST": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub: "https://img.icons8.com/ios11/512/FFFFFF/github.png",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  API: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg"
};

export default function Portfolio() {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    const email = 'victor8augusto010604@hotmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess('Email copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, (err) => {
      console.error('Falha ao copiar o email: ', err);
      setCopySuccess('Falha ao copiar.');
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      
      {/* HERO */}
      <section className="hero">
        <h1>
          Olá, eu sou <span>Victor</span> 👋
        </h1>
        <p>Desenvolvedor Full Stack focado em criar aplicações web modernas.</p>

        <div className="buttons">
          <a className="btn-primary" href="#projects">
            Ver Projetos
          </a>
          <a className="btn-outline" href="#contact">
            Entrar em Contato
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <AnimateOnScroll>
        <section className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">Sobre mim</h2>
          <p className="max-w-3xl mx-auto text-zinc-400 leading-relaxed">
            Sou um desenvolvedor Full Stack com um forte interesse em construir
            soluções digitais que sejam eficientes, escaláveis e que proporcionem
            uma ótima experiência ao usuário. Minha jornada na programação começou
            com a curiosidade de entender como a tecnologia funciona e rapidamente
            se tornou uma paixão por criar aplicações web do zero. Estou sempre em
            busca de novos desafios e oportunidades para aprimorar minhas
            habilidades.
          </p>
        </section>
      </AnimateOnScroll>

      {/* STACK */}
      <section className="bg-zinc-900">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center">Stack Tecnológica</h2>
          
          <div className="grid">
            <AnimateOnScroll>
              <TechCard
                title="Frontend"
                items={["HTML", "CSS", "JavaScript", "React"]}
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <TechCard
                title="Backend"
                items={["Java", "Node.js", "APIs REST"]}
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <TechCard
                title="Ferramentas"
                items={["Git", "GitHub", "Linux", "VS Code"]}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <AnimateOnScroll>
        <section id="projects" className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <ProjectCard
                title="FinControl"
                description="Controle financeiro com autenticação e dados em tempo real."
                tech="React · Firebase · CSS"
                github="https://github.com/VictorMussoline/FinControl-Open"
                demo="https://fincontrolvm.web.app/login"
              />
            </AnimateOnScroll>
          </div>
        </section>
      </AnimateOnScroll>

      {/* DIFERENCIAIS */}
      <AnimateOnScroll>
        <section className="bg-zinc-900">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-8 text-center">Diferenciais</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-zinc-400">
              <li className="flex items-center gap-2">✔ Código limpo e organizado</li>
              <li className="flex items-center gap-2">✔ Projetos open source</li>
              <li className="flex items-center gap-2">✔ Documentação clara (README)</li>
              <li className="flex items-center gap-2">✔ Estudo contínuo de boas práticas</li>
            </ul>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CONTATO */}
      <AnimateOnScroll>
        <section id="contact" className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">Vamos conversar?</h2>
          <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
            Aberto a oportunidades e novos projetos. Sinta-se à vontade para entrar em contato.
          </p>
          <br/>
          <div className="socials">
            <a href="https://github.com/VictorMussoline" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
              <Github size={30} />
            </a>
            <a href="https://www.linkedin.com/in/victormussoline/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
              <Linkedin size={30} />
            </a>
            <button onClick={handleCopyEmail} className="hover:text-indigo-500 transition-colors" aria-label="Copiar email">
              <Mail size={30} />
            </button>
          </div>
          {copySuccess && (
            <p className="mt-4 text-sm text-indigo-400">{copySuccess}</p>
          )}
        </section>
      </AnimateOnScroll>

      <footer className="py-6 text-center text-zinc-600 text-sm bg-zinc-950 border-t border-zinc-900">
        © {new Date().getFullYear()} Victor Mussoline
      </footer>
    </div>
  );
}

function AnimateOnScroll({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return <div ref={ref} className={`fade-in ${isVisible ? 'is-visible' : ''}`}>{children}</div>;
}

function TechCard({ title, items }) {
  return (
    <AnimateOnScroll>
      <div className="card">
        <h3 className="tech-card-title">{title}</h3>
        <div className="tech-items-grid">
          {items.map((item) => (
            <div key={item} className="tech-item">
              <img src={techIcons[item]} alt={item} className="tech-icon" />
              <span className="text-xs text-center text-zinc-300 font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <AnimateOnScroll>
      <div className="card project">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <small>{tech}</small>
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  );
}