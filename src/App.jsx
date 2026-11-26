import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Services from './components/Services'
import Contact from './components/Contact'
const saved = () => { try { return localStorage.getItem('theme') } catch { return null } }
export default function App() {
  const [theme, setTheme] = useState(saved() || 'dark')
  const [top, setTop] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])
  useEffect(() => { const f = () => setTop(window.scrollY > 600); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <>
      <Navbar theme={theme} toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main><Hero /><About /><Skills /><Projects /><Journey /><Services /><Contact /></main>
      <footer className="border-t border-line/10 py-8 text-center text-sm text-mute">© {new Date().getFullYear()} Ritesh Salunke. Built with React, Tailwind CSS and Framer Motion.</footer>
      {top && <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="btn btn-primary fixed bottom-6 right-6 z-40 !p-3"><ArrowUp size={20} /></button>}
    </>
  )
}
