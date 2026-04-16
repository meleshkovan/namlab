const items = [
  "Customer Development",
  "BPMN 2.0",
  "Product Strategy",
  "Discovery → Delivery",
  "Process Audit",
  "Portfolio Evaluation",
  "OKR Alignment",
  "Six Sigma",
  "SAFe",
  "Design Thinking",
]

export function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div
      className="overflow-hidden border-y py-5"
      style={{ borderColor: "var(--border)", background: "var(--color-bg-2)" }}
    >
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10 text-sm uppercase tracking-[0.18em]" style={{ color: "var(--color-text-2)" }}>
            {item}
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-brand)" }} />
          </span>
        ))}
      </div>
    </div>
  )
}
