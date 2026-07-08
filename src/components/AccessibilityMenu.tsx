import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n"

type A11yKey = "font" | "contrast" | "motion"
const STORAGE_KEY = "namlab-a11y"

function readPrefs(): Record<A11yKey, boolean> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) return { font: false, contrast: false, motion: false, ...JSON.parse(raw) }
  } catch {
    // fall through to defaults
  }
  return { font: false, contrast: false, motion: false }
}

export function AccessibilityMenu() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState(readPrefs)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle("a11y-font", prefs.font)
    html.classList.toggle("a11y-contrast", prefs.contrast)
    html.classList.toggle("a11y-motion", prefs.motion)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      // state alone is enough in sandboxed previews
    }
  }, [prefs])

  useEffect(() => {
    if (!open) return
    function onOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onOutside)
    document.addEventListener("keydown", onEscape)
    return () => {
      document.removeEventListener("mousedown", onOutside)
      document.removeEventListener("keydown", onEscape)
    }
  }, [open])

  const options: { key: A11yKey; label: string }[] = [
    { key: "font", label: t("a11y.fontsize") },
    { key: "contrast", label: t("a11y.contrast") },
    { key: "motion", label: t("a11y.motion") },
  ]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t("a11y.openMenu")}
        className="flex h-10 w-10 items-center justify-center rounded-btn text-stone transition-colors hover:bg-petrol hover:text-sand"
      >
        {/* Eye / accessibility icon, outline style */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
          <path d="M7.5 10.5c1.5.6 3 .9 4.5.9s3-.3 4.5-.9M12 13.5v2.2M12 15.7l-2 3.3M12 15.7l2 3.3" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          aria-label={t("a11y.title")}
          className="absolute right-0 top-12 z-50 w-60 rounded-card border-[0.5px] border-verdigris/40 bg-stone p-2 text-ink"
        >
          <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-ink/50">{t("a11y.title")}</p>
          {options.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="menuitemcheckbox"
              aria-checked={prefs[key]}
              onClick={() => setPrefs((p) => ({ ...p, [key]: !p[key] }))}
              className="flex w-full items-center justify-between rounded-btn px-3 py-2.5 text-left text-sm transition-colors hover:bg-sand/50"
            >
              <span>{label}</span>
              <span
                aria-hidden="true"
                className={`flex h-5 w-9 items-center rounded-full border-[0.5px] p-0.5 transition-colors ${
                  prefs[key] ? "justify-end border-copper bg-copper" : "justify-start border-verdigris/60 bg-stone"
                }`}
              >
                <span className={`h-3.5 w-3.5 rounded-full ${prefs[key] ? "bg-cream" : "bg-verdigris"}`} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
