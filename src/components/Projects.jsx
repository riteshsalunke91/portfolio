import { Github, ExternalLink } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/portfolio'
export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Replace the # links and add screenshots in src/data/portfolio.js.">
      {projects.map((p) => (
        <article key={p.title} className="group grid gap-6 border-t border-line/15 py-9 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-bold transition duration-300 group-hover:translate-x-1.5 group-hover:text-accent sm:text-3xl">{p.title}</h3>
            <p className="mt-3 max-w-xl text-mute">{p.desc}</p>
            <div className="mt-5 flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost !py-2 text-sm"><Github size={16} />GitHub</a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary !py-2 text-sm"><ExternalLink size={16} />Live Demo</a>
            </div>
          </div>
          <div>
            {p.image && <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="mb-4 rounded-lg border border-line/15" />}
            <ul className="flex flex-wrap gap-2 md:justify-end">{p.tags.map((t) => <li key={t} className="rounded-full border border-line/15 px-3 py-1 text-sm text-mute">{t}</li>)}</ul>
          </div>
        </article>
      ))}
    </Section>
  )
}
