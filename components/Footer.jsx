import Link from "next/link";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--stone)]">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl tracking-tight text-[var(--ink)]">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">{profile.title}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
            {profile.shortBio}
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
            Navigation
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link className="link-quiet" href="/">
              Accueil
            </Link>
            <Link className="link-quiet" href="/projects">
              Projets
            </Link>
            <Link className="link-quiet" href="/about">
              À propos
            </Link>
            <Link className="link-quiet" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a className="link-quiet" href={profile.emailHref}>
              {profile.email}
            </a>
            <a className="link-quiet" href={profile.phoneHref}>
              {profile.phone}
            </a>
            <p className="text-[var(--ink-muted)]">{profile.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container flex flex-col gap-2 py-6 text-xs text-[var(--ink-muted)] sm:flex-row sm:justify-between">
          <p>
            © 2026 {profile.name}
          </p>
          <p>Portfolio personnel — architecture d&apos;intérieur</p>
        </div>
      </div>
    </footer>
  );
}
