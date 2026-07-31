import { ImageResponse } from "next/og";

export const alt = "DarviLabs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "72px 80px",
					background: "linear-gradient(160deg, #050b1f 0%, #0a1230 55%, #2600ff 160%)",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "16px",
					}}
				>
					<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#bdd8ff" strokeWidth="1.8">
						<path d="M12 3v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9z" />
						<path d="M12 8v0a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4v0a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4z" />
					</svg>
					<span
						style={{
							fontSize: "32px",
							fontWeight: 700,
							color: "#ffffff",
							letterSpacing: "-0.03em",
						}}
					>
						DarviLab<span style={{ color: "#2600ff" }}>.</span>
					</span>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "24px",
					}}
				>
					<span
						style={{
							fontSize: "64px",
							lineHeight: 1.05,
							fontWeight: 700,
							letterSpacing: "-0.05em",
							color: "#ffffff",
							maxWidth: "900px",
						}}
					>
						We build the systems your business runs on.
					</span>
					<span
						style={{
							fontSize: "22px",
							color: "#bdd8ff",
							letterSpacing: "0.01em",
						}}
					>
						Product design, engineering, and systems that hold up after launch.
					</span>
				</div>
			</div>
		),
		{ ...size },
	);
}
