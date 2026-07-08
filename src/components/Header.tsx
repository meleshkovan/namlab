import { useEffect, useState } from "react"
import { useI18n, type Locale } from "@/lib/i18n"
import { useBooking } from "@/lib/booking"
import { AccessibilityMenu } from "@/components/AccessibilityMenu"

const NAV_ITEMS = [
  { key: "nav.services", href: "#services" },
  { key: "nav.forwhom", href: "#for-whom" },
  { key: "nav.team", href: "#team" },
  { key: "nav.products", href: "#products" },
  { key: "nav.podcast", href: "#podcast" },
  { key: "nav.contact", href: "#contact" },
]

function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const options: Locale[] = ["en", "ua"]
  return (
    <div role="group" aria-label="Language" className="flex items-center rounded-btn border-[0.5px] border-verdigris/50 p-0.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={`rounded-[6px] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            locale === option ? "bg-copper text-ink" : "text-verdigris hover:text-stone"
          }`}
        >
          {option === "ua" ? "UA" : "EN"}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useI18n()
  const { openModal } = useBooking()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 80)
      // Hide when scrolling down deep into the page, return on any scroll up
      setHidden(y > 400 && y > lastY)
      lastY = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`header-in fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep/95 backdrop-blur-md" : "bg-deep"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="#top" className="shrink-0 text-lg font-bold tracking-tight text-stone" aria-label="namlab.io - back to top">
          NAMLAB<span className="text-copper transition-colors hover:text-copper-light">.io</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-stone/85 transition-colors hover:text-sand">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <AccessibilityMenu />
          <button
            type="button"
            onClick={() => openModal("standard")}
            className="hidden h-11 items-center rounded-btn bg-copper px-5 text-sm font-semibold text-ink transition-colors hover:bg-copper-light sm:inline-flex"
          >
            {t("cta.bookcall")}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-btn text-stone hover:bg-petrol lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t-[0.5px] border-verdigris/30 bg-deep px-4 pb-6 pt-2 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-btn px-3 py-3 text-stone/90 transition-colors hover:bg-petrol hover:text-sand"
            >
              {t(item.key)}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              openModal("standard")
            }}
            className="mt-3 h-12 w-full rounded-btn bg-copper font-semibold text-ink transition-colors hover:bg-copper-light"
          >
            {t("cta.bookcall")}
          </button>
        </nav>
      )}
    </header>
  )
}
