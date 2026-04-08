import { educationItems } from "@/lib/portfolio-data";
import { ContentSection, PageContainer, PageHero, SurfaceCard } from "@/components/portfolio/portfolio-ui";

export default function EducationPage() {
  return (
    <PageContainer>
      <main>
        <PageHero
          eyebrow="Education"
          title="A dedicated page ready for exact academic details."
          description="This route matches the rest of the portfolio visually and is already prepared for your real college, course, duration, and academic milestones once you want them added."
        />

        <ContentSection className="pt-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {educationItems.map((item) => (
              <SurfaceCard key={item.title} className="p-8">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-5 text-base leading-8 text-white/62">{item.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </ContentSection>
      </main>
    </PageContainer>
  );
}
