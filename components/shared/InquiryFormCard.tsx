"use client";

import { primaryButton } from "../../lib/classes";

type InquiryFormCardProps = {
	badgeLabel?: string;
	buttonLabel?: string;
	className?: string;
	companyBodyLabel?: string;
	companyLabel?: string;
	emailLabel?: string;
	fullNameLabel?: string;
	metaLabel?: string;
	problemBodyLabel?: string;
	problemLabel?: string;
	problemPlaceholder?: string;
	responseNote?: string;
	subjectPrefix?: string;
};

function buildMailtoHref({
	companyBodyLabel,
	companyName,
	fullName,
	problem,
	problemBodyLabel,
	subjectPrefix,
	workEmail,
}: {
	companyBodyLabel: string;
	companyName: string;
	fullName: string;
	problem: string;
	problemBodyLabel: string;
	subjectPrefix: string;
	workEmail: string;
}) {
	const subject = companyName
		? `${subjectPrefix} - ${fullName} / ${companyName}`
		: `${subjectPrefix} - ${fullName}`;
	const body = [
		`Full Name: ${fullName}`,
		`Work Email: ${workEmail}`,
		`${companyBodyLabel}: ${companyName || "Not provided"}`,
		"",
		problemBodyLabel,
		problem,
	].join("\n");

	return `mailto:hello@darvilabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function InquiryFormCard({
	badgeLabel = "Tell us what is blocking progress",
	buttonLabel = "Send this to our team",
	className = "",
	companyBodyLabel = "Company Name",
	companyLabel = "Company Name / Optional",
	emailLabel = "Work Email",
	fullNameLabel = "Full Name",
	metaLabel = "Four fields. Nothing else.",
	problemBodyLabel = "What are you trying to solve?",
	problemLabel = "What Are You Trying To Solve?",
	problemPlaceholder = "Describe the situation in your own words. No need to frame it as a brief.",
	responseNote,
	subjectPrefix = "DarviLabs inquiry",
}: InquiryFormCardProps) {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		const data = new FormData(form);
		const fullName = (data.get("fullName") ?? "").toString().trim();
		const workEmail = (data.get("workEmail") ?? "").toString().trim();
		const companyName = (data.get("companyName") ?? "").toString().trim();
		const problem = (data.get("problem") ?? "").toString().trim();

		window.location.href = buildMailtoHref({
			companyBodyLabel,
			companyName,
			fullName,
			problem,
			problemBodyLabel,
			subjectPrefix,
			workEmail,
		});
	}

	const fieldClassName =
		"min-h-14 rounded-[6px] border border-line bg-white px-4 text-[15px] text-ink outline-none transition placeholder:text-[#98a1b5] focus:border-dl-blue focus:shadow-[0_0_0_3px_rgba(38,0,255,0.12)] motion-reduce:transition-none";

	return (
		<div
			className={`border border-line bg-white px-[clamp(20px,3vw,36px)] py-[clamp(24px,3vw,36px)] ${className}`}
		>
			<div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
				<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-dl-blue">
					{badgeLabel}
				</span>
				<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
					{metaLabel}
				</span>
			</div>

			<form className="mt-8 grid gap-7" onSubmit={handleSubmit}>
				<div className="grid gap-6 md:grid-cols-2">
					<label className="grid gap-3">
						<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
							{fullNameLabel}
						</span>
						<input
							className={fieldClassName}
							name="fullName"
							required
							type="text"
						/>
					</label>

					<label className="grid gap-3">
						<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
							{emailLabel}
						</span>
						<input
							className={fieldClassName}
							name="workEmail"
							required
							type="email"
						/>
					</label>
				</div>

				<label className="grid gap-3">
					<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
						{companyLabel}
					</span>
					<input className={fieldClassName} name="companyName" type="text" />
				</label>

				<label className="grid gap-3">
					<span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
						{problemLabel}
					</span>
					<textarea
						className={`${fieldClassName} min-h-[152px] py-4 leading-[1.65]`}
						name="problem"
						placeholder={problemPlaceholder}
						required
					/>
				</label>

				<div className="grid gap-3 pt-3">
					<div className="flex justify-stretch md:justify-end">
						<button
							className={`${primaryButton} min-h-14 w-full px-5 md:w-auto`}
							type="submit"
						>
							<span>{buttonLabel}</span>
							<span aria-hidden="true">↗</span>
						</button>
					</div>
					{responseNote ? (
						<p className="text-[12px] leading-[1.6] text-muted md:text-right">
							{responseNote}
						</p>
					) : null}
				</div>
			</form>
		</div>
	);
}
