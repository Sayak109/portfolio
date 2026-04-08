"use client";

import { Mail, Phone } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type AboutContactActionsProps = {
  email: string;
  phone: string;
  linkedinHref: string;
  githubHref: string;
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

function ActionShell({
  label,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-transparent focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a88beb]/40"
      {...props}
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="relative z-10 transition group-hover:text-[#11131a] group-focus-visible:text-[#11131a]">
        {children}
      </span>
    </button>
  );
}

function ExternalAction({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-transparent focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a88beb]/40"
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="relative z-10 transition group-hover:text-[#11131a] group-focus-visible:text-[#11131a]">
        {children}
      </span>
    </a>
  );
}

export function AboutContactActions({
  email,
  phone,
  linkedinHref,
  githubHref,
}: AboutContactActionsProps) {
  const [statusMessage, setStatusMessage] = useState("");
  const statusTimeoutRef = useRef<number | null>(null);

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
    }, 1800);
  };

  const handlePhoneCopy = async () => {
    const copied = await copyToClipboard(phone);
    announce(copied ? "Phone number copied to clipboard." : "Unable to copy phone number.");
  };

  const handleEmailClick = async () => {
    const fallbackTimer = window.setTimeout(async () => {
      if (document.hasFocus()) {
        const copied = await copyToClipboard(email);
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

    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <ActionShell label={`Email ${email}`} onClick={handleEmailClick}>
        <Mail className="size-5" />
      </ActionShell>
      <ActionShell label={`Copy phone number ${phone}`} onClick={handlePhoneCopy}>
        <Phone className="size-5" />
      </ActionShell>
      <ExternalAction href={linkedinHref} label="LinkedIn profile">
        <LinkedInIcon className="size-5" />
      </ExternalAction>
      <ExternalAction href={githubHref} label="GitHub profile">
        <GitHubIcon className="size-5" />
      </ExternalAction>
      <p className="sr-only" aria-live="polite">
        {statusMessage}
      </p>
    </div>
  );
}
