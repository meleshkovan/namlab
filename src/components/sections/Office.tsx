import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"
import { SectionTitle } from "@/components/SectionTitle"

const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Viking Business Center, Zelena St, 151, Lviv, Lviv Oblast, 79000, Ukraine") +
  "&output=embed"

export function Office() {
  const { t } = useI18n()

  return (
    <section id="office" aria-labelledby="office-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id="office-title" eyebrowKey="eyebrow.office" titleKey="office.title" />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-card border-[0.5px] border-verdigris/40 bg-stone p-8">
              <div>
                <address className="text-xl font-medium not-italic leading-relaxed text-deep">{t("office.address")}</address>
                <p className="mt-4 text-ink/70">{t("office.note")}</p>
              </div>
              <img
                src="/images/office.svg"
                alt="Illustration of the Viking Business Center office building in Lviv"
                width={800}
                height={500}
                loading="lazy"
                className="mt-8 w-full rounded-[8px]"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <iframe
              src={MAP_EMBED}
              title={t("office.mapTitle")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[360px] w-full rounded-card border-[0.5px] border-verdigris/40"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
