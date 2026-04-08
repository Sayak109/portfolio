import {
  ContentSection,
  GradientDivider,
  HeroLogoCard,
  PageContainer,
  SectionHeading,
} from "@/components/portfolio/portfolio-ui";
import { profile, socialLinks } from "@/lib/portfolio-data";

function SectionShell({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <ContentSection id={id} className="pt-0 pb-10 lg:pb-14">
      <SectionHeading eyebrow={`My ${title.toLowerCase()} section`} title={title} />
    </ContentSection>
  );
}

export default function Home() {
  return (
    <PageContainer>
      <main>
        <ContentSection id="about" className="pb-6 pt-2 sm:pt-4 lg:pt-5">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="min-h-[420px] py-2 sm:py-4">
              <p className="text-xs uppercase tracking-[0.34em] text-[#8dd8ff]">{profile.role}</p>
              <h1 className="mt-6 bg-gradient-to-r from-[#9fb4ff] via-[#d7ddff] to-[#ffb6cb] bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
            </div>
            <HeroLogoCard />
          </div>
        </ContentSection>

        <ContentSection className="pt-0 pb-0">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="experience" title="Experience" />
        <ContentSection className="pt-0 pb-0">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="projects" title="Projects" />
        <ContentSection className="pt-0 pb-0">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="skills" title="Skills" />
        <ContentSection className="pt-0 pb-0">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="education" title="Education" />
        <ContentSection className="pt-0 pb-0">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="contact" title="Contact" />

        <ContentSection className="pt-0">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </ContentSection>
      </main>
    </PageContainer>
  );
}
