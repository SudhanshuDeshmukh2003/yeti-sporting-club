"use client";

import { useEffect, useState } from "react";
import { club } from "@/data/club";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#squad", label: "Squad" },
  { href: "#fixtures", label: "Fixtures" },
  { href: "#join", label: "Join" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleMenu() {
    setOpen((v) => !v);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-ice/10 bg-sky/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="group flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl font-bold tracking-wide text-snow uppercase">
            Yeti
          </span>
          <span className="hidden text-xs tracking-[0.2em] text-ice/70 uppercase sm:inline">
            Sporting Club
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-ice/80 transition-colors hover:text-snow"
            >
              {link.label}
            </a>
          ))}
          <a
            href={club.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-saffron transition-opacity hover:opacity-80"
          >
            {club.handle}
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 -mr-2 flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-full rounded-full bg-snow transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-snow transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-snow transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="relative z-40 flex flex-col gap-1 border-t border-ice/10 bg-sky px-5 py-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-3 text-lg text-snow active:bg-ice/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={club.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm px-2 py-3 text-lg text-saffron"
            onClick={() => setOpen(false)}
          >
            {club.handle}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
