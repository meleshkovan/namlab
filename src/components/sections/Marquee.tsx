import { useI18n } from "@/lib/i18n"

/**
 * Editorial marquee strip between hero and content: brand phrases separated
 * by copper markers, slow continuous scroll, paused on hover and under
 * reduced motion.
 */
export function Marquee() {
  const { dict } = useI18n()
  const items = dict.marquee
  // Track is duplicated so the -50% keyframe loops seamlessly
  const run = [...items, ...items]

  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y-[0.5px] border-verdigris/25 bg-petrol py-4">
      <div className="marquee-track">
        {run.map((item, index) => (
          <span key={index} className="flex shrink-0 items-center gap-8 pr-8 text-sm font-medium uppercase tracking-[0.18em] text-verdigris">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          </span>
        ))}
      </div>
    </div>
  )
}
