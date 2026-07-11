/* ─── SVG Icons ──────────────────────────────────────────────── */
const IconEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.72 5.72l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 16" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconLeaf = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

/* ─── Links data ─────────────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    short: "Aryan Bansal",
    href: "https://linkedin.com/in/aryan-bansal-44a2a6260",
    Icon: IconLinkedIn,
    color: "#4CC9C0"
  },
  {
    label: "GitHub",
    short: "Aryanbansal-05",
    href: "https://github.com/Aryanbansal-05",
    Icon: IconGitHub,
    color: "#4CC9C0"
  },
  {
    label: "LeetCode",
    short: "zDxkGoTgOt",
    href: "https://leetcode.com/u/zDxkGoTgOt",
    Icon: IconCode,
    color: "#E8A649"
  },
  {
    label: "GeeksforGeeks",
    short: "aryanban7zvn",
    href: "https://geeksforgeeks.org/profile/aryanban7zvn",
    Icon: IconLeaf,
    color: "#4ade80"
  }
];

const CONTACT_LINKS = [
  {
    label: "Email",
    short: "aryanbansalpvt@gmail.com",
    href: "mailto:aryanbansalpvt@gmail.com",
    Icon: IconEmail
  },
  {
    label: "Phone",
    short: "+91 8847313843",
    href: "tel:+918847313843",
    Icon: IconPhone
  }
];

/* ─── Component ──────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Left — CTA */}
          <div>
            <p className="eyebrow text-retrieve">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              Let&apos;s build something that has to work.
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              Open to AI/ML/SDE engineering roles and internships. If you&apos;re
              working on retrieval systems, applied ML, or backend
              infrastructure, I&apos;d like to hear about it.
            </p>

            {/* Direct contact buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {CONTACT_LINKS.map(({ label, short, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-text transition-all hover:border-retrieve hover:text-retrieve"
                >
                  <Icon />
                  {short}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Social icon buttons */}
          <div>
            <p className="eyebrow mb-5 text-text-faint">Find me on</p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map(({ label, short, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group flex items-center gap-3 rounded-xl border border-line bg-panel p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[currentColor]"
                  style={{ "--hover-color": color }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-ink transition-colors group-hover:border-current group-hover:text-current"
                    style={{ color }}
                  >
                    <Icon />
                  </span>
                  <span>
                    <p className="text-xs font-medium text-text">{label}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-text-faint">{short}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Aryan Bansal. Built with Coffee in Manali.</p>
          <p className="font-mono">retrieved · reasoned · shipped</p>
        </div>
      </footer>
    </section>
  );
}
