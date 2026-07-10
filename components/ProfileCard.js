"use client";

import { useEffect, useState } from "react";

const PROFILE = {
  name: "Aryan Bansal",
  role: "Student",
  university: "Thapar Institute of Engineering",
  currently: "AI Analytics Virtual Intern @ Cisco",
  certifications: ["AWS CLF-C02"],
  interests: ["RAG Pipelines", "LLM Systems", "Cloud Infrastructure"],
  open_to: "AI/ML + SWE Roles 2026-27"
};

// Build a flat list of typed lines for the animation
const LINES = [
  { text: `{`, color: "text-text-muted" },
  { text: `  "name": `, color: "text-text-muted", valuePart: `"${PROFILE.name}"`, valueColor: "text-generate" },
  { text: `  "role": `, color: "text-text-muted", valuePart: `"${PROFILE.role}"`, valueColor: "text-generate" },
  { text: `  "university": `, color: "text-text-muted", valuePart: `"${PROFILE.university}"`, valueColor: "text-generate" },
  { text: `  "currently": `, color: "text-text-muted", valuePart: `"${PROFILE.currently}"`, valueColor: "text-generate" },
  { text: `  "certifications": [`, color: "text-text-muted" },
  { text: `    "AWS CLF-C02"`, color: "text-generate" },
  { text: `  ],`, color: "text-text-muted" },
  { text: `  "interests": [`, color: "text-text-muted" },
  { text: `    "RAG Pipelines",`, color: "text-generate" },
  { text: `    "LLM Systems",`, color: "text-generate" },
  { text: `    "Cloud Infrastructure"`, color: "text-generate" },
  { text: `  ],`, color: "text-text-muted" },
  { text: `  "open_to": `, color: "text-text-muted", valuePart: `"${PROFILE.open_to}"`, valueColor: "text-retrieve" },
  { text: `}`, color: "text-text-muted" }
];

export default function ProfileCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let lineIndex = 0;
    let intervalId = null;
    let timeoutId = null;

    function startTyping(currentCycle) {
      lineIndex = 0;
      intervalId = setInterval(() => {
        lineIndex += 1;
        setVisibleLines(lineIndex);
        if (lineIndex >= LINES.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            setCycle((c) => c + 1);
            setVisibleLines(0);
            startTyping(currentCycle + 1);
          }, 3200);
        }
      }, 110);
    }

    startTyping(0);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      className="w-full rounded-lg border border-line bg-panel/80 backdrop-blur-sm font-mono text-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      role="img"
      aria-label="Profile card showing Aryan Bansal's details in JSON format"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#8C6528" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#2C7A73" }} />
        <span className="h-2.5 w-2.5 rounded-full bg-text-faint" />
        <span className="ml-2 text-text-faint text-xs truncate">aryan@portfolio ~ profile.json</span>
      </div>

      {/* JSON body */}
      <div className="p-4 space-y-0.5 min-h-[430px] sm:min-h-[380px] overflow-hidden">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={`${cycle}-${i}`}
            className="text-xs leading-relaxed animate-rise whitespace-pre-wrap break-words"
          >
            {line.valuePart ? (
              <>
                <span className="text-retrieve">{line.text}</span>
                <span className={line.valueColor}>{line.valuePart},</span>
              </>
            ) : (
              <span className={line.color}>{line.text}</span>
            )}
          </div>
        ))}

        {/* Blinking cursor while typing */}
        {visibleLines < LINES.length && (
          <span className="text-text text-xs">{cursor ? "▌" : " "}</span>
        )}

        {/* Prompt shell cursor after done */}
        {visibleLines >= LINES.length && (
          <div className="mt-2 text-xs">
            <span className="text-retrieve">$ </span>
            <span className="text-text">{cursor ? "▌" : " "}</span>
          </div>
        )}
      </div>
    </div>
  );
}