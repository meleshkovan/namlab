import { useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { useBooking } from "@/lib/booking"

export function Hero() {
  const { t } = useI18n()
  const { openModal } = useBooking()
  const orbRef = useRef<HTMLDivElement>(null)
  const orbSmallRef = useRef<HTMLDivElement>(null)

  // Subtle scroll parallax on the decorative orbs (skipped under reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (document.documentElement.classList.contains("a11y-motion")) return
        const y = window.scrollY
        if (orbRef.current) orbRef.current.style.translate = `0 ${y * 0.12}px`
        if (orbSmallRef.current) orbSmallRef.current.style.translate = `0 ${y * -0.06}px`
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="top" className="grain relative overflow-hidden bg-deep pb-24 pt-40 text-stone sm:pb-32 sm:pt-48">
      {/* Slow organic copper-to-verdigris decorative elements */}
      <div ref={orbRef} aria-hidden="true" className="orb absolute -right-24 top-1/4 h-[420px] w-[420px] sm:-right-10" />
      <div ref={orbSmallRef} aria-hidden="true" className="orb absolute -left-32 bottom-0 h-[280px] w-[280px] opacity-60" style={{ animationDelay: "-9s" }} />

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
            className="arrow-nudge inline-flex h-12 items-center gap-2 rounded-btn bg-copper px-8 font-semibold text-ink transition-colors hover:bg-copper-light"
          >
            {t("hero.ctaPrimary")}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
          <a
            href="#services"
            className="inline-flex h-12 items-center rounded-btn border-[0.5px] border-verdigris/60 px-8 font-semibold text-stone transition-colors hover:border-copper hover:text-sand"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  )
}
