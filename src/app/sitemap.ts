import { MetadataRoute } from "next";
import { treatmentsData } from "@/content/treatments";
import { educationalArticles } from "@/content/education";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://neodentals.com";

  const staticPages = [
    "",
    "/treatments",
    "/learn",
    "/lab",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const treatmentPages = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const learnPages = educationalArticles.map((a) => ({
    url: `${baseUrl}/learn/${a.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...treatmentPages, ...learnPages];
}
