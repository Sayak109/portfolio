import { AboutSection } from "@/components/portfolio/sections/about-section";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { EducationSection } from "@/components/portfolio/sections/education-section";
import { ExperienceSection } from "@/components/portfolio/sections/experience-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { SkillsSection } from "@/components/portfolio/sections/skills-section";
import { ContentSection, GradientDivider, PageContainer } from "@/components/portfolio/portfolio-ui";

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
        <ProjectsSection />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <SkillsSection />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <EducationSection />
        <ContentSection className="max-w-none px-1 pt-0 pb-0 sm:px-1.5 lg:px-2">
          <GradientDivider />
        </ContentSection>
        <ContactSection />
      </main>
    </PageContainer>
  );
}
