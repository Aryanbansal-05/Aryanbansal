"use client";

import { useEffect, useState } from "react";

const QUERY = "why did cell A7 report a 12% drop in throughput?";

const CHUNKS = [
  { id: "spec_38.331_§5.3", score: 0.91 },
  { id: "oran_telemetry_a7_log", score: 0.88 },
  { id: "fault_report_2291", score: 0.77 },
  { id: "3gpp_ts_36.213", score: 0.42 }
];

const ANSWER =
  "Cell A7's drop correlates with a PRB scheduling conflict flagged in oran_telemetry_a7_log, consistent with §5.3.";

export default function RetrievalTrace() {
  const [typed, setTyped] = useState("");
  const [stage, setStage] = useState(0); // 0 typing, 1 retrieving, 2 answering, 3 done
  const [visibleChunks, setVisibleChunks] = useState(0);
  const [answerChars, setAnswerChars] = useState(0);

  useEffect(() => {
    let i = 0;
    const typer = setInterval(() => {
      i += 1;
      setTyped(QUERY.slice(0, i));
      if (i >= QUERY.length) {
        clearInterval(typer);
        setTimeout(() => setStage(1), 350);
      }
    }, 38);
    return () => clearInterval(typer);
  }, []);

  useEffect(() => {
    if (stage !== 1) return;
    let n = 0;
    const reveal = setInterval(() => {
      n += 1;
      setVisibleChunks(n);
      if (n >= CHUNKS.length) {
        clearInterval(reveal);
        setTimeout(() => setStage(2), 500);
      }
    }, 260);
    return () => clearInterval(reveal);
  }, [stage]);

  useEffect(() => {
    if (stage !== 2) return;
    let i = 0;
    const typer = setInterval(() => {
      i += 1;
      setAnswerChars(i);
      if (i >= ANSWER.length) {
        clearInterval(typer);
        setStage(3);
      }
    }, 16);
    return () => clearInterval(typer);
  }, [stage]);

  // loop after completion
  useEffect(() => {
    if (stage !== 3) return;
    const reset = setTimeout(() => {
      setTyped("");
      setStage(0);
      setVisibleChunks(0);
      setAnswerChars(0);
    }, 3600);
    return () => clearTimeout(reset);
  }, [stage]);

  return (
    <div
      className="w-full rounded-lg border border-line bg-panel/80 backdrop-blur-sm font-mono text-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      role="img"
      aria-label="Animated demo of a retrieval-augmented generation query being processed"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#8C6528" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#2C7A73" }} />
        <span className="h-2.5 w-2.5 rounded-full bg-text-faint" />
        <span className="ml-2 text-text-faint text-xs">telecom-rag — query trace</span>
      </div>

      <div className="p-4 space-y-3 min-h-[220px]">
        <div>
          <span className="text-retrieve">query&gt;</span>{" "}
          <span className="text-text">{typed}</span>
          {stage === 0 && <span className="animate-blink text-text">▌</span>}
        </div>

        {stage >= 1 && (
          <div className="space-y-1.5 pl-4 border-l border-line ml-1">
            {CHUNKS.slice(0, visibleChunks).map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between text-xs animate-rise"
              >
                <span className="text-text-muted">
                  <span className="text-retrieve/80">match</span> {c.id}
                </span>
                <span
                  className={c.score > 0.7 ? "text-retrieve" : "text-text-faint"}
                >
                  {c.score.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}

        {stage >= 2 && (
          <div className="pt-2 border-t border-line/60">
            <span className="text-generate">answer&gt;</span>{" "}
            <span className="text-text-muted">{ANSWER.slice(0, answerChars)}</span>
            {stage === 2 && <span className="animate-blink text-text">▌</span>}
          </div>
        )}
      </div>
    </div>
  );
}
