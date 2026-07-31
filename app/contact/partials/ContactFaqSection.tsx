import { FaqSection } from "@/components/shared/FaqSection";
import { contactFaqs } from "../data/contactData";

export function ContactFaqSection() {
	return (
		<FaqSection
			description="The last blockers are usually unspoken. This section answers the questions people tend to keep to themselves right before they decide whether to write."
			eyebrow="FAQ"
			id="faq"
			items={contactFaqs}
			title="Small answers."
			titleAccent="Less guessing."
		/>
	);
}
