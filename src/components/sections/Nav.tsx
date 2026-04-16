import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#method", label: "Method" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  const Logo = () => (
    <a href="#" className="flex items-center gap-2.5 font-bold text-base">
      <span className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center font-extrabold">
        N
      </span>
      <span>NAM Lab</span>
    </a>
  )

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Logo />
          <div className="hidden lg:flex gap-8 text-sm text-text-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative hover:text-text-1 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-brand after:transition-all hover:after:w-full"
                style={{ color: "var(--color-text-2)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:info@namlab.io"
            className="hidden lg:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-br from-brand to-brand-dark shadow-[0_0_40px_rgba(59,130,246,.15)] hover:-translate-y-0.5 transition"
          >
            Start a Project
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex items-center justify-center transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium hover:text-brand"
              style={{ color: "var(--color-text-2)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:info@namlab.io"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white bg-gradient-to-br from-brand to-brand-dark"
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  )
}
