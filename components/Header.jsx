import Link from "next/link";
import Navigation from "./Navigation";
import { profile } from "@/data/content";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--plaster)]/90 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-5">
        <Link href="/" className="group relative z-[70] flex min-w-0 flex-col leading-none">
          <span className="font-display text-xl tracking-tight text-[var(--ink)] sm:text-2xl">
            {profile.name}
          </span>
          <span className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-[var(--ink-muted)] transition group-hover:text-[var(--mineral)]">
            {profile.title}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
