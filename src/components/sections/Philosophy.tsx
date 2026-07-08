import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"

export function Philosophy() {
  const { dict, t } = useI18n()

  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className="grain relative bg-deep py-20 text-stone sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-light">{t("eyebrow.philosophy")}</p>
          <h2 id="philosophy-title" className="font-display title-underline mt-3 text-4xl font-medium sm:text-5xl">
            {t("philosophy.title")}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="font-display mt-10 max-w-3xl border-l-4 border-copper pl-6 text-2xl font-medium italic leading-snug text-sand sm:pl-8 sm:text-3xl">
            {t("philosophy.manifesto")}
          </blockquote>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dict.philosophy.principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 100}>
              <div className="card-lift flex h-full gap-5 rounded-card border-[0.5px] border-verdigris/30 bg-petrol p-6 hover:border-copper/60">
                <span aria-hidden="true" className="font-display text-3xl font-medium text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-stone/90">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
