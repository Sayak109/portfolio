import { experienceItems } from "@/lib/portfolio-data";
import { ContentSection, PageContainer, PageHero, SurfaceCard } from "@/components/portfolio/portfolio-ui";

export default function ExperiencePage() {
  return (
    <PageContainer>
      <main>
        <PageHero
          eyebrow="Experience"
          title="Structured for growth, ready for resume-accurate expansion."
          description="This page is already laid out as a proper experience timeline, so when you share exact roles, companies, and dates, we can replace the first-pass content without redesigning the page."
        />

        <ContentSection className="pt-4">
          <div className="grid gap-6">
            {experienceItems.map((item) => (
              <SurfaceCard key={item.title} className="p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8dd8ff]">{item.period}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </ContentSection>
      </main>
    </PageContainer>
  );
}
