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
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const top = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollPct(total > 0 ? (top / total) * 100 : 0);
      setScrolled(top > 20);
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

      {/* ── Floating pill navbar ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <header
          className="w-full max-w-4xl transition-all duration-300"
          style={{
            background: "rgba(14, 17, 24, 0.35)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(35, 40, 56, 0.9)",
            borderRadius: "999px",
            boxShadow: scrolled
              ? "0 8px 32px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,201,192,0.07)"
              : "0 2px 12px -4px rgba(0,0,0,0.4)"
          }}
        >
          <div className="flex h-14 items-center justify-between px-4">

            {/* ── Logo / name ── */}
            <a
              href="#top"
              className="focus-ring flex items-center gap-3 shrink-0"
              aria-label="Back to top"
            >
              {/* Avatar circle */}
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "black" }}
              >
                AB
              </span>
              <span className="font-display text-lg font-semibold text-text">
                Aryan Bansal
              </span>
            </a>

            {/* ── Desktop nav links ── */}
            <nav className="hidden items-center gap-1 sm:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="focus-ring rounded-full px-3 py-1.5 text-sm text-text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* ── Email CTA + Mobile burger ── */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:aryanbansalpvt@gmail.com"
                className="focus-ring hidden rounded-full border border-line px-3 py-1.5 font-mono text-xs text-text-muted transition-all hover:border-retrieve hover:text-retrieve sm:inline-flex"
              >
                Email me →
              </a>

              {/* Hamburger (mobile only) */}
              <button
                className="flex flex-col gap-1.5 rounded-full p-2 transition-colors hover:bg-white/5 sm:hidden focus-ring"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className={`block h-0.5 w-5 bg-text-muted transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-text-muted transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-text-muted transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </button>
            </div>
          </div>

          {/* ── Mobile dropdown ── */}
          {menuOpen && (
            <div
              className="border-t px-4 pb-4 sm:hidden"
              style={{ borderColor: "rgba(35,40,56,0.8)", borderRadius: "0 0 28px 28px" }}
            >
              <nav className="flex flex-col gap-1 pt-3">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="focus-ring rounded-xl px-3 py-2.5 text-sm text-text-muted transition-colors hover:bg-white/5 hover:text-text"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="mailto:aryanbansalpvt@gmail.com"
                  className="focus-ring mt-2 rounded-xl border border-line px-3 py-2.5 font-mono text-xs text-text-muted transition-colors hover:border-retrieve hover:text-retrieve"
                >
                  Email me →
                </a>
              </nav>
            </div>
          )}
        </header>
      </div>

    </>
  );
}
