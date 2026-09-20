"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data/content";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const menu =
    mounted &&
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[80] flex flex-col bg-[var(--plaster)]/55 backdrop-blur-xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="flex items-center justify-between gap-4 px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 flex-col leading-none"
          >
            <span className="font-display text-xl tracking-tight text-[var(--ink)]">
              {profile.name}
            </span>
            <span className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-[var(--ink-muted)]">
              {profile.title}
            </span>
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white/40 backdrop-blur-sm"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          >
            <span className="relative block h-4 w-4" aria-hidden>
              <span className="absolute left-0 top-1/2 block h-px w-4 -translate-y-1/2 rotate-45 bg-[var(--ink)]" />
              <span className="absolute left-0 top-1/2 block h-px w-4 -translate-y-1/2 -rotate-45 bg-[var(--ink)]" />
            </span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-6 px-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
          {nav.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-display text-4xl tracking-tight transition ${
                  active ? "text-[var(--ink)]" : "text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-fit"
          >
            Contact
          </Link>
        </nav>
      </div>,
      document.body
    );

  return (
    <>
      <button
        type="button"
        className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        aria-expanded={isOpen}
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex w-5 flex-col gap-1.5">
          <span className="block h-px bg-[var(--ink)]" />
          <span className="block h-px bg-[var(--ink)]" />
          <span className="block h-px bg-[var(--ink)]" />
        </span>
      </button>

      <nav className="hidden items-center gap-10 lg:flex">
        {nav.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-[0.12em] uppercase transition ${
                active
                  ? "text-[var(--ink)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <Link href="/contact" className="btn-primary hidden lg:inline-flex">
        Contact
      </Link>

      {menu}
    </>
  );
}
