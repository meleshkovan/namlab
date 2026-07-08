import { useI18n } from "@/lib/i18n"

const NAV_ITEMS = [
  { key: "nav.services", href: "#services" },
  { key: "nav.forwhom", href: "#for-whom" },
  { key: "nav.team", href: "#team" },
  { key: "nav.products", href: "#products" },
  { key: "nav.podcast", href: "#podcast" },
  { key: "nav.contact", href: "#contact" },
]

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/namlab",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@namlab",
    icon: (
      <path d="M14.5 3v10.8a3.8 3.8 0 1 1-3.3-3.77M14.5 5.2A5.3 5.3 0 0 0 19.8 9" />
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/namlab",
    icon: <path d="M4 4l7.1 9.3L4.4 20h2.3l5.4-5.4L16.5 20H20l-7.4-9.7L18.9 4h-2.3l-4.9 5L8.5 4z" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/namlab",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2.5 2.5 0 0 1 5 0v4M11 10v1.5" />
      </>
    ),
  },
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-deep pb-10 pt-16 text-stone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-tight">
              NAMLAB<span className="text-copper">.io</span>
            </p>
            <p className="mt-3 font-medium text-sand">{t("footer.tagline")}</p>
            <p className="mt-3 text-sm leading-relaxed text-verdigris">{t("footer.about")}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-wider text-verdigris">{t("footer.nav")}</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-stone/85 transition-colors hover:text-sand">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-verdigris">{t("footer.contact")}</p>
            <a href="mailto:hello@namlab.io" className="mt-4 inline-block text-stone/85 transition-colors hover:text-sand">
              hello@namlab.io
            </a>
            <address className="mt-3 text-sm not-italic leading-relaxed text-verdigris">{t("office.address")}</address>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-verdigris">{t("footer.follow")}</p>
            <ul className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-btn border-[0.5px] border-verdigris/40 text-verdigris transition-colors hover:border-copper hover:text-copper"
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t-[0.5px] border-verdigris/25 pt-6 text-sm text-verdigris sm:flex-row sm:items-center">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-sand">
              {t("footer.privacy")}
            </a>
            <a href="#" className="transition-colors hover:text-sand">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
