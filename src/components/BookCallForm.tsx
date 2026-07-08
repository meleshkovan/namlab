import { useEffect, useRef, useState, type FormEvent } from "react"
import { useI18n } from "@/lib/i18n"
import type { FormType } from "@/lib/booking"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// International format: optional +, 7-15 digits, spaces/dashes/parens allowed
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/

type Status = "idle" | "loading" | "success" | "error"

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

export function BookCallForm({ formType, idPrefix }: { formType: FormType; idPrefix: string }) {
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [gateOpen, setGateOpen] = useState(false)
  const honeypotRef = useRef<HTMLInputElement>(null)

  // Anti-spam time-gate: submit stays disabled for the first 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setGateOpen(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const field = (name: string) => `${idPrefix}-${name}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (honeypotRef.current?.value) return // bot filled the honeypot - drop silently

    const form = event.currentTarget
    const data = new FormData(form)
    const firstName = String(data.get("first_name") ?? "").trim()
    const lastName = String(data.get("last_name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()

    const nextErrors: FieldErrors = {}
    if (!firstName) nextErrors.firstName = t("form.required")
    if (!lastName) nextErrors.lastName = t("form.required")
    if (!email) nextErrors.email = t("form.required")
    else if (!EMAIL_RE.test(email)) nextErrors.email = t("form.emailInvalid")
    if (phone && !PHONE_RE.test(phone)) nextErrors.phone = t("form.phoneInvalid")

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
    setStatus("loading")
    try {
      if (!endpoint) throw new Error("VITE_FORM_ENDPOINT is not configured")
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (!response.ok) throw new Error(`Form endpoint responded ${response.status}`)
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-card border-[0.5px] border-verdigris/40 bg-verdigris/10 px-6 py-8 text-center text-lg font-medium">
        {t("form.success")}
      </p>
    )
  }

  const inputClass =
    "h-12 w-full rounded-btn border-[0.5px] border-verdigris/50 bg-cream px-4 text-ink placeholder:text-ink/40 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/40"

  return (
    <form onSubmit={handleSubmit} noValidate>
      {formType === "veteran_probono" && (
        <p className="mb-4 rounded-btn border-l-4 border-copper bg-sand/40 px-4 py-3 text-sm">{t("form.veteranNote")}</p>
      )}

      <input type="hidden" name="form_type" value={formType} />
      {/* Honeypot - invisible to humans, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={field("website")}>Website</label>
        <input ref={honeypotRef} type="text" id={field("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={field("first-name")} className="mb-1.5 block text-sm font-medium">
            {t("form.firstname")} <span className="text-copper-deep" aria-hidden="true">*</span>
          </label>
          <input
            id={field("first-name")}
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={inputClass}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? field("first-name-error") : undefined}
          />
          {errors.firstName && (
            <p id={field("first-name-error")} className="mt-1 text-sm text-copper-deep">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={field("last-name")} className="mb-1.5 block text-sm font-medium">
            {t("form.lastname")} <span className="text-copper-deep" aria-hidden="true">*</span>
          </label>
          <input
            id={field("last-name")}
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className={inputClass}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? field("last-name-error") : undefined}
          />
          {errors.lastName && (
            <p id={field("last-name-error")} className="mt-1 text-sm text-copper-deep">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={field("company")} className="mb-1.5 block text-sm font-medium">
          {t("form.company")}
        </label>
        <input id={field("company")} name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={field("email")} className="mb-1.5 block text-sm font-medium">
            {t("form.email")} <span className="text-copper-deep" aria-hidden="true">*</span>
          </label>
          <input
            id={field("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? field("email-error") : undefined}
          />
          {errors.email && (
            <p id={field("email-error")} className="mt-1 text-sm text-copper-deep">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={field("phone")} className="mb-1.5 block text-sm font-medium">
            {t("form.phone")}
          </label>
          <input
            id={field("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+380 00 000 0000"
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? field("phone-error") : undefined}
          />
          {errors.phone && (
            <p id={field("phone-error")} className="mt-1 text-sm text-copper-deep">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-btn border-l-4 border-copper-deep bg-sand/50 px-4 py-3 text-sm">
          {t("form.error")}{" "}
          <a href="mailto:hello@namlab.io" className="font-semibold underline">
            hello@namlab.io
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={!gateOpen || status === "loading"}
        className="mt-6 h-12 w-full rounded-btn bg-copper px-8 font-semibold text-ink transition-colors hover:bg-copper-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? t("form.sending") : t("form.submit")}
      </button>
    </form>
  )
}
