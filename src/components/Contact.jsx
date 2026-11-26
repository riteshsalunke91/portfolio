import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolio'
const field = "w-full rounded-lg border border-line/20 bg-transparent px-4 py-3 outline-none transition focus:border-accent"
export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    // Opens the visitor's email app. Swap for Formspree/EmailJS for in-page sending.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name} (${d.email})`)}`
    setSent(true)
  }
  const links = [[Mail, 'Email', profile.email, `mailto:${profile.email}`], [Linkedin, 'LinkedIn', 'Connect with me', profile.linkedin], [Github, 'GitHub', 'See my code', profile.github]]
  return (
    <Section id="contact" wide title="Let's Build Something Great Together." intro="Open to fresher roles in Java full stack and AI application development.">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {links.map(([Icon, label, text, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="panel flex items-center gap-4 rounded-2xl p-5 transition hover:border-accent/50">
              <span className="rounded-xl p-2.5 text-accent"><Icon size={20} /></span>
              <span className="min-w-0"><span className="block font-semibold">{label}</span><span className="block truncate text-sm text-mute">{text}</span></span>
            </a>
          ))}
        </div>
        <form onSubmit={submit} className="panel space-y-4 rounded-2xl p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="name" className="mb-1 block text-sm text-mute">Name</label><input id="name" name="name" required className={field} /></div>
            <div><label htmlFor="email" className="mb-1 block text-sm text-mute">Email</label><input id="email" name="email" type="email" required className={field} /></div>
          </div>
          <div><label htmlFor="subject" className="mb-1 block text-sm text-mute">Subject</label><input id="subject" name="subject" required className={field} /></div>
          <div><label htmlFor="message" className="mb-1 block text-sm text-mute">Message</label><textarea id="message" name="message" rows="5" required className={field} /></div>
          <button className="btn btn-primary"><Send size={18} />Send message</button>
          {sent && <p role="status" className="text-sm text-mute">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </Section>
  )
}
