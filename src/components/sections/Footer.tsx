export function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ background: "var(--color-bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <a href="#" className="flex items-center gap-2.5 font-bold text-base">
              <span
                className="w-[34px] h-[34px] rounded-lg text-white flex items-center justify-center font-extrabold"
                style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-brand-dark))" }}
              >
                N
              </span>
              <span>NAM Lab</span>
            </a>
            <p className="mt-3 text-sm" style={{ color: "var(--color-text-2)" }}>
              Product & R&D Consulting Studio.<br />
              Validate. Design. Ship.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-[0.1em]" style={{ color: "var(--color-text-1)" }}>
              Navigate
            </h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-2)" }}>
              <a href="#about" className="hover:text-brand">About</a>
              <a href="#services" className="hover:text-brand">Services</a>
              <a href="#method" className="hover:text-brand">Method</a>
              <a href="#pricing" className="hover:text-brand">Pricing</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-[0.1em]" style={{ color: "var(--color-text-1)" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-2)" }}>
              <a href="mailto:cooperation@namlab.io">cooperation@namlab.io</a>
              <a href="mailto:info@namlab.io">info@namlab.io</a>
              <a href="mailto:marketing@namlab.io">marketing@namlab.io</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-[0.1em]" style={{ color: "var(--color-text-1)" }}>
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-2)" }}>
              <a href="https://www.linkedin.com/in/nataly-meleshkova-30005ab9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="pt-6 flex justify-between text-xs" style={{ color: "var(--color-text-3)" }}>
          <span>© 2025 NAM Lab. All rights reserved.</span>
          <span>namlab.io</span>
        </div>
      </div>
    </footer>
  )
}
