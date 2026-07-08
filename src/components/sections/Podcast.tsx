import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"

export function Podcast() {
  const { t } = useI18n()

  return (
    <section id="podcast" aria-labelledby="podcast-title" className="grain relative bg-petrol py-20 text-stone sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 id="podcast-title" className="font-display text-4xl font-medium sm:text-5xl">
            {t("podcast.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-verdigris">{t("podcast.body")}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <a
              href="https://podcasts.apple.com/namlab"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-card border-[0.5px] border-verdigris/40 bg-deep p-7 transition-colors hover:border-copper"
            >
              {/* Apple Podcasts mark, outline style */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-verdigris transition-colors group-hover:text-copper">
                <circle cx="12" cy="10" r="3.2" />
                <path d="M8 15.5a6 6 0 1 1 8 0" />
                <path d="M10.6 15.4h2.8l.7 5.1a1.6 1.6 0 0 1-1.6 1.5h-1a1.6 1.6 0 0 1-1.6-1.5z" />
              </svg>
              <span className="text-lg font-semibold transition-colors group-hover:text-sand">{t("podcast.apple")}</span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a
              href="https://youtube.com/@namlab"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-card border-[0.5px] border-verdigris/40 bg-deep p-7 transition-colors hover:border-copper"
            >
              {/* YouTube mark, outline style */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-verdigris transition-colors group-hover:text-copper">
                <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
                <path d="m10 9.5 5 2.5-5 2.5z" />
              </svg>
              <span className="text-lg font-semibold transition-colors group-hover:text-sand">{t("podcast.youtube")}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
