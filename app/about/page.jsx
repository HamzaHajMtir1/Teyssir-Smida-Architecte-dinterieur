import Link from "next/link";
import {
  certificates,
  diplomas,
  education,
  experiences,
  profile,
  skills,
} from "@/data/content";

export const metadata = {
  title: "À propos — Teyssir Smida",
  description: "Expériences professionnelles, formation, compétences et certificats.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-[var(--line)]">
        <div className="container py-16 lg:py-24">
          <h1 className="font-display text-5xl tracking-tight lg:text-6xl">À propos</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
            {profile.bio}
          </p>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <h2 className="font-display text-4xl tracking-tight">Expériences</h2>
        <div className="mt-12 space-y-14">
          {experiences.map((job) => (
            <article
              key={job.id}
              className="grid gap-6 border-t border-[var(--line)] pt-10 lg:grid-cols-[240px_1fr]"
            >
              <div>
                <p className="text-sm text-[var(--ink-muted)]">{job.period}</p>
                <p className="mt-1 text-sm text-[var(--mineral)]">{job.duration}</p>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">{job.place}</p>
              </div>
              <div>
                <h3 className="font-display text-3xl tracking-tight">{job.role}</h3>
                <p className="mt-2 text-[var(--ink-muted)]">{job.company}</p>
                <ul className="mt-6 space-y-2.5">
                  {job.tasks.map((task) => (
                    <li
                      key={task}
                      className="relative pl-4 text-sm leading-relaxed text-[var(--ink-muted)] before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--mineral)]"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--stone)]/40">
        <div className="container py-16 lg:py-24">
          <h2 className="font-display text-4xl tracking-tight">Formation</h2>
          <div className="mt-12 space-y-8">
            {education.map((item) => (
              <article
                key={item.id}
                className="grid gap-2 border-t border-[var(--line)] pt-8 sm:grid-cols-[100px_1fr] sm:gap-8"
              >
                <p className="text-sm text-[var(--mineral)]">{item.period}</p>
                <div>
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--ink-muted)]">{item.school}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
                Diplômes complémentaires
              </h3>
              <ul className="mt-4 space-y-2">
                {diplomas.map((item) => (
                  <li key={item} className="text-sm text-[var(--ink)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
                Certificats
              </h3>
              <ul className="mt-4 space-y-2">
                {certificates.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <h2 className="font-display text-4xl tracking-tight">Compétences</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
              Conception &amp; modélisation
            </h3>
            <ul className="mt-4 space-y-2">
              {skills.conception.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-[var(--ink)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
              Traitement graphique
            </h3>
            <ul className="mt-4 space-y-2">
              {skills.graphique.map((item) => (
                <li key={item} className="text-sm text-[var(--ink)]">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
              Bureautique
            </h3>
            <p className="mt-4 text-sm text-[var(--ink)]">{skills.bureautique.join(" · ")}</p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
              {skills.pedagogie}
            </p>
          </div>
          <div>
            <h3 className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
              Langues
            </h3>
            <ul className="mt-4 space-y-3">
              {skills.langues.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-2 text-sm">
                  <span>{lang.name}</span>
                  <span className="text-[var(--ink-muted)]">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link href="/projects" className="btn-primary">
            Voir les projets
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
