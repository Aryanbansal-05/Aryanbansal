"use client";

import { useEffect, useRef } from "react";


const FACTS = [
  {
    label: "Based in",
    value: "Patiala, Punjab, India"
  },
  {
    label: "Currently",
    value: "AI Analytics Engineer Intern @ Cisco Networking Academy"
  },
  {
    label: "Studying",
    value: "B.Tech Computer Science, Thapar Institute — CGPA 7.8"
  },
  {
    label: "Certified",
    value: "AWS Certified Cloud Practitioner (CLF-C02)"
  }
];


const CERTS = [
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "CLF-C02",
    detail: "Validated expertise across EC2, S3, Lambda, IAM, and RDS.",
    color: "retrieve"
  },
  {
    title: "Amazon ML Summer School 2026",
    subtitle: "Top 3,000 / 134,421 applicants",
    detail: "Selected nationwide for an intensive ML program led by Amazon Applied Scientists.",
    color: "generate"
  },
  {
    title: "GirlScript Summer of Code 2026",
    subtitle: "Top 1% contributors globally",
    detail: "Shipped merged contributions to real-world AI and open-source projects.",
    color: "retrieve"
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

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="section-container py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <RevealSection>
            <p className="eyebrow text-retrieve">About</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text">
              Grounded in infrastructure, not just demos
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/aryan-bansal-44a2a6260"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-retrieve px-4 py-2.5 font-mono text-xs font-medium text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(76,201,192,0.5)]"
              >
                View LinkedIn ↗
              </a>
              <a
                href="https://github.com/Aryanbansal-05"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-xs text-text-muted transition-colors hover:border-retrieve hover:text-text"
              >
                GitHub ↗
              </a>
            </div>
          </RevealSection>



          <RevealSection className="lg:col-span-2">
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                Most of my work starts from a system that already exists and
                already breaks in interesting ways — a telecom network shedding
                throughput, a transaction stream that can't drop a single
                event, a campus with no trustworthy way to buy and sell between
                students. I like building the layer that makes those systems
                legible: retrieval pipelines that cite their sources,
                services that stay correct under load, and interfaces people
                actually use.
              </p>
              <p>
                Outside of coursework, I ran technical operations for
                Saturnalia — TIET's flagship techno-cultural fest — and helped
                lead the Economics Club, which taught me as much about
                communicating technical decisions as any lab ever did. I'm
                currently ranked in the top 1% of contributors in GirlScript
                Summer of Code 2026 and was one of 3,000 students selected
                nationwide (out of 134,421 applicants) for Amazon's ML Summer
                School.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow text-text-faint">{f.label}</dt>
                  <dd className="mt-1 text-sm text-text">{f.value}</dd>
                </div>
              ))}
            </dl>
          </RevealSection>
        </div>
        {/* Achievements / Certifications */}
        <RevealSection className="mt-16 border-t border-line pt-10">
          <p className="eyebrow text-generate">Achievements & Certifications</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {CERTS.map((c) => (
              <div
                key={c.title}
                className="card-hover rounded-lg border border-line bg-panel p-5"
              >
                <p
                  className={`eyebrow ${c.color === "retrieve" ? "text-retrieve" : "text-generate"
                    }`}
                >
                  {c.subtitle}
                </p>
                <h4 className="mt-2 font-display text-sm font-semibold text-text">
                  {c.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
