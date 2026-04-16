import { useEffect, useRef, useState } from "react"
import { ArrowRight, Search, CheckCheck, Zap, Box } from "lucide-react"

function useCountUp(target: number, inView: boolean, durationMs = 2200) {
  const [value, setValue] = useState(0)
  const done = useRef(false)
  useEffect(() => {
    if (!inView || done.current) return
    done.current = true
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setValue(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, durationMs])
  return value
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  const v = useCountUp(value, inView)
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex items-baseline">
        <span className="text-4xl md:text-5xl font-bold text-text-1" style={{ color: "var(--color-text-1)" }}>
          {v}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-brand ml-1" style={{ color: "var(--color-brand)" }}>
          {suffix}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm uppercase tracking-[0.12em]" style={{ color: "var(--color-text-3)" }}>
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <header id="hero" className="relative min-h-screen pt-[140px] pb-16 overflow-hidden">
      {/* background orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute rounded-full blur-[120px] animate-orb-float"
          style={{
            width: 700,
            height: 700,
            top: "-15%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(59,130,246,.12), transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[120px] animate-orb-float"
          style={{
            width: 500,
            height: 500,
            bottom: "5%",
            left: "-8%",
            animationDirection: "reverse",
            animationDuration: "18s",
            background: "radial-gradient(circle, rgba(139,92,246,.08), transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[120px] animate-orb-float"
          style={{
            width: 300,
            height: 300,
            top: "40%",
            left: "40%",
            animationDelay: "3s",
            animationDuration: "12s",
            background: "radial-gradient(circle, rgba(59,130,246,.06), transparent 70%)",
          }}
        />
        {/* grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 45%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] border"
            style={{
              color: "var(--color-brand-light)",
              borderColor: "rgba(59,130,246,.15)",
              background: "rgba(59,130,246,.05)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" style={{ background: "var(--color-brand)" }} />
            Product & R&D Consulting Studio
          </div>

          <h1 className="mt-6 font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem]">
            We validate ideas.<br />
            Design processes.<br />
            <em className="not-italic">
              <span className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
                Ship products.
              </span>
            </em>
          </h1>

          <p className="mt-6 text-lg max-w-xl" style={{ color: "var(--color-text-2)" }}>
            NAM Lab is a team of product strategists & R&D practitioners who use Customer Development to bring real value — and change the everyday.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:cooperation@namlab.io"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-br from-brand to-brand-dark shadow-[0_0_40px_rgba(59,130,246,.15),0_4px_20px_rgba(0,0,0,.3)] hover:-translate-y-0.5 transition"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium border backdrop-blur-md transition"
              style={{
                color: "var(--color-text-2)",
                borderColor: "var(--border)",
                background: "rgba(255,255,255,.04)",
              }}
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* visual */}
        <div className="relative aspect-square max-w-[420px] mx-auto w-full hidden md:block">
          <div className="absolute inset-[12%] rounded-full border border-white/5" />
          <div className="absolute inset-[24%] rounded-full border border-white/10" />
          <div className="absolute inset-[36%] rounded-full border border-white/15" />
          <div className="absolute inset-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-bg-card to-bg-elev border border-brand/30 shadow-[0_0_60px_rgba(59,130,246,.25)] flex items-center justify-center" style={{ background: "linear-gradient(135deg,var(--color-bg-card),var(--color-bg-elev))", borderColor: "rgba(59,130,246,.3)" }}>
            <Box className="w-9 h-9" style={{ color: "var(--color-brand)" }} />
          </div>
          {[
            { icon: Search, label: "Discovery", pos: "top-[8%] left-1/2 -translate-x-1/2" },
            { icon: CheckCheck, label: "Validate", pos: "right-[6%] top-1/2 -translate-y-1/2" },
            { icon: Zap, label: "Ship", pos: "bottom-[8%] left-1/2 -translate-x-1/2" },
            { icon: Box, label: "Scale", pos: "left-[6%] top-1/2 -translate-y-1/2" },
          ].map(({ icon: Icon, label, pos }) => (
            <div
              key={label}
              className={`absolute ${pos} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md`}
              style={{
                color: "var(--color-text-1)",
                borderColor: "var(--border)",
                background: "rgba(13,17,32,.7)",
              }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: "var(--color-brand-light)" }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-border">
        <Stat value={40} suffix="+" label="Clients Served" />
        <Stat value={120} suffix="+" label="Processes Redesigned" />
        <Stat value={10} suffix="+" label="Years Experience" />
        <Stat value={93} suffix="%" label="Client Retention" />
      </div>
    </header>
  )
}
