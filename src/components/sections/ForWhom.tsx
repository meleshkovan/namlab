import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"

const ICONS = [
  // Lightbulb - founders & idea holders
  <path key="i0" d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.6 1 1.5 1 2.5h6c0-1 .3-1.9 1-2.5A6 6 0 0 0 12 3Z" />,
  // Storefront - small businesses
  <path key="i1" d="M4 10v10h16V10M2 10l2-6h16l2 6c0 1.2-1 2.2-2.3 2.2S17.5 11.2 17.5 10c0 1.2-1 2.2-2.3 2.2S13 11.2 13 10c0 1.2-1 2.2-2.2 2.2-1.3 0-2.3-1-2.3-2.2 0 1.2-1 2.2-2.2 2.2C5 12.2 4 11.2 4 10H2ZM9.5 20v-5h5v5" />,
  // Office building - medium businesses
  <path key="i2" d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M3 21h18M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2" />,
  // Lifebuoy - rescue & redesign
  <g key="i3">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M5.7 5.7 9.5 9.5m5-0 3.8-3.8M5.7 18.3l3.8-3.8m5 0 3.8 3.8" />
  </g>,
]

export function ForWhom() {
  const { dict, t } = useI18n()

  return (
    <section id="for-whom" aria-labelledby="forwhom-title" className="bg-stone py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 id="forwhom-title" className="font-display text-4xl font-medium text-deep sm:text-5xl">
            {t("forwhom.title")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dict.forwhom.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 100}>
              <article className="flex h-full flex-col rounded-card border-[0.5px] border-verdigris/40 bg-cream p-7 transition-colors hover:border-copper/60">
                <span aria-hidden="true" className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-card border-[0.5px] border-copper/40 text-copper-deep">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[index]}
                  </svg>
                </span>
                <h3 className="text-xl font-semibold text-deep">{card.title}</h3>
                <p className="mt-3 grow leading-relaxed text-ink/75">{card.body}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-copper-deep transition-colors hover:text-copper">
                  {card.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
