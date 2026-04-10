import nodemailer from "nodemailer";

export const runtime = "nodejs";

let cachedTransporter: nodemailer.Transporter | null = null;

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

function getMissingEnvironmentKeys() {
  const requiredKeys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO_EMAIL",
  ] as const;

  return requiredKeys.filter((key) => !process.env[key]);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const smtpPort = Number(process.env.SMTP_PORT);

  if (!Number.isFinite(smtpPort)) {
    throw new Error("SMTP_PORT must be a valid number.");
  }

  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return cachedTransporter;
}

export async function POST(request: Request) {
  const missingEnvironmentKeys = getMissingEnvironmentKeys();

  if (missingEnvironmentKeys.length > 0) {
    console.error("Contact form is missing environment variables:", missingEnvironmentKeys);

    return Response.json(
      { error: "Mail service is not configured yet. Please add the required environment variables." },
      { status: 500 }
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 160 || message.length > 5_000) {
    return Response.json({ error: "Submitted message is too long." }, { status: 400 });
  }

  const fromName = process.env.CONTACT_FROM_NAME?.trim() || "Portfolio Contact";
  const fromEmail = process.env.SMTP_USER!;
  const toEmail = process.env.CONTACT_TO_EMAIL!;

  const text = [
    "New portfolio contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New portfolio contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space: pre-wrap; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">${message}</div>
    </div>
  `;

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);

    return Response.json(
      {
        error:
          error instanceof Error && error.message === "SMTP_PORT must be a valid number."
            ? error.message
            : "Unable to send your message right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
