import Section from './Section'
export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-2xl space-y-5">
        <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">I'm a Computer Science graduate (B.Tech, 2026) who loves Java backend development and turning real problems into working software.</p>
        <p className="text-mute">I've built projects with Spring Boot and React: a booking system that prevents double-bookings, an expense tracker and a team management app. I care about clean APIs, solid database design and secure authentication.</p>
        <p className="text-mute">Right now I'm exploring Generative AI with Spring AI, LLMs and RAG. I'm looking for a fresher role where I can learn from a strong team and ship useful software.</p>
      </div>
    </Section>
  )
}
