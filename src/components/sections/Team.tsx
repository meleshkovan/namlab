import { BookOpen, Search, Workflow } from "lucide-react"

const team = [
  {
    icon: BookOpen,
    title: "Product Strategists",
    desc: "CPOs and Senior PMs who've owned roadmaps, led prioritization, and driven product-market fit across SaaS, PaaS, and marketplaces.",
  },
  {
    icon: Search,
    title: "R&D Researchers",
    desc: "Customer Development specialists who design and run validation cycles, user interviews, surveys, and rapid experiments.",
  },
  {
    icon: Workflow,
    title: "Process Engineers",
    desc: "BPMN certified analysts and Six Sigma practitioners who optimize workflows, eliminate waste, and design for scale.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32" style={{ background: "var(--color-bg-2)" }}>
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.12em] py-1.5 px-4 rounded-full border mb-5"
            style={{
              color: "var(--color-brand-light)",
              borderColor: "rgba(59,130,246,.15)",
              background: "rgba(59,130,246,.05)",
            }}
          >
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            A team of{" "}
            <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
              product & R&D
            </em>{" "}
            practitioners
          </h2>
          <p className="mt-5 text-base md:text-lg" style={{ color: "var(--color-text-2)" }}>
            We're not theorists. Our team has launched products, managed P&Ls, led engineering teams, and run customer development cycles at companies from seed-stage startups to enterprise. We exist to validate product ideas based on Customer Development cycles — in order to bring value and change everyday.
          </p>
        </div>
        <div className="grid gap-4">
          {team.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border transition hover:-translate-y-1"
              style={{ borderColor: "var(--border)", background: "var(--color-bg-card)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(59,130,246,.08)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "var(--color-brand)" }} />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-1)" }}>
                {title}
              </h4>
              <p className="text-sm" style={{ color: "var(--color-text-2)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
