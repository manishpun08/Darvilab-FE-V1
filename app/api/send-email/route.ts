import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, workEmail, companyName, problem, subject } =
      await request.json();

    if (!fullName || !workEmail || !problem) {
      return NextResponse.json(
        { error: "Full name, email, and problem are required." },
        { status: 400 },
      );
    }

    const body = [
      `Full Name: ${fullName}`,
      `Work Email: ${workEmail}`,
      `Company Name: ${companyName || "Not provided"}`,
      "",
      "What are you trying to solve?",
      problem,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "DarviLabs Inquiry <no-reply@noreply.darvilabs.com>",
      to: "mausamwork@gmail.com",
      subject: subject || `New inquiry from ${fullName}`,
      text: body,
      replyTo: workEmail,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
