import { label, shell } from "../../lib/classes";

export function NotFoundPage() {
	return (
		<div className="min-h-screen bg-paper pt-[72px] text-ink">
			<main
				className={`${shell} grid min-h-[calc(100vh-72px)] content-center py-24`}
				id="main-content"
			>
				<span className={`${label} text-dl-blue`}>404</span>
				<h1 className="mt-6 max-w-[12ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-ink">
					Page not found.
				</h1>
			</main>
		</div>
	);
}
