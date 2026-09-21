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
    "/contact",
    "/privacy",
    "/terms",
    "/blog/cost-custom-website",
    "/blog/wordpress-vs-custom",
    "/blog/crm-small-business",
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
