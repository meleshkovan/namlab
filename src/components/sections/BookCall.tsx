import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"
import { BookCallForm } from "@/components/BookCallForm"

export function BookCall() {
  const { t } = useI18n()

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-deep">{t("eyebrow.contact")}</p>
            <h2 id="contact-title" className="font-display mt-3 text-4xl font-medium text-deep sm:text-5xl">
              {t("form.title")}
            </h2>
            <p className="mt-4 text-lg text-ink/70">{t("form.subtitle")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 rounded-card border-[0.5px] border-verdigris/40 bg-stone p-6 sm:p-8">
              <BookCallForm formType="standard" idPrefix="inline" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
