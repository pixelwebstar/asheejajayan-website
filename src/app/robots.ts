import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://asheejajayan.com/sitemap.xml",
    host: "https://asheejajayan.com",
  };
}
