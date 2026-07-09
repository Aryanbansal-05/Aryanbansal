import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Aryanbansal-05?y=2026",
      {
        next: { revalidate: 3600 },
        headers: { "Accept": "application/json" }
      }
    );

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Contributions fetch failed:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
