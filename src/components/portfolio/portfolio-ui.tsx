import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, MenuSquare } from "lucide-react";

import { ShapeLandingBackground } from "@/components/ui/shape-landing-hero";
import { navItems, profile, socialLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090f]/70 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 py-2 sm:px-6 lg:px-8">
        <LogoLink />
        <nav className="hidden items-center gap-1 justify-self-center rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/72 transition hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={profile.resumeDriveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
        >
          <ArrowDownToLine className="size-4" />
          Resume
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
              target="_blank"
              rel="noreferrer"
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
    <ShapeLandingBackground>
      <div className="relative min-h-screen">
        <SiteHeader />
        <MobileNavStrip />
        {children}
        <SiteFooter />
      </div>
    </ShapeLandingBackground>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm tracking-[0.12em] text-[#74c8ff]">
        <ArrowRight className="size-4" />
        {eyebrow}
      </p>
      <h2 className="bg-[linear-gradient(135deg,#34c7ff_0%,#8A94FF_38%,#A88BEB_68%,#F8BBD0_100%)] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
        {title}
      </h2>
      <div className="mt-6 h-1 w-28 rounded-full bg-[linear-gradient(135deg,#34c7ff_0%,#8A94FF_38%,#A88BEB_68%,#F8BBD0_100%)]" />
    </div>
  );
}

export function GradientDivider() {
  return (
    <div className="mx-auto h-px w-full max-w-[calc(100%-2rem)] bg-[linear-gradient(90deg,transparent_0%,#8A94FF_1.5%,#A88BEB_48%,#F8BBD0_98.5%,transparent_100%)] opacity-70 sm:max-w-[calc(100%-4rem)] lg:max-w-[calc(100%-20rem)] xl:max-w-[calc(100%-24rem)]" />
  );
}

export function ContentSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-2 sm:px-6 lg:px-8 lg:py-4", className)}
    >
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
    <Link href="/" className="group inline-flex items-center gap-4">
      <Image
        src="/portfolio_logo_nobackground.png"
        alt="Sayak Panda logo"
        width={120}
        height={120}
        className="h-[4.5rem] w-[4.5rem] scale-[2.1] object-contain sm:h-[5.5rem] sm:w-[5.5rem]"
        priority
      />
      <div className="hidden sm:block">
        <p className="bg-gradient-to-r from-[#9fb4ff] via-[#d7ddff] to-[#ffb6cb] bg-clip-text text-[1.7rem] font-semibold leading-none text-transparent transition group-hover:from-[#b4c5ff] group-hover:via-[#eef2ff] group-hover:to-[#ffc7d7]">
          Sayak Panda
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/45">MERN Stack Developer</p>
      </div>
    </Link>
  );
}

export function HeroLogoCard({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative lg:translate-x-[30%]", compact ? "px-4 py-2" : "px-4 py-2", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,148,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.14),transparent_34%)] blur-3xl" />
      <div className="relative flex justify-center">
        <div className="h-[275px] w-[275px] overflow-hidden rounded-full">
          <Image
            src="/portfolio_logo.png"
            alt="Portfolio logo artwork"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
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
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/72 transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
    >
      {label}
      <ArrowUpRight className="size-4" />
    </Link>
  );
}
