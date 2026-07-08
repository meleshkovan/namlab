import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"

const UDEMY_URL = "https://www.udemy.com/user/namlab/"

type Category = "strategy" | "discovery" | "ai" | "growth" | "leadership"

// Course titles stay in English in both locales (brand rule)
const COURSES: { title: string; category: Category }[] = [
  { title: "Product Discovery Without Self-Deception", category: "discovery" },
  { title: "The Go / Pivot / Kill Framework: Honest Idea Validation", category: "discovery" },
  { title: "Business Models with Soul: Sustainable Unit Economics", category: "strategy" },
  { title: "Product-Market Fit Without Illusions", category: "strategy" },
  { title: "Product Rescue 101: Diagnosing a Stalling Product", category: "strategy" },
  { title: "The Product Health Score Method", category: "strategy" },
  { title: "AI as Partner, Not Prosthesis: Workflows for Product People", category: "ai" },
  { title: "AI-Washing Detection: Auditing AI Features That Matter", category: "ai" },
  { title: "Pricing with Purpose: Charge What You Are Worth", category: "growth" },
  { title: "GTM for the Real World: Launch Strategies Beyond Silicon Valley", category: "growth" },
  { title: "The First 90 Days After Launch", category: "growth" },
  { title: "Customer Interviews That Reveal Truth", category: "discovery" },
  { title: "From Founder to Product Leader: The Mindset Shift", category: "leadership" },
  { title: "Product Strategy for Non-Product Founders", category: "strategy" },
  { title: "Roadmaps That Teams Actually Follow", category: "strategy" },
  { title: "Metrics That Matter: Analytics for Product Decisions", category: "growth" },
  { title: "Discovery for Career Switchers: Break Into Product", category: "discovery" },
  { title: "Stakeholder Alignment: Managing Up, Down and Sideways", category: "leadership" },
  { title: "Growth Without Burning Out: Sustainable Product Leadership", category: "leadership" },
  { title: "Building Cross-Functional Teams That Think", category: "leadership" },
]

const FILTERS: ("all" | Category)[] = ["all", "strategy", "discovery", "ai", "growth", "leadership"]

const CARD_COLORS = ["#1A3A3A", "#6B9E9E", "#C17B4A", "#0F2B2B"]

function CourseArt({ index }: { index: number }) {
  const base = CARD_COLORS[index % CARD_COLORS.length]
  const accent = CARD_COLORS[(index + 2) % CARD_COLORS.length]
  const variant = index % 3
  return (
    <svg viewBox="0 0 320 180" role="presentation" aria-hidden="true" className="h-auto w-full rounded-t-card">
      <rect width="320" height="180" fill={base} />
      {variant === 0 && <circle cx={80 + (index % 5) * 35} cy="90" r="55" fill={accent} opacity="0.75" />}
      {variant === 1 && <path d={`M0 180 Q ${90 + (index % 4) * 30} ${30 + (index % 3) * 20} 320 140 L320 180 Z`} fill={accent} opacity="0.75" />}
      {variant === 2 && <rect x={50 + (index % 4) * 40} y="40" width="110" height="110" rx="16" fill={accent} opacity="0.7" transform={`rotate(${10 + (index % 3) * 12} 160 90)`} />}
      <circle cx="272" cy="42" r="18" fill="#E8C9A0" opacity="0.85" />
    </svg>
  )
}

export function Courses() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<"all" | Category>("all")

  const visible = COURSES.filter((course) => filter === "all" || course.category === filter)

  return (
    <section id="products" aria-labelledby="courses-title" className="bg-stone py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 id="courses-title" className="font-display text-4xl font-medium text-deep sm:text-5xl">
            {t("courses.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">{t("courses.intro")}</p>
        </Reveal>

        <Reveal delay={100}>
          <div role="tablist" aria-label={t("courses.title")} className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={filter === key}
                onClick={() => setFilter(key)}
                className={`h-10 rounded-btn border-[0.5px] px-4 text-sm font-medium transition-colors ${
                  filter === key ? "border-copper bg-copper text-ink" : "border-verdigris/50 bg-cream text-ink/70 hover:border-copper/60"
                }`}
              >
                {t(`courses.filters.${key}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-10 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((course) => {
            const index = COURSES.indexOf(course)
            return (
              <li key={course.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-card border-[0.5px] border-verdigris/40 bg-cream transition-colors hover:border-copper/60">
                  <div className="relative">
                    <CourseArt index={index} />
                    <span className="absolute left-3 top-3 rounded-[6px] bg-petrol px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-copper-light">
                      {t("courses.badge")}
                    </span>
                  </div>
                  <div className="flex grow flex-col p-5">
                    <h3 className="grow text-base font-semibold leading-snug text-deep">
                      <a
                        href={UDEMY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-copper-deep focus-visible:text-copper-deep"
                      >
                        {course.title}
                      </a>
                    </h3>
                    <button
                      type="button"
                      disabled
                      title={t("courses.tooltip")}
                      aria-label={`${t("courses.button")} - ${t("courses.tooltip")}`}
                      className="mt-4 h-11 cursor-not-allowed rounded-btn border-[0.5px] border-verdigris/50 bg-stone text-sm font-semibold text-ink/45"
                    >
                      {t("courses.button")}
                    </button>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
