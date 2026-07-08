import { useEffect, useRef, type ReactNode } from "react"

/**
 * Scroll-reveal wrapper: fades content in with a slight rise once it enters
 * the viewport. Pure CSS transition driven by an Intersection Observer -
 * no animation library. Respects prefers-reduced-motion via CSS.
 */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-visible")
            observer.disconnect()
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
