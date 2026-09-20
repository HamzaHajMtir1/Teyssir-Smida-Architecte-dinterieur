"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={`block h-px bg-[var(--ink)] transition ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span className={`block h-px bg-[var(--ink)] transition ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-px bg-[var(--ink)] transition ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <nav
        className={`lg:flex lg:items-center lg:gap-10 ${
          isOpen
            ? "fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-[var(--plaster)] px-10"
            : "hidden"
        }`}
      >
        {nav.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`font-display text-3xl tracking-tight lg:text-sm lg:tracking-[0.12em] lg:uppercase transition ${
                active
                  ? "text-[var(--ink)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <Link href="/contact" className="btn-primary mt-4 w-fit lg:mt-0 lg:hidden">
          Contact
        </Link>
      </nav>

      <Link href="/contact" className="btn-primary hidden lg:inline-flex">
        Contact
      </Link>
    </>
  );
}
