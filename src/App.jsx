import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import "./App.css"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* HERO */}
      <section className="hero">
  <h1>Olá, eu sou <span>Victor</span> 👋</h1>
  <p>Desenvolvedor Full Stack focado em criar aplicações web modernas.</p>

  <div className="buttons">
    <a className="btn-primary" href="#projects">Ver Projetos</a>
    <a className="btn-outline" href="#contact">Entrar em Contato</a>
  </div>
</section>


      {/* SOBRE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Sobre mim</h2>
        <p className="text-zinc-400 leading-relaxed">
          Sou desenvolvedor apaixonado por resolver problemas reais com código.
          Trabalho com projetos pessoais e open source, buscando sempre boas
          práticas, organização e aprendizado contínuo.
        </p>
      </section>

      {/* STACK */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Stack Tecnológica</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TechCard title="Frontend" items={["HTML", "CSS", "JavaScript", "React"]} />
            <TechCard title="Backend" items={["Java", "Node.js", "APIs REST"]} />
            <TechCard title="Ferramentas" items={["Git", "GitHub", "Linux", "VS Code"]} />
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="FinControl"
            description="Sistema de controle financeiro pessoal com dashboard e autenticação."
            tech="Java · Spring · PostgreSQL"
            github="#"
            demo="#"
          />
          <ProjectCard
            title="Pokedex"
            description="Aplicação web consumindo API pública com interface moderna."
            tech="React · API · CSS"
            github="#"
            demo="#"
          />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Diferenciais</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-zinc-400">
            <li>✔ Código limpo e organizado</li>
            <li>✔ Projetos open source</li>
            <li>✔ Documentação clara (README)</li>
            <li>✔ Estudo contínuo de boas práticas</li>
          </ul>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Vamos conversar?</h2>
        <p className="text-zinc-400 mb-10">Aberto a oportunidades e novos projetos.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-indigo-500"><Github /></a>
          <a href="#" className="hover:text-indigo-500"><Linkedin /></a>
          <a href="mailto:email@email.com" className="hover:text-indigo-500"><Mail /></a>
        </div>
      </section>

      <footer className="py-6 text-center text-zinc-600 text-sm">
        © {new Date().getFullYear()} Victor Mussoline
      </footer>
    </div>
  );
}

function TechCard({ title, items }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-800 shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="text-zinc-400 space-y-2">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-800 shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <p className="text-sm text-zinc-500">{tech}</p>
      </div>
      <div className="flex gap-4 mt-6">
        <a href={github} className="flex items-center gap-1 hover:text-indigo-500">
          <Github size={18} /> GitHub
        </a>
        <a href={demo} className="flex items-center gap-1 hover:text-indigo-500">
          <ExternalLink size={18} /> Demo
        </a>
      </div>
    </div>
  );
}
