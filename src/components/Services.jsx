import Section from './Section'
import { services, exploring } from '../data/portfolio'
export default function Services() {
  return (
    <Section id="services" title="What I do">
      <div className="grid gap-10 md:grid-cols-2">
        <ul>{services.map((s) => <li key={s.title} className="border-t border-line/15 py-4"><h3 className="font-semibold">{s.title}</h3><p className="text-sm text-mute">{s.text}</p></li>)}</ul>
        <div className="panel self-start rounded-xl p-6">
          <h3 className="flex items-center gap-3 font-display text-xl font-bold">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute h-full w-full animate-ping rounded-full bg-ok opacity-60" /><span className="relative h-2.5 w-2.5 rounded-full bg-ok" /></span>Currently exploring
          </h3>
          <ul className="mt-4 space-y-2 text-mute">{exploring.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}
