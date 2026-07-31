import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { blogArticles } from "./blogs/data/blogArticles";
import { caseStudies } from "./case-studies/data/caseStudyDetails";
import { serviceDetailMap } from "./services/data/serviceDetails";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: { path: string; priority?: number }[] = [
		{ path: "", priority: 1 },
		{ path: "/services", priority: 0.9 },
		{ path: "/portfolio", priority: 0.9 },
		{ path: "/work", priority: 0.9 },
		{ path: "/about", priority: 0.8 },
		{ path: "/process", priority: 0.8 },
		{ path: "/blogs", priority: 0.7 },
		{ path: "/contact", priority: 0.8 },
	];

	const serviceRoutes = Object.keys(serviceDetailMap).map((slug) => ({
		path: `/services/${slug}`,
		priority: 0.8,
	}));

	const caseStudyRoutes = caseStudies.map((caseStudy) => ({
		path: `/case-studies/${caseStudy.slug}`,
		priority: 0.7,
	}));

	const blogRoutes = blogArticles.map((article) => ({
		path: `/blogs/${article.slug}`,
		priority: 0.6,
	}));

	return [
		...staticRoutes,
		...serviceRoutes,
		...caseStudyRoutes,
		...blogRoutes,
	].map(({ path, priority }) => ({
		url: `${SITE_URL}${path}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority,
	}));
}
