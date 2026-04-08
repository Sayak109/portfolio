import { skillGroups } from "@/lib/portfolio-data";
import { ContentSection, PageContainer, PageHero, SurfaceCard } from "@/components/portfolio/portfolio-ui";

export default function SkillsPage() {
  return (
    <PageContainer>
      <main>
        <PageHero
          eyebrow="Skills"
          title="Grouped for fast scanning by recruiters, clients, and collaborators."
          description="The skills page keeps the same design system while organizing the stack into practical buckets that are easy to refine later with proficiency levels, tools, and framework-specific depth."
        />

        <ContentSection className="pt-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SurfaceCard key={group.title} className="p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8dd8ff]">{group.title}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/74"
                    >
                      {item}
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
