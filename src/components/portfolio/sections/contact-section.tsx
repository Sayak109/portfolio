"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, SendHorizonal } from "lucide-react";

import { ContentSection, SectionHeading } from "@/components/portfolio/portfolio-ui";
import { profile, socialLinks } from "@/lib/portfolio-data";

type ContactCardProps = {
  eyebrow: string;
  value: string;
  actionLabel: string;
  icon: ReactNode;
  onClick?: () => void;
  href?: string;
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554V14.87c0-1.333-.027-3.049-1.86-3.049-1.86 0-2.144 1.45-2.144 2.949v5.682H9.335V9h3.413v1.561h.049c.468-.889 1.61-1.826 3.313-1.826 3.543 0 4.196 2.332 4.196 5.359zM5.337 7.433a2.066 2.066 0 1 1 0-4.131 2.066 2.066 0 0 1 0 4.131M7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.083 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.302 1.23A11.5 11.5 0 0 1 12 5.804c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.607-2.804 5.624-5.475 5.92.43.372.814 1.103.814 2.223 0 1.606-.015 2.902-.015 3.297 0 .319.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  }
}

function ContactCardShell({ eyebrow, value, actionLabel, icon, onClick, href }: ContactCardProps) {
  const sharedClassName =
    "group relative block w-full overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,25,0.94),rgba(10,11,19,0.92))] p-4 text-left shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#a88beb]/28 hover:shadow-[0_24px_90px_rgba(168,139,235,0.14)]";

  const content = (
    <>
      <span className="absolute left-0 top-0 h-full w-[3px] bg-[linear-gradient(180deg,#34c7ff_0%,#8A94FF_48%,#F8BBD0_100%)]" />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.1),transparent_34%)] opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

      <div className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-2 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-x-4">
        <div className="row-span-2 inline-flex size-11 shrink-0 items-center justify-center rounded-[12px] border border-[#8A94FF]/16 bg-[linear-gradient(135deg,rgba(138,148,255,0.14),rgba(248,187,208,0.08))] text-[#d6dbff] shadow-[0_0_24px_rgba(138,148,255,0.08)] sm:row-span-1">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/38">{eyebrow}</p>
          <p className="mt-1 break-words text-[0.97rem] font-semibold leading-tight text-white sm:text-[1.08rem]">
            {value}
          </p>
        </div>

        <div className="col-start-2 shrink-0 text-left sm:col-start-3 sm:row-start-1 sm:text-right">
          <span className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_52%,#F8BBD0_100%)] bg-clip-text text-[0.88rem] font-semibold text-transparent">
            {actionLabel}
            <ArrowUpRight className="size-4 text-[#dcb9ff]" />
          </span>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={sharedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={sharedClassName}>
      {content}
    </button>
  );
}

export function ContactSection() {
  const linkedinHref = socialLinks.find((item) => item.label === "LinkedIn")?.href ?? "#";
  const githubHref = socialLinks.find((item) => item.label === "GitHub")?.href ?? "#";
  const [statusMessage, setStatusMessage] = useState("");
  const statusTimeoutRef = useRef<number | null>(null);
  const [formStatus, setFormStatus] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        window.clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  const announce = (message: string) => {
    setStatusMessage(message);

    if (statusTimeoutRef.current) {
      window.clearTimeout(statusTimeoutRef.current);
    }

    statusTimeoutRef.current = window.setTimeout(() => {
      setStatusMessage("");
      statusTimeoutRef.current = null;
    }, 2000);
  };

  const handlePhoneCopy = async () => {
    const copied = await copyToClipboard(profile.phone);
    announce(copied ? "Phone number copied to clipboard." : "Unable to copy phone number.");
  };

  const handleEmailClick = async () => {
    announce("Opening your mail app...");

    const fallbackTimer = window.setTimeout(async () => {
      if (document.hasFocus()) {
        const copied = await copyToClipboard(profile.email);
        announce(copied ? "Email copied to clipboard." : "Unable to copy email address.");
      }
    }, 900);

    window.addEventListener(
      "blur",
      () => {
        window.clearTimeout(fallbackTimer);
      },
      { once: true }
    );

    window.location.href = `mailto:${profile.email}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio inquiry from ${formValues.name}`;
    const body = [
      `Name: ${formValues.name}`,
      `Email: ${formValues.email}`,
      "",
      "Message:",
      formValues.message,
    ].join("\n");

    setFormStatus("Opening your mail app with this message...");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <ContentSection id="contact" className="relative overflow-hidden pt-0 pb-14">
      <div className="absolute inset-x-0 top-8 h-52 bg-[radial-gradient(circle_at_16%_18%,rgba(138,148,255,0.12),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(248,187,208,0.1),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(52,199,255,0.08),transparent_36%)] blur-3xl" />

      <div className="relative">
        <SectionHeading eyebrow="Let's work together" title="Contact" />

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] xl:items-start">
          <div className="min-w-0 space-y-5">
            <ContactCardShell
              eyebrow="Email Me"
              value={profile.email}
              actionLabel="Send a Mail"
              icon={<Mail className="size-6" />}
              onClick={handleEmailClick}
            />
            <ContactCardShell
              eyebrow="Phone"
              value={profile.phone}
              actionLabel="Copy Number"
              icon={<Phone className="size-6" />}
              onClick={handlePhoneCopy}
            />
            <ContactCardShell
              eyebrow="LinkedIn"
              value="sayak-panda-ba0859263"
              actionLabel="Connect"
              icon={<LinkedInIcon className="size-6" />}
              href={linkedinHref}
            />
            <ContactCardShell
              eyebrow="GitHub"
              value="Sayak109"
              actionLabel="Follow"
              icon={<GitHubIcon className="size-6" />}
              href={githubHref}
            />

            <p className="min-h-6 px-1 text-sm text-white/46" aria-live="polite">
              {statusMessage}
            </p>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,25,0.94),rgba(10,11,19,0.92))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.12),transparent_40%)]" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="contact-name" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-white/44">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formValues.name}
                  onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                  placeholder="John Doe"
                  className="w-full rounded-[20px] border border-white/10 bg-[rgba(10,11,17,0.84)] px-6 py-5 text-lg text-white outline-none transition placeholder:text-white/34 focus:border-[#a88beb]/36 focus:bg-[rgba(12,14,22,0.95)]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-white/44">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formValues.email}
                  onChange={(event) => setFormValues((current) => ({ ...current, email: event.target.value }))}
                  placeholder="john@example.com"
                  className="w-full rounded-[20px] border border-white/10 bg-[rgba(10,11,17,0.84)] px-6 py-5 text-lg text-white outline-none transition placeholder:text-white/34 focus:border-[#a88beb]/36 focus:bg-[rgba(12,14,22,0.95)]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-white/44">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={7}
                  value={formValues.message}
                  onChange={(event) => setFormValues((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Tell me about your project or idea..."
                  className="min-h-[220px] w-full resize-none rounded-[20px] border border-white/10 bg-[rgba(10,11,17,0.84)] px-6 py-5 text-lg text-white outline-none transition placeholder:text-white/34 focus:border-[#a88beb]/36 focus:bg-[rgba(12,14,22,0.95)]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-lg font-semibold text-white transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
              >
                <SendHorizonal className="size-5" />
                Send Message
              </button>

              <p className="min-h-6 text-sm text-white/46" aria-live="polite">
                {formStatus}
              </p>
            </form>
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
