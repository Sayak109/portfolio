import Link from "next/link";

import {
  BulletList,
  ContentSection,
  HeroLogoCard,
  LinkTag,
  PageContainer,
  PreviewLinkCard,
  SectionHeading,
  SurfaceCard,
} from "@/components/portfolio/portfolio-ui";
import { aboutPoints, heroStats, profile, projects, socialLinks } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <PageContainer>
      <main>
        <ContentSection className="pb-8 pt-12 sm:pt-16 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <SurfaceCard className="overflow-hidden p-8 sm:p-10">
              <p className="inline-flex rounded-full border border-[#7dd3fc]/20 bg-[#7dd3fc]/10 px-4 py-1.5 text-xs uppercase tracking-[0.34em] text-[#8dd8ff]">
                {profile.role}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">{profile.headline}</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">{profile.shortBio}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full border border-[#7dd3fc]/28 bg-[#7dd3fc]/14 px-5 py-3 text-sm font-medium text-[#d9f6ff] transition hover:border-[#7dd3fc]/52 hover:bg-[#7dd3fc]/20"
                >
                  View projects
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/82 transition hover:border-white/18 hover:bg-white/8"
                >
                  Contact me
                </Link>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/8 bg-black/18 p-4">
                    <p className="text-xs uppercase tracking-[0.26em] text-white/38">{stat.label}</p>
                    <p className="mt-3 text-sm leading-6 text-white/70">{stat.value}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
            <HeroLogoCard />
          </div>
        </ContentSection>

        <ContentSection className="pt-8">
          <SectionHeading
            eyebrow="First Pass Design"
            title="A unified visual foundation for the full portfolio"
            description="Every route now shares the same atmosphere, spacing logic, and card language so we can refine each page individually later without rebuilding the entire site."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <PreviewLinkCard href="/about" title="About" description="A personal summary, working style, and the foundation of the portfolio story." />
            <PreviewLinkCard href="/experience" title="Experience" description="Structured experience cards for work snapshots, responsibilities, and growth areas." />
            <PreviewLinkCard href="/projects" title="Projects" description="A dedicated project route with live links pulled from the resume assets already available." />
            <PreviewLinkCard href="/skills" title="Skills" description="Stack groupings across frontend, backend, and shipping-ready development work." />
            <PreviewLinkCard href="/education" title="Education" description="A clean section ready for academic details and future credentials." />
            <PreviewLinkCard href="/contact" title="Contact" description="A styled contact form section and quick links for direct outreach." />
          </div>
        </ContentSection>

        <ContentSection>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SurfaceCard className="p-8">
              <SectionHeading
                eyebrow="About Snapshot"
                title="Designing for clarity first"
                description="The site direction leans into a dark editorial product feel with bright cyan and soft pink energy from the logo system."
              />
              <div className="mt-8">
                <BulletList items={aboutPoints} />
              </div>
            </SurfaceCard>
            <SurfaceCard className="p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[#8bd9ff]">Live Links From Resume</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Selected project references</h2>
                </div>
                <LinkTag href="/projects" label="See all" />
              </div>
              <div className="mt-8 grid gap-4">
                {projects.map((project) => (
                  <div key={project.name} className="rounded-[24px] border border-white/8 bg-black/18 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                      <LinkTag href={project.url} label="Open live" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/62">{project.summary}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </ContentSection>

        <ContentSection className="pt-0">
          <SurfaceCard className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#8dd8ff]">Connect</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Start with the structure, then refine each page.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/62">{profile.availability}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <LinkTag key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
          </SurfaceCard>
        </ContentSection>
      </main>
    </PageContainer>
  );
}
