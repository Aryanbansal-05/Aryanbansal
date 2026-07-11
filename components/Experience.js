"use client";

import { useEffect, useRef } from "react";

/* ─── Data ───────────────────────────────────────────────────── */
const ROLES = [

  {
    period: "May 2026 — Present",
    org: "Cisco Networking Academy",
    role: "AI Analytics Virtual Intern",
    dotColor: "#4CC9C0",
    textColor: "#4CC9C0",
    points: [
      "Completed Data Analytics Essentials and Introduction to Modern AI certifications.",
      "Built NLP-based sentiment analysis workflows and wired them into SQL-backed dashboards for end-to-end reporting."
    ]
  },

  {
    period: "May 2026 — Present",
    org: "GirlScript Summer of Code 2026",
    role: "Open Source Contributor",
    dotColor: "#8B5CF6",
    textColor: "#A78BFA",
    points: [
      "Ranked in the top 1% of contributors globally across a nationwide program with thousands of participants.",
      "Shipped merged contributions to real-world AI and open-source projects."
    ]
  },
  {
    period: "Jan 2026",
    org: "JPMorgan Chase — Forage Job Simulation",
    role: "Software Engineer - Backend Services",
    dotColor: "#E8A649",
    textColor: "#E8A649",
    points: [
      "Wired Kafka into a Spring Boot microservice to deserialize high-volume, real-time transaction streams.",
      "Connected the service to an external Incentive REST API via RestTemplate inside fault-tolerant transactional workflows.",
      "Shipped a low-latency balance-lookup endpoint returning JSON through a Spring controller, keeping service boundaries clean."
    ]
  }
];

/* ─── Scroll Reveal ──────────────────────────────────────────── */
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
      { threshold: 0.08 }
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

/* ─── Section ────────────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="section-container py-20">
        <RevealSection>
          <p className="eyebrow text-retrieve">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text">
            Recent roles, in order
          </h2>
        </RevealSection>

        {/* Timeline */}
        <div className="relative mt-14 pl-8">
          {/* Continuous left spine */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-px"
            style={{ background: "#2E3340" }}
          />

          <div className="flex flex-col">
            {ROLES.map((r, index) => (
              <RevealSection key={`${r.org}-${index}`}>
                <div className="relative py-10 border-b border-line last:border-b-0">
                  {/* Glowing dot on the spine */}
                  <div
                    className="absolute -left-8 top-[42px] flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full"
                    style={{
                      background: r.dotColor,
                      boxShadow: `0 0 10px 4px ${r.dotColor}55`
                    }}
                  />

                  {/* Header row */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {r.role}
                    </h3>
                    <span className="eyebrow text-text-faint shrink-0">{r.period}</span>
                  </div>

                  {/* Org */}
                  <p className="mt-1 text-sm" style={{ color: r.textColor }}>
                    {r.org}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2">
                    {r.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm leading-relaxed text-text-muted"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full"
                          style={{ background: r.dotColor }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
