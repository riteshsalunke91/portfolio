import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
const links = ['about', 'skills', 'projects', 'journey', 'services', 'contact']
export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  const cls = (id) => `px-3 py-2 text-sm capitalize transition ${active === id ? 'text-ink underline decoration-accent decoration-2 underline-offset-8' : 'text-mute hover:text-ink'}`
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold">Ritesh Salunke</a>
        <div className="hidden items-center md:flex">{links.map((l) => <a key={l} href={`#${l}`} className={cls(l)}>{l}</a>)}</div>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="btn-ghost rounded-lg p-2">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="btn-ghost rounded-lg p-2 md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && <div className="flex flex-col px-5 pb-4 md:hidden">{links.map((l) => <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className={cls(l)}>{l}</a>)}</div>}
    </header>
  )
}
