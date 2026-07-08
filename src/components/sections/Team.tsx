import { useI18n } from "@/lib/i18n"
import { Reveal } from "@/lib/reveal"

const PHOTOS = ["/images/team-1.svg", "/images/team-2.svg", "/images/team-3.svg", "/images/team-4.svg"]

export function Team() {
  const { dict, t } = useI18n()

  return (
    <section id="team" aria-labelledby="team-title" className="bg-stone py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 id="team-title" className="font-display text-4xl font-medium text-deep sm:text-5xl">
            {t("team.title")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.team.members.map((member, index) => (
            <Reveal key={member.role} delay={index * 100}>
              <article className="flex h-full flex-col rounded-card border-[0.5px] border-verdigris/40 bg-cream p-5">
                <img
                  src={PHOTOS[index]}
                  alt={`${member.name} - ${member.role}`}
                  width={480}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[8px] object-cover"
                />
                <h3 className="mt-5 text-lg font-semibold text-deep">{member.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-copper-deep">{member.role}</p>
                <p className="mt-3 grow text-sm leading-relaxed text-ink/75">{member.bio}</p>
                <a
                  href="https://linkedin.com/company/namlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("team.linkedin")} ${member.name}`}
                  className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-btn border-[0.5px] border-verdigris/50 text-verdigris transition-colors hover:border-copper hover:text-copper-deep"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="4" />
                    <path d="M7 10v7M7 7v.01M11 17v-4a2.5 2.5 0 0 1 5 0v4M11 10v1.5" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
