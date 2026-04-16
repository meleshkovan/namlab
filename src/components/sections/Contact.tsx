import { ArrowRight, Users, Mail, User, HelpCircle } from "lucide-react"

const channels = [
  { icon: Users, title: "Partnerships & Projects", value: "cooperation@namlab.io" },
  { icon: Mail, title: "General Inquiries", value: "info@namlab.io" },
  { icon: User, title: "Founder Direct", value: "n.meleshkova@namlab.io" },
  { icon: HelpCircle, title: "Client Support", value: "support@namlab.io" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 md:p-12 grid lg:grid-cols-2 gap-10"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(135deg, var(--color-bg-card), var(--color-bg-2))",
          }}
        >
          <div
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,.15), transparent 70%)" }}
          />

          <div className="relative">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.12em] py-1.5 px-4 rounded-full border mb-5"
              style={{
                color: "var(--color-brand-light)",
                borderColor: "rgba(59,130,246,.15)",
                background: "rgba(59,130,246,.05)",
              }}
            >
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Ready to stop guessing<br />
              and start{" "}
              <em className="font-serif italic" style={{ color: "var(--color-brand-light)" }}>
                shipping?
              </em>
            </h2>
            <p className="mt-5 text-base md:text-lg" style={{ color: "var(--color-text-2)" }}>
              Book a free 30-minute diagnostic. We'll map your biggest bottleneck and show you exactly where to start.
            </p>
            <a
              href="mailto:cooperation@namlab.io"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, var(--color-brand), var(--color-brand-dark))",
                boxShadow: "0 0 40px rgba(59,130,246,.15)",
              }}
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative grid gap-3">
            {channels.map(({ icon: Icon, title, value }) => (
              <a
                key={value}
                href={`mailto:${value}`}
                className="flex items-center gap-4 p-4 rounded-2xl border transition hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", background: "var(--color-bg-card)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,130,246,.08)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                </div>
                <div>
                  <strong className="block text-sm" style={{ color: "var(--color-text-1)" }}>
                    {title}
                  </strong>
                  <span className="text-sm" style={{ color: "var(--color-text-2)" }}>
                    {value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
