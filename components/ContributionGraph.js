"use client";

import { useEffect, useState } from "react";

// Build a 53-week grid from the flat contributions array
function buildGrid(contributions) {
  if (!contributions?.length) return [];

  // Create date → contrib lookup
  const byDate = {};
  for (const c of contributions) byDate[c.date] = c;

  // Start from Sunday of the first contribution's week
  const firstDate = new Date(contributions[0].date + "T00:00:00");
  const startDate = new Date(firstDate);
  startDate.setDate(startDate.getDate() - firstDate.getDay());

  // End on Saturday of the last contribution's week
  const lastDate = new Date(contributions[contributions.length - 1].date + "T00:00:00");
  const endDate = new Date(lastDate);
  endDate.setDate(endDate.getDate() + (6 - lastDate.getDay()));

  const weeks = [];
  let currentDate = new Date(startDate);
  let currentWeek = [];

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().slice(0, 10);
    currentWeek.push(byDate[dateStr] ?? { count: 0, level: 0, date: dateStr });

    if (currentDate.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length) {
    while (currentWeek.length < 7) currentWeek.push({ count: 0, level: 0, date: null });
    weeks.push(currentWeek);
  }

  return weeks;
}

// Derive month labels from the grid (pin to first week of each month)
function buildMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;
  for (let w = 0; w < weeks.length; w++) {
    const firstDay = weeks[w].find((d) => d?.date);
    if (!firstDay) continue;
    const month = new Date(firstDay.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      labels.push({
        week: w,
        label: new Date(firstDay.date + "T00:00:00").toLocaleString("default", { month: "short" })
      });
      lastMonth = month;
    }
  }
  return labels;
}

const LEVEL_COLORS = [
  "bg-panel border border-line/60",
  "bg-retrieve/20 border border-retrieve/20",
  "bg-retrieve/45 border border-retrieve/30",
  "bg-retrieve/70 border border-retrieve/50",
  "bg-retrieve border border-retrieve/80"
];

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", ""];

// Skeleton cell for loading state
function SkeletonGrid() {
  return (
    <div className="flex gap-[3px] opacity-30 animate-pulse">
      {Array.from({ length: 52 }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {Array.from({ length: 7 }).map((_, d) => (
            <div key={d} className="h-[10px] w-[10px] rounded-[2px] bg-line" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ContributionGraph() {
  const [grid, setGrid] = useState([]);
  const [monthLabels, setMonthLabels] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(null); // { w, d, count, date }

  useEffect(() => {
    fetch("/api/contributions")
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json();
      })
      .then((data) => {
        const g = buildGrid(data.contributions ?? []);
        setGrid(g);
        setMonthLabels(buildMonthLabels(g));
        setTotal(data.total?.["2026"] ?? data.total?.lastYear ?? null);
        setLoading(false);
        setTimeout(() => setRevealed(true), 80);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="w-full rounded-lg border border-line bg-panel/80 backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
      role="img"
      aria-label="GitHub contribution graph"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#8C6528" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#2C7A73" }} />
        <span className="h-2.5 w-2.5 rounded-full bg-text-faint" />
        <span className="ml-2 font-mono text-text-faint text-xs">
          github.com/Aryanbansal-05 — contributions
        </span>
      </div>

      <div className="p-4">
        {/* Stats row */}
        <div className="flex items-center justify-between mb-3 min-h-[18px]">
          <p className="font-mono text-xs text-text-muted">
            {loading ? (
              <span className="inline-block h-3 w-40 rounded bg-line/60 animate-pulse" />
            ) : error ? (
              <span className="text-text-faint">could not load contributions</span>
            ) : (
              <>
                <span className="text-retrieve font-semibold">{total?.toLocaleString()}</span>{" "}
                contributions in the year {new Date().getFullYear()} 
              </>
            )}
          </p>
          {hovered && (
            <span className="font-mono text-xs text-text-faint">
              {hovered.count} {hovered.count === 1 ? "commit" : "commits"} · {hovered.date}
            </span>
          )}
        </div>

        {loading ? (
          <SkeletonGrid />
        ) : error ? (
          <div className="flex h-[100px] items-center justify-center">
            <span className="font-mono text-xs text-text-faint">failed to load — check connection</span>
          </div>
        ) : (
          <>
            {/* Month labels */}
            <div className="relative mb-1 ml-6">
              <div className="flex gap-[3px]">
                {grid.map((_, w) => {
                  const label = monthLabels.find((m) => m.week === w);
                  return (
                    <div key={w} className="w-[10px] shrink-0">
                      {label && (
                        <span className="font-mono text-[8px] text-text-faint whitespace-nowrap">
                          {label.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grid */}
            <div className="flex gap-1">
              {/* Day labels */}
              <div className="flex flex-col gap-[3px] mr-1 mt-0.5">
                {DAY_LABELS.map((label, d) => (
                  <div key={d} className="h-[10px] flex items-center">
                    <span className="font-mono text-[8px] text-text-faint w-5 text-right pr-1">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cells */}
              <div className="flex gap-[3px]">
                {grid.map((week, w) => (
                  <div key={w} className="flex flex-col gap-[3px]">
                    {week.map((cell, d) => (
                      <div
                        key={d}
                        className={`h-[10px] w-[10px] rounded-[2px] transition-all duration-150 cursor-default
                          ${LEVEL_COLORS[cell?.level ?? 0]}
                          ${revealed ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                          ${hovered?.w === w && hovered?.d === d
                            ? "ring-1 ring-retrieve ring-offset-1 ring-offset-panel"
                            : ""}
                        `}
                        style={{
                          transitionDelay: revealed ? `${Math.min(w * 3, 100)}ms` : "0ms"
                        }}
                        onMouseEnter={() =>
                          setHovered({ w, d, count: cell?.count ?? 0, date: cell?.date ?? "" })
                        }
                        onMouseLeave={() => setHovered(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 mt-3">
              <span className="font-mono text-[9px] text-text-faint">Less</span>
              {LEVEL_COLORS.map((cls, i) => (
                <div key={i} className={`h-[10px] w-[10px] rounded-[2px] ${cls}`} />
              ))}
              <span className="font-mono text-[9px] text-text-faint">More</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
