import { profile } from "@/data/content";

export const metadata = {
  title: "Contact — Teyssir Smida",
  description: "Contacter Teyssir Smida, architecte d'intérieur.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="container py-16 lg:py-28">
        <h1 className="font-display text-5xl tracking-tight lg:text-6xl">Contact</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
          Pour un projet, une collaboration ou une question, écrivez-moi ou appelez-moi.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:max-w-3xl">
          <div className="border-t border-[var(--line)] pt-6">
            <p className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
              E-mail
            </p>
            <a
              href={profile.emailHref}
              className="mt-3 block font-display text-2xl tracking-tight transition hover:text-[var(--mineral)]"
            >
              {profile.email}
            </a>
          </div>
          <div className="border-t border-[var(--line)] pt-6">
            <p className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]">
              Téléphone
            </p>
            <a
              href={profile.phoneHref}
              className="mt-3 block font-display text-2xl tracking-tight transition hover:text-[var(--mineral)]"
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
