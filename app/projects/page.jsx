import Image from "next/image";
import Link from "next/link";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { projects } from "@/data/content";

export const metadata = {
  title: "Projets — Teyssir Smida",
  description: "Projets d'architecture d'intérieur : images et dossiers PDF.",
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="border-b border-[var(--line)]">
        <div className="container py-16 lg:py-24">
          <h1 className="font-display text-5xl tracking-tight lg:text-6xl">Projets</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
            Ensemble des projets — photographies et dossiers PDF. Les visuels actuels sont
            provisoires ; ils seront remplacés dès que vous enverrez vos images et fichiers.
          </p>
        </div>
      </section>

      <section className="container space-y-20 py-16 lg:space-y-28 lg:py-24">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className="scroll-mt-28 grid gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.images.map((image) => (
                  <div key={image.src} className="media-frame relative aspect-[4/5]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                    {project.placeholder && (
                      <div className="absolute left-3 top-3">
                        <PlaceholderBadge />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex flex-col justify-center lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
                {project.category} · {project.year}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight">{project.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)]">
                {project.description}
              </p>

              <div className="mt-8">
                {project.pdf ? (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Télécharger le PDF
                  </a>
                ) : (
                  <span className="inline-flex items-center border border-dashed border-[var(--line)] px-5 py-2.5 text-sm text-[var(--ink-muted)]">
                    PDF à venir
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--stone)]/40">
        <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[var(--ink-muted)]">
            Vous avez des photos ou des PDF de projets ? Envoyez-les pour remplacer ces
            placeholders.
          </p>
          <Link href="/contact" className="btn-primary">
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
