import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Download, Mail, FolderGit2 } from 'lucide-react'
import { profile, consoleData } from '../data/portfolio'
const paths = Object.keys(consoleData)

function Json({ text }) {
  const parts = text.split(/("[^"]*")/g)
  return parts.map((p, i) => p.startsWith('"') ? <span key={i} className={parts[i + 1]?.startsWith(':') ? 'text-accent' : 'text-ok'}>{p}</span> : <span key={i}>{p}</span>)
}

// The hero's signature moment: the portfolio answers like a Spring Boot API.
function Console() {
  const [path, setPath] = useState(paths[0])
  const [n, setN] = useState(0)
  const [ms, setMs] = useState(null)
  const full = JSON.stringify(consoleData[path], null, 2)
  useEffect(() => {
    setN(0); setMs(null)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(full.length); setMs(12); return }
    let i = 0, t
    const w = setTimeout(() => { setMs(8 + Math.floor(Math.random() * 14)); t = setInterval(() => { i += 3; setN(i); if (i >= full.length) clearInterval(t) }, 14) }, 450)
    return () => { clearTimeout(w); clearInterval(t) }
  }, [path])
  return (
    <div className="panel rounded-xl font-mono text-sm shadow-2xl">
      <div role="tablist" aria-label="API endpoints" className="flex flex-wrap gap-1 border-b border-line/10 p-2">
        {paths.map((p) => <button key={p} role="tab" aria-selected={p === path} onClick={() => setPath(p)} className={`rounded-md px-3 py-1.5 text-xs transition ${p === path ? 'bg-accent text-bg' : 'text-mute hover:text-ink'}`}><span className="opacity-70">GET </span>{p}</button>)}
      </div>
      <div className="flex h-9 items-center gap-4 border-b border-line/10 px-4 text-xs">
        {ms === null ? <span className="text-mute">Sending request</span> : <><span className="flex items-center gap-1.5 text-ok"><span className="h-2 w-2 rounded-full bg-ok" />200 OK</span><span className="text-mute">{ms} ms</span></>}
      </div>
      <pre aria-live="polite" className="h-72 overflow-auto p-4 leading-6"><Json text={full.slice(0, n)} />{n < full.length && <span className="animate-pulse">▍</span>}</pre>
    </div>
  )
}

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600); return () => clearInterval(t) }, [])
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.22),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-lg text-mute">Hi, I'm Ritesh Salunke</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">Building Scalable Backend Systems &amp; Intelligent Applications</h1>
          <div className="mt-5 h-8 font-display text-xl font-medium text-accent" aria-live="polite">
            <AnimatePresence mode="wait"><motion.span key={i} className="block" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>{profile.roles[i]}</motion.span></AnimatePresence>
          </div>
          <p className="mt-5 max-w-lg text-mute">B.Tech Computer Science graduate who builds Spring Boot backends and React interfaces, and is learning to bring LLMs and RAG into real applications.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary"><FolderGit2 size={18} />View Projects</a>
            <a href={profile.resume} download className="btn btn-ghost"><Download size={18} />Download Resume</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={18} />Contact Me</a>
          </div>
          <div className="mt-6 flex gap-4 text-mute">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent"><Github size={22} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent"><Linkedin size={22} /></a>
          </div>
        </div>
        <Console />
      </div>
    </section>
  )
}
