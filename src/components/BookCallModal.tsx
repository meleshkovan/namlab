import { useEffect, useRef } from "react"
import { useBooking } from "@/lib/booking"
import { useI18n } from "@/lib/i18n"
import { BookCallForm } from "@/components/BookCallForm"

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'

export function BookCallModal() {
  const { isOpen, formType, closeModal } = useBooking()
  const { t } = useI18n()
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    previouslyFocused.current = document.activeElement as HTMLElement
    document.body.style.overflow = "hidden"

    const dialog = dialogRef.current
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal()
        return
      }
      if (event.key !== "Tab" || !dialog) return
      // Focus trap: cycle within the dialog
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
      previouslyFocused.current?.focus()
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-deep/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-form-title"
        className="relative my-8 w-full max-w-lg rounded-card border-[0.5px] border-verdigris/30 bg-stone p-6 shadow-none sm:p-8"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label={t("a11y.closeModal")}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-btn text-ink/60 transition-colors hover:bg-sand/50 hover:text-ink"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <h2 id="modal-form-title" className="font-display text-3xl font-medium text-deep">
          {t("form.title")}
        </h2>
        <p className="mb-6 mt-2 text-ink/70">{t("form.subtitle")}</p>
        <BookCallForm formType={formType} idPrefix="modal" />
      </div>
    </div>
  )
}
