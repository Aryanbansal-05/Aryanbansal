"use client";

import { useEffect, useRef } from "react";

const EDU = [
  {
    period: "Aug 2023 — Present",
    institution: "Thapar Institute of Engineering & Technology",
    degree: "B.Tech in Computer Science Engineering",
    badges: ["Patiala, Punjab", "Year 4"]
  },
  {
    period: "July 2023",
    institution: "St. Fateh Singh Convent School",
    degree: "Class 12 — Senior Secondary Education",
    badges: ["CBSE"]
  }
];

const LEADERSHIP = [
  {
    role: "Technical Operations",
    org: "Saturnalia — TIET's flagship techno-cultural fest",
    detail:
      "Managed technical infrastructure and operations for one of India's largest college fests at Thapar Institute."
  },
  {
    role: "Lead Member",
    org: "Economics Club, Thapar Institute",
    detail:
      "Led technical discussions and bridged quantitative decision-making with real-world economics — as much about communicating technical ideas as any lab."
  }
];


function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

function RevealSection({ children, className = "" }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="section-container py-20">
        <RevealSection>
          <p className="eyebrow text-retrieve">Education</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text">
            Where I&apos;m coming from
          </h2>
        </RevealSection>

        {/* Education timeline */}
        <div className="mt-12 space-y-0">
          {EDU.map((e, idx) => (
            <RevealSection key={e.institution}>
              <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 first:border-t-0">
                <div className="pt-1">
                  <span className="font-mono text-xs text-text-faint">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {e.degree}
                    </h3>
                    <span className="eyebrow text-text-faint">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-retrieve">{e.institution}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-text">{e.detail}</span>
                    {e.badges.map((b) => (
                      <span
                        key={b}
                        className="eyebrow rounded border border-line px-2 py-0.5 text-text-faint"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Leadership */}
        <RevealSection className="mt-16 border-t border-line pt-10">
          <p className="eyebrow text-generate">Leadership &amp; Extracurriculars</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {LEADERSHIP.map((l) => (
              <div
                key={l.org}
                className="card-hover rounded-lg border border-line bg-panel p-5"
              >
                <p className="eyebrow text-generate text-xs">{l.role}</p>
                <h4 className="mt-2 font-display text-sm font-semibold text-text">
                  {l.org}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  {l.detail}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
