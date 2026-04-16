import { Search, CheckCheck, Users, Box } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Customer Discovery",
    desc: "Deep interviews & research to understand real pain points. We identify who your customer truly is, what they struggle with, and what they'll pay to solve.",
  },
  {
    icon: CheckCheck,
    title: "Customer Validation",
    desc: "Test hypotheses with rapid experiments, MVPs, and prototypes. We prove demand before you invest in full development — saving months and millions.",
  },
  {
    icon: Users,
    title: "Customer Creation",
    desc: "Build the go-to-market engine: positioning, channels, pricing, and growth loops designed around validated customer insights.",
  },
  {
    icon: Box,
    title: "Company Building",
    desc: "Scale the validated model with optimized processes, OKR-aligned teams, and delivery pipelines that sustain growth without chaos.",
  },
]

export function Method() {
  return (
    <section id="method" className="py-24 md:py-32">
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
            Our Method
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Customer Development at the core<br />
            <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
              of everything we do
            </em>
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--color-text-2)" }}>
            We don't start with solutions. We start with customer problems and validate every assumption before committing resources.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-10 md:gap-12">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    background: "var(--color-brand)",
                    borderColor: "rgba(59,130,246,.3)",
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-mono text-xs mt-2" style={{ color: "var(--color-text-3)" }}>
                  0{i + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text-1)" }}>
                  {title}
                </h3>
                <p className="text-base" style={{ color: "var(--color-text-2)" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
