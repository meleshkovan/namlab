import { useI18n } from "@/lib/i18n"
import { useBooking } from "@/lib/booking"
import { Reveal } from "@/lib/reveal"

export function ProBono() {
  const { t } = useI18n()
  const { openModal } = useBooking()

  return (
    <section id="pro-bono" aria-labelledby="probono-title" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-3xl border-l-4 border-copper-deep pl-6 sm:pl-8">
            <h2 id="probono-title" className="font-display text-4xl font-medium text-deep sm:text-5xl">
              {t("probono.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/85">{t("probono.body")}</p>
            <button
              type="button"
              onClick={() => openModal("veteran_probono")}
              className="mt-8 inline-flex h-12 items-center rounded-btn bg-deep px-8 font-semibold text-stone transition-colors hover:bg-petrol"
            >
              {t("probono.cta")}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
