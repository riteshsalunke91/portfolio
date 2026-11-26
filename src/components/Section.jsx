export default function Section({ id, title, intro, wide, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="py-20 sm:py-24">
      <div className={`mx-auto grid max-w-6xl gap-10 px-5 ${wide ? '' : 'lg:grid-cols-[15rem_1fr]'}`}>
        <div>
          <h2 id={`${id}-h`} className={`font-display font-bold ${wide ? 'max-w-2xl text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl lg:sticky lg:top-24'}`}>{title}</h2>
          {intro && <p className="mt-3 max-w-md text-sm text-mute">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
