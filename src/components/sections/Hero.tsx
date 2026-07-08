import { useI18n } from "@/lib/i18n"
import { useBooking } from "@/lib/booking"

export function Hero() {
  const { t } = useI18n()
  const { openModal } = useBooking()

  return (
    <section id="top" className="grain relative overflow-hidden bg-deep pb-24 pt-40 text-stone sm:pb-32 sm:pt-48">
      {/* Slow organic copper-to-verdigris decorative element */}
      <div aria-hidden="true" className="orb absolute -right-24 top-1/4 h-[420px] w-[420px] sm:-right-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.08] sm:text-6xl lg:text-7xl">
          <span className="hero-stagger block" style={{ animationDelay: "0ms" }}>
            {t("hero.h1a")}
          </span>
          <span className="hero-stagger block text-sand" style={{ animationDelay: "150ms" }}>
            {t("hero.h1b")}
          </span>
        </h1>
        <p className="hero-stagger mt-8 max-w-2xl text-lg leading-relaxed text-verdigris sm:text-xl" style={{ animationDelay: "300ms" }}>
          {t("hero.subtitle")}
        </p>
        <div className="hero-stagger mt-10 flex flex-wrap gap-4" style={{ animationDelay: "450ms" }}>
          <button
            type="button"
            onClick={() => openModal("standard")}
            className="inline-flex h-12 items-center rounded-btn bg-copper px-8 font-semibold text-ink transition-colors hover:bg-copper-light"
          >
            {t("hero.ctaPrimary")}
          </button>
          <a
            href="#services"
            className="inline-flex h-12 items-center rounded-btn border-[0.5px] border-verdigris/60 px-8 font-semibold text-stone transition-colors hover:border-sand hover:text-sand"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  )
}
