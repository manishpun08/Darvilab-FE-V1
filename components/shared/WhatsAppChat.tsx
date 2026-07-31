"use client";

import { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "9779713557020";

export function WhatsAppChat() {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	function handleSend() {
		const text = message.trim();
		if (!text) return;
		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
		window.open(url, "_blank");
		setMessage("");
		setIsOpen(false);
	}

	function handleKeyDown(e: React.KeyboardEvent) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	}

	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
			{isOpen && (
				<div className="w-[360px] rounded-2xl bg-paper shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden border border-line animate-in fade-in slide-in-from-bottom-4 duration-200">
					<div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
						<FaWhatsapp className="size-6 text-white" />
						<div>
							<p className="text-sm font-semibold text-white">DarviLabs</p>
							<p className="text-[11px] text-white/80">We usually reply within a day</p>
						</div>
					</div>

					<div className="px-5 py-4 bg-[#e8f5e9] min-h-[120px]">
						<div className="inline-block rounded-lg bg-paper px-4 py-3 text-sm text-ink shadow-sm max-w-[80%]">
							👋 Hi there! Got a project in mind? Let us know how we can help.
						</div>
					</div>

					<div className="flex items-center gap-2 border-t border-line px-4 py-3">
						<input
							ref={inputRef}
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder="Type your message..."
							className="min-w-0 flex-1 rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none placeholder:text-muted focus:border-dl-blue"
						/>
						<button
							onClick={handleSend}
							disabled={!message.trim()}
							className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
							aria-label="Send message"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-5"
							>
								<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
							</svg>
						</button>
					</div>
				</div>
			)}

			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
				aria-label={isOpen ? "Close chat" : "Chat with us on WhatsApp"}
			>
				{isOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-7"
					>
						<path
							fillRule="evenodd"
							d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<FaWhatsapp className="size-8" />
				)}
			</button>
		</div>
	);
}
