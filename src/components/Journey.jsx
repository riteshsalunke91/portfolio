import Section from './Section'
import { timeline } from '../data/portfolio'
export default function Journey() {
  return (
    <Section id="journey" title="Experience & learning" intro="My developer journey so far.">
      <ol>
        {timeline.map((t) => (
          <li key={t.title} className="grid gap-1 border-t border-line/15 py-5 sm:grid-cols-[8rem_1fr]">
            <span className="font-medium text-accent">{t.meta}</span>
            <div><h3 className="font-semibold">{t.title}</h3><p className="mt-1 text-mute">{t.text}</p></div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
