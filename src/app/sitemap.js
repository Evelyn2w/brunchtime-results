export default function sitemap() {
<<<<<<< HEAD
  const base = "https://brunchtime-results.vercel.app";
  const pages = [
    { url: base, priority: 1.0, changeFrequency: "daily" },
    { url: `${base}/predictions`, priority: 0.9, changeFrequency: "daily" },
    { url: `${base}/hot-numbers`, priority: 0.9, changeFrequency: "daily" },
    { url: `${base}/what-is-brunchtime`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/how-to-play`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/booster-ball`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/winning-tips`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/brunchtime-draw-time`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/contact`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];
  return pages.map(p => ({ ...p, lastModified: new Date() }));
=======
  return [
    {
      url: "https://brunchtime-results.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
}
