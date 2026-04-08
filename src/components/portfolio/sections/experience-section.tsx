import { ExperienceItemCard } from "@/components/portfolio/sections/experience-item-card";
import { ContentSection, SectionHeading } from "@/components/portfolio/portfolio-ui";
import { experienceItems } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <ContentSection id="experience" className="pt-0 pb-10">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />

      <div className="mt-8 space-y-8">
        {experienceItems.map((item) => (
          <ExperienceItemCard key={`${item.company}-${item.start}-${item.role}`} item={item} />
        ))}
      </div>
    </ContentSection>
  );
}
