import { useI18n } from "@/lib/i18n"
import { useBooking } from "@/lib/booking"
import { Reveal } from "@/lib/reveal"
import { SectionTitle } from "@/components/SectionTitle"

export function Services() {
  const { dict, t } = useI18n()
  const { openModal } = useBooking()

  return (
    <section id="services" aria-labelledby="services-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id="services-title" eyebrowKey="eyebrow.services" titleKey="services.title" intro={t("services.intro")} />

        <div className="mt-14 space-y-16">
          {dict.services.pillars.map((pillar, pillarIndex) => (
            <Reveal key={pillar.name}>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl font-semibold text-deep">{pillar.name}</h3>
                  <span className="font-display text-lg italic text-copper-deep">“{pillar.label}”</span>
                </div>
                <p className="mt-2 max-w-2xl text-ink/70">{pillar.intro}</p>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {pillar.packages.map((pkg) => (
                    <article
                      key={pkg.name}
                      className={`card-lift flex h-full flex-col rounded-card border-[0.5px] border-verdigris/40 bg-stone p-7 ${
                        pillarIndex === 2 ? "" : "hover:border-copper/70"
                      }`}
                    >
                      <h4 className="text-lg font-semibold text-deep">{pkg.name}</h4>
                      <p className="mt-1 text-sm text-ink/60">
                        {pkg.duration}
                        {pkg.for ? ` · ${pkg.for}` : ""}
                      </p>
                      <ul className="mt-4 grow space-y-2.5">
                        {pkg.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                              className="mt-1 shrink-0 text-copper-deep"
                            >
                              <path d="m5 13 4 4L19 7" />
                            </svg>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {pkg.price && (
                        <p className="mt-5 text-xl font-semibold text-deep">
                          {pkg.price}
                          <span className="mt-1 block text-xs font-normal text-ink/55">{t("services.disclaimer")}</span>
                        </p>
                      )}
                      {pillarIndex !== 2 && (
                        <button
                          type="button"
                          onClick={() => openModal("standard")}
                          className="mt-6 inline-flex h-12 items-center justify-center rounded-btn bg-copper px-6 font-semibold text-ink transition-colors hover:bg-copper-light"
                        >
                          {t("cta.bookcall")}
                        </button>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
