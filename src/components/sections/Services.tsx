import { BookOpen, LayoutGrid, Box, Zap, Target, Workflow, BarChart3, Activity } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Service = {
  id: string
  icon: typeof BookOpen
  statIcon: typeof Target
  title: string
  subtitle: string
  intro: string
  what: string[]
  best: string[]
  stat: string
  statLabel: string
}

const services: Service[] = [
  {
    id: "s1",
    icon: BookOpen,
    statIcon: Target,
    title: "Strategy Audit & Corporate Consulting",
    subtitle: "Diagnose. Align. Accelerate.",
    intro:
      "We perform deep organizational audits mapping your current processes, product portfolio, team structures, and strategic alignment. Using Six Sigma, Lean, and our proprietary maturity model, we identify where value leaks and where growth hides.",
    what: [
      "Current-state organizational diagnostic",
      "Strategy-to-execution gap analysis",
      "Competitive & market positioning review",
      "Prioritized transformation roadmap",
      "Executive readout & stakeholder alignment",
    ],
    best: [
      "Companies scaling past product-market fit",
      "Orgs with misaligned teams & unclear strategy",
      "Pre-M&A due diligence on product/ops",
      "Post-pivot strategic recalibration",
    ],
    stat: "47%",
    statLabel: "Avg. reduction in strategy-execution gap",
  },
  {
    id: "s2",
    icon: LayoutGrid,
    statIcon: Workflow,
    title: "BPMN Process Design & Optimization",
    subtitle: "Map. Model. Automate.",
    intro:
      "We design, document, and optimize your business processes using BPMN 2.0 notation. Every process map serves product goals and strategic objectives — not just whiteboard aesthetics.",
    what: [
      "As-is & to-be BPMN 2.0 process models",
      "Cross-functional workflow mapping",
      "Bottleneck identification & elimination",
      "Automation opportunity assessment",
      "Process governance framework",
    ],
    best: [
      "Teams with undocumented tribal knowledge",
      "Compliance-driven industries (FinTech, HealthTech)",
      "Companies preparing for ISO / SOC audits",
      "Orgs scaling from startup to growth stage",
    ],
    stat: "60%",
    statLabel: "Avg. reduction in process waste & rework",
  },
  {
    id: "s3",
    icon: Box,
    statIcon: BarChart3,
    title: "Product Portfolio Evaluation & Execution",
    subtitle: "Prioritize. Focus. Win.",
    intro:
      "Not every product deserves investment. We apply rigorous scoring models to evaluate your portfolio, identify what to kill, what to double down on — and help you execute those decisions.",
    what: [
      "Product-by-product health scorecard",
      "Kill / Invest / Grow decision matrix",
      "Market fit & monetization analysis",
      "Resource reallocation plan",
      "Execution tracking dashboard",
    ],
    best: [
      "Multi-product companies with diluted focus",
      "Startups pivoting between product lines",
      "PE/VC-backed companies optimizing ROI",
      "Enterprise with legacy product debt",
    ],
    stat: "2.8x",
    statLabel: "Avg. improvement in revenue per product",
  },
  {
    id: "s4",
    icon: Zap,
    statIcon: Activity,
    title: "Discovery → Delivery Pipeline Design",
    subtitle: "Ideate. Validate. Ship. Repeat.",
    intro:
      "We set up the entire product pipeline: from customer research and hypothesis validation through backlog management, sprint execution, and production release. Built on Dual-Track Agile and Customer Development principles.",
    what: [
      "Dual-Track Agile implementation",
      "Customer Development interview frameworks",
      "Hypothesis-driven backlog system",
      "Release management & delivery cadence",
      "Team coaching & knowledge transfer",
    ],
    best: [
      "Product teams stuck in “build trap”",
      "Orgs with slow or broken delivery cycles",
      "Teams adopting product-led growth",
      "Companies launching new product lines",
    ],
    stat: "3x",
    statLabel: "Avg. increase in delivery velocity",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "var(--color-bg-2)" }}>
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            End-to-end product consulting<br />
            <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
              from idea to market
            </em>
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--color-text-2)" }}>
            We don't just advise — we embed, execute, and transfer knowledge so your team owns the outcome.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="s1" className="space-y-4">
          {services.map((s, i) => {
            const Icon = s.icon
            const StatIcon = s.statIcon
            return (
              <AccordionItem
                key={s.id}
                value={s.id}
                className="border rounded-2xl overflow-hidden"
                style={{ borderColor: "var(--border)", background: "var(--color-bg-card)" }}
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                  <div className="flex items-center gap-5 w-full">
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(59,130,246,.08)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--color-brand)" }} />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg md:text-xl font-semibold" style={{ color: "var(--color-text-1)" }}>
                        {s.title}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--color-text-2)" }}>
                        {s.subtitle}
                      </p>
                    </div>
                    <span className="hidden md:inline font-mono text-sm" style={{ color: "var(--color-text-3)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-[1fr_240px] gap-6">
                    <div>
                      <p className="text-base" style={{ color: "var(--color-text-2)" }}>
                        {s.intro}
                      </p>
                      <div className="mt-6 grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 uppercase tracking-[0.08em]" style={{ color: "var(--color-text-1)" }}>
                            What You Get
                          </h4>
                          <ul className="space-y-1.5 text-sm" style={{ color: "var(--color-text-2)" }}>
                            {s.what.map((w) => (
                              <li key={w} className="flex gap-2">
                                <span style={{ color: "var(--color-brand)" }}>›</span>
                                <span>{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2 uppercase tracking-[0.08em]" style={{ color: "var(--color-text-1)" }}>
                            Best For
                          </h4>
                          <ul className="space-y-1.5 text-sm" style={{ color: "var(--color-text-2)" }}>
                            {s.best.map((w) => (
                              <li key={w} className="flex gap-2">
                                <span style={{ color: "var(--color-brand)" }}>›</span>
                                <span>{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-2xl p-6 flex flex-col items-center justify-center text-center border"
                      style={{
                        borderColor: "rgba(59,130,246,.2)",
                        background: "linear-gradient(135deg, rgba(59,130,246,.08), rgba(59,130,246,.02))",
                      }}
                    >
                      <StatIcon className="w-8 h-8 mb-3" style={{ color: "var(--color-brand)" }} />
                      <div className="text-4xl font-bold" style={{ color: "var(--color-text-1)" }}>
                        {s.stat}
                      </div>
                      <div className="mt-1 text-xs" style={{ color: "var(--color-text-2)" }}>
                        {s.statLabel}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
