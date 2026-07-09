"use client";

import { useEffect, useRef } from "react";
import ContributionGraph from "./ContributionGraph";

const FEATURED = [
  {
    tag: "Flagship · Agentic RAG",
    title: "Telecom RAG",
    subtitle: "Agentic retrieval & real-time fault intelligence for RAN systems",
    description:
      "An end-to-end retrieval-augmented generation system for telecom Radio Access Networks — built to answer 3GPP spec questions, trace root causes, and flag anomalies over live O-RAN telemetry, with every answer grounded in a cited source.",
    metrics: [
      { label: "Indexed entries", value: "10,000+" },
      { label: "Retrieval MRR", value: "> 75%" },
      { label: "Top-k accuracy", value: "> 85%" }
    ],
    stack: [
      "FAISS",
      "BAAI/bge-large-en",
      "Mistral-7B-Instruct",
      "FastAPI",
      "Streamlit"
    ],
    href: "https://github.com/Aryanbansal-05/Telecom-RAG",
    color: "retrieve"
  },
  {
    tag: "Full-stack · Real-time",
    title: "Relayy",
    subtitle: "A campus-specific marketplace for students",
    description:
      "A full-stack MERN marketplace connecting students within a campus for secure buying, selling, and exchange — with verified identities and live negotiation, not anonymous listings.",
    metrics: [
      { label: "Auth", value: "OTP + email" },
      { label: "Messaging", value: "Real-time" },
      { label: "Stack", value: "MERN" }
    ],
    stack: ["React", "Node.js", "Express", "Socket.io", "Brevo", "Tailwind"],
    href: "https://github.com/Aryanbansal-05/Relayy",
    color: "generate"
  }
];

const OTHER = [
  {
    title: "HelpDesk.AI",
    description:
      "An AI-powered helpdesk platform that uses NLP and OCR to classify support tickets, detect duplicate incidents, and speed up resolution.",
    stack: ["FastAPI", "DistilBERT", "Supabase", "React", "Python"],
    href: "https://github.com/Aryanbansal-05/HELPDESK.AI"
  },
  {
    title: "Eventra",
    description:
      "An event and hackathon management platform covering discovery, registration, dashboards, and organizer tools end to end.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/Aryanbansal-05/Eventra"
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

export default function Projects() {
  return (
    <section id="work" className="border-b border-line bg-panel/30">
      <div className="section-container py-20">
        <RevealSection>
          <p className="eyebrow text-retrieve">Featured work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text">
            Two systems, two different failure modes
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">
            One is a retrieval pipeline that has to be right and cite why.
            The other is a marketplace that has to be fast and trustworthy at
            the same time. Both taught me different lessons about shipping.
          </p>
        </RevealSection>

        <div className="mt-12 space-y-8">
          {FEATURED.map((p) => (
            <RevealSection key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="card-hover focus-ring group block rounded-xl border border-line bg-panel p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span
                      className={`eyebrow ${p.color === "retrieve" ? "text-retrieve" : "text-generate"
                        }`}
                    >
                      {p.tag}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-text group-hover:text-retrieve">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">{p.subtitle}</p>
                  </div>
                  <span className="eyebrow shrink-0 rounded-md border border-line px-2.5 py-1 text-text-faint">
                    view source →
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-text-muted">
                  {p.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5 max-w-md">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="eyebrow text-text-faint">{m.label}</dt>
                      <dd className="mt-1 font-mono text-sm text-text">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="eyebrow rounded border border-line px-2 py-1 text-text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </RevealSection>
          ))}
        </div>

        {/* GitHub contribution heatmap */}
        <div className="mt-16 border-t border-line pt-10">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow text-retrieve">GitHub activity</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-text">
                Contributions in 2026
              </h3>
            </div>
            <a
              href="https://github.com/Aryanbansal-05"
              target="_blank"
              rel="noreferrer"
              className="focus-ring eyebrow rounded-md border border-line px-2.5 py-1 text-text-faint transition-colors hover:border-retrieve hover:text-retrieve"
            >
              view github ↗
            </a>
          </div>
          <ContributionGraph />
        </div>

        <RevealSection className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {OTHER.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="card-hover focus-ring group rounded-xl border border-line bg-panel/60 p-6 block"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-display text-lg text-text group-hover:text-retrieve transition-colors">
                    {p.title}
                  </h4>
                  <span className="eyebrow text-text-faint text-xs shrink-0">↗</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="eyebrow rounded border border-line/60 px-1.5 py-0.5 text-text-faint text-[0.65rem]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
