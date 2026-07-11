"use client";

import { useEffect, useRef } from "react";

/* ── Config ──────────────────────────────────────────────── */
const N        = 7;      // number of particles
const LERPS    = [       // how fast each particle chases the one ahead
  0.28, 0.22, 0.17, 0.13, 0.10, 0.08, 0.06
];
const SIZES    = [14, 12, 10.5, 9, 8, 6.5, 5];    // px diameter front→back
const ALPHAS   = [1, 0.85, 0.7, 0.58, 0.45, 0.32, 0.2];

// Color stops front → back: white-yellow → orange → red (fire)
const COLORS = [
  "#fff7aa",   // hot white-yellow (tip)
  "#FFD700",   // bright yellow
  "#FFA500",   // orange
  "#FF6B00",   // deep orange
  "#FF3300",   // orange-red
  "#CC1100",   // red
  "#7B0000",   // dark ember red (tail)
];

const ORBIT_RADIUS = 22; // px radius when hovering
const ORBIT_SPEED  = 2.2; // radians/sec

/* ─────────────────────────────────────────────────────────── */
export default function CustomCursor() {
  const dotRefs   = useRef([]);
  const positions = useRef(
    Array.from({ length: N }, () => ({ x: -300, y: -300 }))
  );
  const mouse     = useRef({ x: -300, y: -300 });
  const hovered   = useRef(false);
  const hidden    = useRef(true);
  const rafId     = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    /* ── Mouse tracking ── */
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      hidden.current = false;
    };
    const onLeave  = () => { hidden.current = true; };
    const onEnter  = () => { hidden.current = false; };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    /* ── Hover detection on interactive elements ── */
    const setHover = (val) => () => { hovered.current = val; };
    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", setHover(true));
      el.addEventListener("mouseleave", setHover(false));
    });

    /* ── RAF loop ── */
    let lastTime = performance.now();

    const animate = (now) => {
      const dt      = Math.min((now - lastTime) / 1000, 0.05); // seconds, capped
      lastTime      = now;
      const isHover = hovered.current;
      const isHide  = hidden.current;
      const mx      = mouse.current.x;
      const my      = mouse.current.y;

      for (let i = 0; i < N; i++) {
        const el = dotRefs.current[i];
        if (!el) continue;

        let tx, ty;

        if (isHover) {
          /* ── Orbit mode ── */
          // Each particle is spread equally around the circle,
          // offset by its index so they fan out evenly.
          const angleOffset = (i / N) * Math.PI * 2;
          const t           = now * 0.001 * ORBIT_SPEED + angleOffset;
          tx = mx + Math.cos(t) * ORBIT_RADIUS;
          ty = my + Math.sin(t) * ORBIT_RADIUS;

          // In orbit mode every dot chases its own orbit target directly
          positions.current[i].x +=
            (tx - positions.current[i].x) * 0.18;
          positions.current[i].y +=
            (ty - positions.current[i].y) * 0.18;
        } else {
          /* ── Comet-tail mode ── */
          // Each dot chases the dot in front of it (dot 0 chases mouse)
          const leadX = i === 0 ? mx : positions.current[i - 1].x;
          const leadY = i === 0 ? my : positions.current[i - 1].y;

          positions.current[i].x +=
            (leadX - positions.current[i].x) * LERPS[i];
          positions.current[i].y +=
            (leadY - positions.current[i].y) * LERPS[i];
        }

        const { x, y } = positions.current[i];
        const half = SIZES[i] / 2;
        const opacity = isHide ? 0 : ALPHAS[i];

        el.style.transform   = `translate(${x - half}px, ${y - half}px)`;
        el.style.opacity     = opacity;
        // In hover mode all dots become same teal color and max opacity
        el.style.background  = isHover ? "#FFD700" : COLORS[i];
        el.style.boxShadow   = isHover
          ? `0 0 10px 3px rgba(255,215,0,0.75)`
          : `0 0 ${8 + i}px ${3 + i * 0.5}px ${COLORS[i]}77`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {Array.from({ length: N }, (_, i) => (
        <div
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          aria-hidden="true"
          style={{
            position:      "fixed",
            top:           0,
            left:          0,
            width:         `${SIZES[i]}px`,
            height:        `${SIZES[i]}px`,
            borderRadius:  "50%",
            background:    COLORS[i],
            pointerEvents: "none",
            zIndex:        9999 - i,
            willChange:    "transform, opacity",
            transition:    "opacity 0.35s ease, background 0.25s ease, box-shadow 0.25s ease",
            boxShadow:     `0 0 8px 3px ${COLORS[i]}55`,
          }}
        />
      ))}
    </>
  );
}
