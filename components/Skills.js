"use client";

import { useEffect, useRef } from "react";

const GROUPS = [
  {
    title: "AI & Agentic Systems",
    accent: "retrieve",
    items: ["RAG Pipelines", "LLM Orchestration", "Agentic AI", "NLP", "Vector Search (FAISS)"]
  },
  {
    title: "Languages",
    accent: "generate",
    items: ["C++", "Python", "JavaScript", "TypeScript", "C", "Rust (learning)"]
  },
  {
    title: "Systems & Networking",
    accent: "retrieve",
    items: [
      "Distributed Systems",
      "System Design",
      "REST APIs",
      "WebSockets",
      "Microservices",
      "Observability"
    ]
  },
  {
    title: "Web Development",
    accent: "generate",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Django", "Go"]
  },
  {
    title: "Cloud & DevOps",
    accent: "retrieve",
    items: ["AWS (EC2, IAM, Lambda, S3, RDS)", "Docker", "Kubernetes", "Nginx", "Git"]
  },
  {
    title: "Data",
    accent: "generate",
    items: ["MongoDB", "SQL", "Relational Databases"]
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

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-panel/30">
      <div className="section-container py-20">
        <RevealSection>
          <p className="eyebrow text-retrieve">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text">
            Tools I reach for
          </h2>
        </RevealSection>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <RevealSection key={g.title} className={`[transition-delay:${i * 60}ms]`}>
              <h3
                className={`eyebrow ${g.accent === "retrieve" ? "text-retrieve" : "text-generate"
                  }`}
              >
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line px-2.5 py-1.5 text-xs text-text-muted transition-colors hover:border-text-faint hover:text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
