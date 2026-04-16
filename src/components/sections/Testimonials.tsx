import { Star } from "lucide-react"

const quotes = [
  {
    quote: "NAM Lab completely rewired how our product org thinks about delivery. They didn't just audit — they rolled up their sleeves and implemented. Cycle time dropped 40% in three months.",
    initials: "AK",
    name: "Anna K.",
    role: "VP of Product · FinTech Scale-up",
  },
  {
    quote: "The BPMN process maps saved us 6 months of internal debate. Every stakeholder finally had a single source of truth. A game-changer for our compliance certification.",
    initials: "MR",
    name: "Marcus R.",
    role: "COO · Enterprise SaaS",
  },
  {
    quote: "They helped us sunset 3 products and double investment in 2 others. Revenue per product jumped 68% within a single quarter. Incredible ROI on the engagement.",
    initials: "LS",
    name: "Lena S.",
    role: "CEO · Digital Commerce Group",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ background: "var(--color-bg-2)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.12em] py-1.5 px-4 rounded-full border mb-5"
            style={{
              color: "var(--color-brand-light)",
              borderColor: "rgba(59,130,246,.15)",
              background: "rgba(59,130,246,.05)",
            }}
          >
            Client Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Trusted by teams<br />
            <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
              building what's next
            </em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div
              key={q.name}
              className="p-8 rounded-3xl border"
              style={{ borderColor: "var(--border)", background: "var(--color-bg-card)" }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: "var(--color-brand)", fill: "var(--color-brand)" }} />
                ))}
              </div>
              <blockquote className="text-base mb-6" style={{ color: "var(--color-text-1)" }}>
                "{q.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-brand-dark))" }}
                >
                  {q.initials}
                </div>
                <div>
                  <strong className="block text-sm" style={{ color: "var(--color-text-1)" }}>
                    {q.name}
                  </strong>
                  <span className="text-xs" style={{ color: "var(--color-text-2)" }}>
                    {q.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
