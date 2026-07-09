"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-retrieve transition-all duration-100"
        style={{ width: `${scrollPct}%` }}
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between">
          <a
            href="#top"
            className="focus-ring font-display text-lg font-semibold tracking-tight text-text"
          >
            Aryan Bansal<span className="text-retrieve">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-8 sm:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring eyebrow text-text-muted transition-colors hover:text-retrieve"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:aryanbansalpvt@gmail.com"
              className="focus-ring eyebrow rounded-md border border-line px-3 py-1.5 text-text transition-colors hover:border-retrieve hover:text-retrieve"
            >
              Email me →
            </a>

            {/* Mobile hamburger */}
            <button
              className="flex flex-col gap-1.5 p-1 sm:hidden focus-ring rounded"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block h-0.5 w-5 bg-text-muted transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-5 bg-text-muted transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-5 bg-text-muted transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="border-t border-line bg-ink/95 backdrop-blur-md sm:hidden">
            <nav className="section-container flex flex-col gap-0 py-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring eyebrow py-3 text-text-muted transition-colors hover:text-retrieve border-b border-line/50 last:border-0"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
