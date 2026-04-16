import { BookOpen, Users, Clock3 } from "lucide-react"

const certs = ["SAFe PO/PM", "Six Sigma BB", "IBM Design Thinking"]
const highlights = [
  { icon: BookOpen, title: "CPO & Senior PM", desc: "ERP, SaaS & PaaS product leadership" },
  { icon: Users, title: "Head of Business Consulting", desc: "Full customer engagement cycles" },
  { icon: Clock3, title: "Operational Excellence Lead", desc: "Six Sigma, Lean, process optimization" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[360px_1fr] gap-12 items-start">
        <div>
          <div
            className="relative rounded-3xl overflow-hidden border aspect-[3/4] bg-gradient-to-br"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(135deg, var(--color-bg-card), var(--color-bg-elev))",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-[8rem] font-serif" style={{ color: "rgba(59,130,246,.2)" }}>
              NM
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {certs.map((c) => (
              <span
                key={c}
                className="inline-flex px-3 py-1 text-xs rounded-full border"
                style={{ borderColor: "var(--border)", color: "var(--color-text-2)", background: "var(--color-bg-card)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.12em] py-1.5 px-4 rounded-full border mb-5"
            style={{
              color: "var(--color-brand-light)",
              borderColor: "rgba(59,130,246,.15)",
              background: "rgba(59,130,246,.05)",
            }}
          >
            About the Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Nataliia Meleshkova<br />
            <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
              10+ years shaping products & operations
            </em>
          </h2>
          <div className="mt-6 space-y-4 text-base md:text-lg" style={{ color: "var(--color-text-2)" }}>
            <p>
              From Chief Product Officer to Head of Business Consulting, Nataliia has led product strategy and process transformation across SaaS, PaaS, ERP, Oil & Gas, TMS, e-commerce, and enterprise platforms — at companies like <strong style={{ color: "var(--color-text-1)" }}>WEZOM</strong>,{" "}
              <strong style={{ color: "var(--color-text-1)" }}>Clario Tech</strong>, <strong style={{ color: "var(--color-text-1)" }}>ZEO Alliance</strong>, and <strong style={{ color: "var(--color-text-1)" }}>Kromtech</strong>.
            </p>
            <p>
              NAM Lab was born from a simple conviction: great products start with validated customer insights, disciplined processes, and relentless focus on value. We combine Customer Development methodology with deep operational expertise to help teams stop guessing and start shipping.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-4 rounded-2xl border"
                style={{ borderColor: "var(--border)", background: "var(--color-bg-card)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(59,130,246,.08)" }}>
                  <Icon className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                </div>
                <strong className="block text-sm" style={{ color: "var(--color-text-1)" }}>
                  {title}
                </strong>
                <span className="text-xs" style={{ color: "var(--color-text-2)" }}>
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
