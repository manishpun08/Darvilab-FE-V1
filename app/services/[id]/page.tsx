import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { getServiceDetail, serviceDetailMap } from "../data/serviceDetails";
import { ServiceDetailPageContent } from "../partials/ServiceDetailPageContent";

interface ServiceDetailPageProps {
	params: Promise<{ id: string }>;
}

export function generateStaticParams() {
	return Object.keys(serviceDetailMap).map((id) => ({ id }));
}

export async function generateMetadata({
	params,
}: ServiceDetailPageProps): Promise<Metadata> {
	const { id } = await params;
	const service = getServiceDetail(id);

	if (!service) {
		return {};
	}

	const title = `${service.name} — ${SITE_NAME}`;

	return {
		title: service.name,
		description: service.subline,
		openGraph: {
			title,
			description: service.subline,
			type: "website",
		},
		twitter: {
			title,
			description: service.subline,
		},
		alternates: {
			canonical: `/services/${service.slug}`,
		},
	};
}

export default async function Page({ params }: ServiceDetailPageProps) {
	const { id } = await params;
	const service = getServiceDetail(id);

	return <ServiceDetailPageContent service={service} />;
}
