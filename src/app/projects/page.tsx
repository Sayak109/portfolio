import { projects } from "@/lib/portfolio-data";
import { ContentSection, LinkTag, PageContainer, PageHero, SurfaceCard } from "@/components/portfolio/portfolio-ui";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <main>
        <PageHero
          eyebrow="Projects"
          title="Live project references already wired into the portfolio."
          description="These project links come from the resume file already present in the workspace. As you share more design details later, this page can evolve into richer case studies with screenshots, outcomes, stack notes, and contribution breakdowns."
        />

        <ContentSection className="pt-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <SurfaceCard key={project.name} className="flex h-full flex-col p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8dd8ff]">Live project</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{project.name}</h2>
                <p className="mt-5 flex-1 text-base leading-8 text-white/62">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <LinkTag href={project.url} label="Open project" />
                </div>
              </SurfaceCard>
            ))}
          </div>
        </ContentSection>
      </main>
    </PageContainer>
  );
}
