import Section from './Section'
import { skills } from '../data/portfolio'
export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <dl>
        {skills.map(({ title, items }) => (
          <div key={title} className="grid gap-2 border-t border-line/15 py-5 sm:grid-cols-[13rem_1fr]">
            <dt className="font-semibold">{title}</dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-1 text-mute">{items.map((s) => <span key={s} className="transition hover:text-accent">{s}</span>)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
