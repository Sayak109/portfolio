import {
  type RadialOrbitalTimelineItem,
  default as RadialOrbitalTimeline,
} from "@/components/ui/radial-orbital-timeline";
import { ProjectsMobileStack } from "@/components/portfolio/sections/projects-mobile-stack";
import { ContentSection, SectionHeading } from "@/components/portfolio/portfolio-ui";
import { projectItems } from "@/lib/portfolio-data";

const timelineData: RadialOrbitalTimelineItem[] = projectItems.map((project) => ({
  id: project.id,
  title: project.title,
  shortTitle: project.shortTitle,
  date: project.period,
  content: project.summary,
  role: project.role,
  category: project.category,
  iconKey: project.iconKey,
  logoSrc: project.logoSrc,
  relatedIds: project.relatedIds,
  energy: project.energy,
  techStack: project.techStack,
  details: project.details,
  sourceUrl: "sourceUrl" in project && typeof project.sourceUrl === "string" ? project.sourceUrl : undefined,
  liveUrl: "liveUrl" in project && typeof project.liveUrl === "string" ? project.liveUrl : undefined,
}));

export function ProjectsSection() {
  return (
    <ContentSection id="projects" className="pt-0 pb-12">
      <SectionHeading eyebrow="What I've built" title="Projects" />

      <div className="mt-2 lg:hidden">
        <ProjectsMobileStack projects={projectItems} />
      </div>

      <div className="hidden lg:block">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </ContentSection>
  );
}
