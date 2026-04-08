import { AboutSection } from "@/components/portfolio/sections/about-section";
import { ExperienceSection } from "@/components/portfolio/sections/experience-section";
import { SectionShell } from "@/components/portfolio/sections/section-shell";
import { ContentSection, GradientDivider, PageContainer } from "@/components/portfolio/portfolio-ui";
import { socialLinks } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <PageContainer>
      <main>
        <AboutSection />

        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <ExperienceSection />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="projects" title="Projects" />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="skills" title="Skills" />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <SectionShell id="education" title="Education" />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
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
