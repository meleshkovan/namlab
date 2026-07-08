import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"
import type { ReactNode } from "react"

/**
 * Normalized section header: uppercase copper eyebrow + display title with
 * a copper underline that grows when the section scrolls into view.
 */
export function SectionTitle({
  id,
  eyebrowKey,
  titleKey,
  intro,
  dark = false,
  center = false,
}: {
  id: string
  eyebrowKey: string
  titleKey: string
  intro?: ReactNode
  dark?: boolean
  center?: boolean
}) {
  const { t } = useI18n()
  return (
    <Reveal className={center ? "text-center" : ""}>
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-copper-light" : "text-copper-deep"}`}>
        {t(eyebrowKey)}
      </p>
      <h2 id={id} className={`font-display title-underline mt-3 text-4xl font-medium sm:text-5xl ${dark ? "text-stone" : "text-deep"}`}>
        {t(titleKey)}
      </h2>
      {intro && <div className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-verdigris" : "text-ink/70"} ${center ? "mx-auto" : ""}`}>{intro}</div>}
    </Reveal>
  )
}
