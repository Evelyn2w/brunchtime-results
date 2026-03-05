// Shared statistics calculator — used by hot, cold, overdue pages
// Data fetched once and cached for 1 hour via Next.js revalidate

export async function getStatistics() {
  try {
    const res = await fetch("https://star49s.com/api/results/brunchtime/get", {
      next: { revalidate: 3600 }, // cache 1 hour — no extra API load
    });
    if (!res.ok) return null;
    const data = await res.json();
    const results = Array.isArray(data?.data) ? data.data : [];

    // Use last 30 draws
    const last30 = results.slice(0, 30);
    const totalDraws = last30.length;
    if (totalDraws === 0) return null;

    // Count frequency and last seen for every number 1-49
    const freq = {};
    const lastSeen = {};

    for (let n = 1; n <= 49; n++) {
      freq[n] = 0;
      lastSeen[n] = null;
    }

    last30.forEach((draw, drawIndex) => {
      const nums = [
        draw.number1, draw.number2, draw.number3,
        draw.number4, draw.number5, draw.number6,
        draw.booster_ball,
      ].filter(Boolean).map(Number);

      nums.forEach(n => {
        if (n >= 1 && n <= 49) {
          freq[n]++;
          if (lastSeen[n] === null) {
            lastSeen[n] = drawIndex; // draws ago (0 = most recent)
          }
        }
      });
    });

    // Build sorted arrays
    const allNumbers = Array.from({ length: 49 }, (_, i) => i + 1).map(n => ({
      num: n,
      freq: freq[n],
      lastSeenDraws: lastSeen[n] === null ? totalDraws : lastSeen[n],
      lastSeenLabel: lastSeen[n] === null
        ? `${totalDraws}+ draws ago`
        : lastSeen[n] === 0
        ? "Today"
        : `${lastSeen[n]} draw${lastSeen[n] > 1 ? "s" : ""} ago`,
    }));

    // Hot = most frequent (top 15)
    const hot = [...allNumbers].sort((a, b) => b.freq - a.freq || a.lastSeenDraws - b.lastSeenDraws).slice(0, 15);

    // Cold = least frequent (bottom 15)
    const cold = [...allNumbers].sort((a, b) => a.freq - b.freq || b.lastSeenDraws - a.lastSeenDraws).slice(0, 15);

    // Overdue = not seen for longest time
    const overdue = [...allNumbers].sort((a, b) => b.lastSeenDraws - a.lastSeenDraws).slice(0, 15);

    return { hot, cold, overdue, totalDraws };
  } catch {
    return null;
  }
}
