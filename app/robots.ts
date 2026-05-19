import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://raja-tlaki.si/sitemap.xml",
    host: "https://raja-tlaki.si",
  };
}
