"use client";

import { useEffect, useRef } from "react";

const ROLES = [
  {
    period: "May 2026 — Present",
    org: "Cisco Networking Academy",
    role: "AI Analytics Engineer Intern",
    points: [
      "Completed Data Analytics Essentials and Introduction to Modern AI certifications.",
      "Built NLP-based sentiment analysis workflows and wired them into SQL-backed dashboards for end-to-end reporting."
    ]
  },
  {
    period: "Jan 2026",
    org: "JPMorgan Chase — Forage Job Simulation",
    role: "Software Engineer, Backend Services",
    points: [
      "Wired Kafka into a Spring Boot microservice to deserialize high-volume, real-time transaction streams.",
      "Connected the service to an external Incentive REST API via RestTemplate inside fault-tolerant transactional workflows.",
      "Shipped a low-latency balance-lookup endpoint returning JSON through a Spring controller, keeping service boundaries clean."
    ]
  },
  {
    period: "May 2026 — Present",
    org: "GirlScript Summer of Code 2026",
    role: "Open Source Contributor",
    points: [
      "Ranked in the top 1% of contributors globally across a nationwide program with thousands of participants.",
      "Shipped merged contributions to real-world AI and open-source projects."
    ]
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

        <div className="mt-12 space-y-0">
          {ROLES.map((r, idx) => (
            <RevealSection key={r.org}>
              <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 first:border-t-0">
                <div className="pt-1">
                  <span className="font-mono text-xs text-text-faint">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {r.role}
                    </h3>
                    <span className="eyebrow text-text-faint">{r.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-retrieve">{r.org}</p>
                  <ul className="mt-4 space-y-2">
                    {r.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm leading-relaxed text-text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
