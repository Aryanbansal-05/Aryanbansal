const LINKS = [
  { label: "Email", value: "aryanbansalpvt@gmail.com", href: "mailto:aryanbansalpvt@gmail.com" },
  { label: "Phone", value: "+91 8847313843", href: "tel:+918847313843" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryan-bansal-44a2a6260",
    href: "https://linkedin.com/in/aryan-bansal-44a2a6260"
  },
  {
    label: "GitHub",
    value: "github.com/Aryanbansal-05",
    href: "https://github.com/Aryanbansal-05"
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/zDxkGoTgOt",
    href: "https://leetcode.com/u/zDxkGoTgOt"
  },
  {
    label: "GeeksforGeeks",
    value: "geeksforgeeks.org/profile/aryanban7zvn",
    href: "https://geeksforgeeks.org/profile/aryanban7zvn"
  }
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-retrieve">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              Let's build something that has to work.
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              Open to AI/ML/SDE engineering roles and internships. If you're
              working on retrieval systems, applied ML, or backend
              infrastructure, I'd like to hear about it.
            </p>
            <a
              href="mailto:aryanbansalpvt@gmail.com"
              className="focus-ring mt-8 inline-block rounded-md bg-retrieve px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Email me →
            </a>
          </div>

          <dl className="grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
            {LINKS.map((l) => (
              <div key={l.label} className="border-b border-line pb-4">
                <dt className="eyebrow text-text-faint">{l.label}</dt>
                <dd className="mt-1">
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="focus-ring text-sm text-text transition-colors hover:text-retrieve"
                  >
                    {l.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Aryan Bansal. Built with Coffee at night.</p>
          <p className="font-mono">retrieved · reasoned · shipped</p>
        </div>
      </footer>
    </section>
  );
}
