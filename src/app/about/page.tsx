import { aboutPoints, profile, socialLinks } from "@/lib/portfolio-data";
import {
  BulletList,
  ContentSection,
  LinkTag,
  PageContainer,
  PageHero,
  SectionHeading,
  SurfaceCard,
} from "@/components/portfolio/portfolio-ui";

export default function AboutPage() {
  return (
    <PageContainer>
      <main>
        <PageHero
          eyebrow="About"
          title="A portfolio built to feel intentional before it becomes exhaustive."
          description="This first version focuses on strong structure, strong branding, and a clear narrative for Sayak Panda as a MERN stack developer. The goal is to create a polished base that can absorb richer personal and professional details in later passes."
        />

        <ContentSection className="pt-4">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SurfaceCard className="p-8">
              <SectionHeading
                eyebrow="Profile"
                title={profile.name}
                description={profile.headline}
              />
              <p className="mt-8 text-base leading-8 text-white/62">{profile.shortBio}</p>
            </SurfaceCard>
            <SurfaceCard className="p-8">
              <SectionHeading
                eyebrow="Approach"
                title="How the work is framed"
                description="The design and code direction lean toward maintainability, presentational clarity, and a product-focused reading experience."
              />
              <div className="mt-8">
                <BulletList items={aboutPoints} />
              </div>
            </SurfaceCard>
          </div>
        </ContentSection>

        <ContentSection className="pt-0">
          <SurfaceCard className="p-8">
            <SectionHeading
              eyebrow="Presence"
              title="Profiles and public touchpoints"
              description="The social links recovered from the resume are already available here, and can be expanded with direct contact details once we map the PDF content fully."
            />
            <div className="mt-8 flex flex-wrap gap-3">
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
