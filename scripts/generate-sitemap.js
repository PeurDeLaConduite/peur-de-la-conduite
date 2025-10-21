// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");
const { SitemapStream } = require("sitemap");

const siteUrl = "https://mobile.peur-de-la-conduite.fr";
const outFile = path.join(__dirname, "../public/sitemap.xml");

// charge tes données
const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../public/data/data.json"), "utf8")
);

// URLs statiques
const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/services", changefreq: "monthly", priority: 0.8 },
    { url: "/tarifs", changefreq: "monthly", priority: 0.8 },
    { url: "/blog", changefreq: "weekly", priority: 0.8 },
    { url: "/informations-legales", changefreq: "yearly", priority: 0.5 },
    { url: "/mentions-legales", changefreq: "yearly", priority: 0.5 },
];

// Articles
for (const post of data.posts ?? []) {
    // si tu as une date dans tes posts, utilise-la, sinon today
    const lastmod = (
        post.updatedAt ||
        post.publishedAt ||
        new Date().toISOString()
    ).slice(0, 10);
    links.push({
        url: `/blog/${post.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod,
    });
}

// Sections
for (const section of data.sections ?? []) {
    const lastmod = new Date().toISOString().slice(0, 10);
    links.push({
        url: `/blog/sections/${section.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod,
    });
}

// Écrit le sitemap
const stream = new SitemapStream({ hostname: siteUrl });
const write = fs.createWriteStream(outFile);
stream.pipe(write);
for (const link of links) stream.write(link);
stream.end();
write.on("finish", () => console.log(`✅ Sitemap généré → ${outFile}`));
