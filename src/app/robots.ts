import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/shop", "/cart"],
      },
    ],
    sitemap: "https://slospas.com/sitemap.xml",
  };
}
