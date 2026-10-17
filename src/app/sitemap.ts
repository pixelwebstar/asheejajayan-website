import type { MetadataRoute } from "next";

const site = "https://asheejajayan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/project",
    "/blog",
    "/start",
    "/book",
    "/contact",
    "/privacy",
    "/terms",
    "/blog/google-ads-and-the-website",
    "/blog/a-premium-website-and-a-cheap-one",
    "/blog/what-a-conversion-website-looks-like",
    "/blog/from-the-search-to-the-call",
    "/project/mobwik",
    "/project/dakeek",
    "/project/checkersmark",
    "/project/novacookers",
    "/project/ksingh",
    "/project/jsgastech",
  ];

  return routes.map((path) => ({
    url: `${site}${path}`,
    lastModified: new Date("2026-09-21"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
