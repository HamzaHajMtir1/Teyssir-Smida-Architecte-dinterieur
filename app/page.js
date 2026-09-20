import Image from "next/image";
import Link from "next/link";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { profile, projects } from "@/data/content";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[calc(100vh-5.5rem)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/living.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,24,22,0.82)] via-[rgba(20,24,22,0.55)] to-[rgba(20,24,22,0.25)]" />
          <div className="absolute left-6 top-6 z-10 sm:left-10 sm:top-10">
            <PlaceholderBadge />
          </div>
        </div>

        <div className="container relative z-10 flex min-h-[calc(100vh-5.5rem)] flex-col justify-end pb-16 pt-28 text-[var(--paper)] lg:pb-20">
          <p className="reveal text-sm tracking-[0.2em] uppercase text-[var(--paper)]/75">
            {profile.title}
          </p>
          <h1 className="reveal-delay mt-4 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="reveal-late mt-6 max-w-xl text-base leading-relaxed text-[var(--paper)]/85 sm:text-lg">
            {profile.shortBio}
          </p>
          <div className="reveal-late mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary bg-[var(--paper)] text-[var(--ink)] hover:bg-white">
              Voir les projets
            </Link>
            <Link
              href="/about"
              className="btn-ghost border-[var(--paper)]/60 text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)]"
            >
              Parcours
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] lg:text-5xl">
              Conception d&apos;espaces, du plan au rendu
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[var(--ink-muted)]">{profile.bio}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--ink-muted)]">
              <a className="link-quiet" href={profile.emailHref}>
                {profile.email}
              </a>
              <a className="link-quiet" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--stone)]/50">
        <div className="container py-20 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl tracking-tight lg:text-5xl">Projets récents</h2>
            <Link href="/projects" className="link-quiet text-[0.75rem] tracking-[0.14em] uppercase">
              Tous les projets →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featured.map((project) => (
              <Link key={project.id} href={`/projects#${project.id}`} className="group block">
                <div className="media-frame aspect-[4/5]">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-3 top-3">
                    <PlaceholderBadge />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[0.7rem] tracking-[0.14em] uppercase text-[var(--ink-muted)]">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="mt-1 font-display text-2xl tracking-tight transition group-hover:text-[var(--mineral)]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
