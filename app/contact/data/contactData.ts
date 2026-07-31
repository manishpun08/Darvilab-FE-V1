interface ContactFaq {
	question: string;
	answer: string;
}

export const contactFaqs: ContactFaq[] = [
	{
		question: "How quickly do you respond?",
		answer:
			"Within one business day. With a clear next step or a few useful questions, not just an acknowledgement.",
	},
	{
		question: "Do I need a detailed project brief?",
		answer:
			"No. A rough description of your situation is enough to start. We will ask for what we need.",
	},
	{
		question: "Will there be a sales call?",
		answer:
			"Only if it makes sense for both sides. The first response is always written - we will not schedule a call before we understand your situation.",
	},
	{
		question: "Can you estimate pricing immediately?",
		answer:
			"Not until we understand what is actually needed. We can usually give a range or direction after one conversation.",
	},
	{
		question: "What if I am not sure what I need yet?",
		answer:
			"That is fine. Most conversations start with a problem, not a solution. Tell us what is broken, slow, or stalling and we will help figure out the rest.",
	},
];
