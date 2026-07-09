import RetrievalTrace from "./RetrievalTrace";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line grid-bg">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/40 to-ink" />
      <div className="section-container relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2 text-retrieve">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-retrieve" />
            B.Tech CSE · Year 4 · Thapar University · Open to AI/ML/SDE roles
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
            I build systems that{" "}
            <span className="text-retrieve">retrieve</span>,{" "}
            <span className="text-generate">reason</span>, and ship.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Aryan Bansal — an AI/ML engineer who grounds language models in
            real infrastructure data. I've indexed 10,000+ telecom specs into
            sub-second retrieval pipelines, built fault-tolerant backend
            services, and shipped full-stack products end to end.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="focus-ring rounded-md bg-retrieve px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(76,201,192,0.5)]"
            >
              See the work →
            </a>
            <a
              href="https://github.com/Aryanbansal-05"
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-md border border-line px-5 py-3 font-mono text-sm text-text-muted transition-colors hover:border-retrieve hover:text-text"
            >
              github.com/Aryanbansal-05
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-6 max-w-lg">
            <div>
              <dt className="eyebrow text-text-faint">Retrieval accuracy</dt>
              <dd className="mt-1 font-display text-2xl text-text">85%+</dd>
            </div>
            <div>
              <dt className="eyebrow text-text-faint">Amazon ML Summer School</dt>
              <dd className="mt-1 font-display text-2xl text-text">
                top 3k/134k
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-text-faint">GSSOC contribution</dt>
              <dd className="mt-1 font-display text-2xl text-text">top 1% Globally</dd>
            </div>
          </dl>
        </div>

        <div className="lg:justify-self-end lg:w-full">
          <RetrievalTrace />
          <p className="eyebrow mt-3 text-center text-text-faint">
            live trace from the Telecom RAG project, replayed
          </p>
        </div>
      </div>
    </section>
  );
}
