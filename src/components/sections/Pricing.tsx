import { Check } from "lucide-react"

type Plan = {
  tier: string
  price: string
  period: string
  desc: string
  features: string[]
  cta: string
  mailSubject: string
  featured?: boolean
}

const plans: Plan[] = [
  {
    tier: "Sprint",
    price: "from $5,000",
    period: "2–3 week engagement",
    desc: "Focused diagnostic or single-domain process redesign. Fast clarity on one critical area.",
    features: [
      "Single workstream audit",
      "BPMN current-state mapping",
      "Actionable recommendations deck",
      "1 stakeholder workshop",
    ],
    cta: "Get a Quote",
    mailSubject: "Sprint Engagement Inquiry",
  },
  {
    tier: "Transformation",
    price: "from $15,000",
    period: "6–10 week engagement",
    desc: "Full-stack consulting: audit, CustDev, process design, portfolio review & delivery pipeline setup.",
    features: [
      "Multi-stream organizational audit",
      "Customer Development cycle",
      "BPMN to-be process models",
      "Product portfolio scorecard",
      "Discovery → Delivery pipeline v1",
      "Workshops + executive readout",
      "30-day post-delivery support",
    ],
    cta: "Get a Quote",
    mailSubject: "Transformation Engagement Inquiry",
    featured: true,
  },
  {
    tier: "Retainer",
    price: "from $4,000/mo",
    period: "Ongoing · Cancel anytime",
    desc: "Embedded advisory for continuous transformation. Fractional CPO-level strategic guidance on demand.",
    features: [
      "Dedicated senior consultant",
      "Weekly strategy syncs",
      "Continuous process optimization",
      "Quarterly business reviews",
      "On-demand CustDev support",
    ],
    cta: "Get a Quote",
    mailSubject: "Retainer Engagement Inquiry",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
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
            Engagement Models
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Flexible pricing,<br />
            <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
              tailored to your stage
            </em>
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--color-text-2)" }}>
            Every engagement starts with a free diagnostic call. Scope and pricing are customized after we understand your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.tier}
              className={`relative p-8 rounded-3xl border flex flex-col ${p.featured ? "lg:-translate-y-4" : ""}`}
              style={{
                borderColor: p.featured ? "rgba(59,130,246,.4)" : "var(--border)",
                background: p.featured
                  ? "linear-gradient(180deg, rgba(59,130,246,.08), var(--color-bg-card))"
                  : "var(--color-bg-card)",
                boxShadow: p.featured ? "0 0 60px rgba(59,130,246,.12)" : undefined,
              }}
            >
              {p.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-brand-dark))" }}
                >
                  Most Popular
                </div>
              )}
              <span className="text-sm uppercase tracking-[0.12em]" style={{ color: "var(--color-brand-light)" }}>
                {p.tier}
              </span>
              <div className="mt-4 text-3xl font-bold" style={{ color: "var(--color-text-1)" }}>
                {p.price}
              </div>
              <span className="text-sm mt-1" style={{ color: "var(--color-text-2)" }}>
                {p.period}
              </span>
              <p className="mt-5 text-sm" style={{ color: "var(--color-text-2)" }}>
                {p.desc}
              </p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm" style={{ color: "var(--color-text-2)" }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-brand)" }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:cooperation@namlab.io?subject=${encodeURIComponent(p.mailSubject)}`}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.featured ? "text-white" : ""
                }`}
                style={
                  p.featured
                    ? {
                        background: "linear-gradient(135deg, var(--color-brand), var(--color-brand-dark))",
                        boxShadow: "0 0 40px rgba(59,130,246,.15)",
                      }
                    : {
                        borderWidth: 1,
                        borderColor: "var(--border)",
                        color: "var(--color-text-1)",
                      }
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
