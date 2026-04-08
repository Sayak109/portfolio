import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MenuSquare, Sparkles } from "lucide-react";

import { navItems, profile, socialLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090f]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <LogoLink />
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/72 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/30 bg-[#7dd3fc]/12 px-4 py-2 text-sm font-medium text-[#d9f6ff] transition hover:border-[#7dd3fc]/55 hover:bg-[#7dd3fc]/18"
        >
          Let&apos;s talk
          <Mail className="size-4" />
        </Link>
      </div>
    </header>
  );
}

export function MobileNavStrip() {
  return (
    <div className="border-y border-white/8 bg-white/4 md:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.28em] text-white/50">
          <MenuSquare className="size-3.5" />
          Navigate
        </span>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-white/10 bg-[#10131b] px-3 py-1.5 text-sm text-white/72"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="text-sm text-white/45">{profile.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(86,190,255,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,121,198,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_12%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.14]" />
      <div className="relative">
        <SiteHeader />
        <MobileNavStrip />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.34em] text-[#8dd8ff]">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-white/62 sm:text-lg">{description}</p>
    </div>
  );
}

export function ContentSection({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20", className)}>
      {children}
    </section>
  );
}

export function SurfaceCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,20,29,0.92),rgba(10,12,18,0.95))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  side,
}: {
  eyebrow: string;
  title: string;
  description: string;
  side?: ReactNode;
}) {
  return (
    <ContentSection className="pt-12 sm:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <SurfaceCard className="overflow-hidden p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-[#7cd3ff]">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{description}</p>
        </SurfaceCard>
        {side ? side : <HeroLogoCard compact />}
      </div>
    </ContentSection>
  );
}

export function LogoLink() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3.5">
      <Image
        src="/portfolio_logo_nobackground.png"
        alt="Sayak Panda logo"
        width={80}
        height={80}
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        priority
      />
      <div>
        <p className="font-semibold tracking-[0.08em] text-white transition group-hover:text-[#c3eeff]">
          {profile.initials}
        </p>
        <p className="text-xs uppercase tracking-[0.24em] text-white/42">{profile.role}</p>
      </div>
    </Link>
  );
}

export function HeroLogoCard({ compact = false }: { compact?: boolean }) {
  return (
    <SurfaceCard className={cn("relative overflow-hidden", compact ? "p-5" : "p-6")}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,213,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,146,206,0.18),transparent_28%)]" />
      <div className="relative">
        <div className="rounded-[24px] border border-white/10 bg-black/30 p-4">
          <Image
            src="/portfolio_logo.png"
            alt="Portfolio logo artwork"
            width={1200}
            height={1200}
            className="h-auto w-full rounded-[18px] object-cover"
            priority
          />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-2">
            <Image
              src="/portfolio_logo_nobackground.png"
              alt="Transparent logo mark"
              width={64}
              height={64}
              className="h-11 w-11 object-contain"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#8bd9ff]">Brand System</p>
            <p className="mt-1 text-sm leading-6 text-white/62">
              Both logo assets are now part of the landing experience and route-level branding.
            </p>
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}

export function PreviewLinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="group">
      <SurfaceCard className="h-full transition duration-200 group-hover:-translate-y-1 group-hover:border-[#7dd3fc]/28">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
          </div>
          <span className="rounded-full border border-white/10 p-2 text-white/54 transition group-hover:border-[#7dd3fc]/30 group-hover:text-[#c4f1ff]">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </SurfaceCard>
    </Link>
  );
}

export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-white/64">
          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#84d9ff]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LinkTag({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/72 transition hover:border-white/18 hover:bg-white/9 hover:text-white"
    >
      {label}
      <ArrowUpRight className="size-4" />
    </Link>
  );
}
