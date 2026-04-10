import { ContentSection, SectionHeading } from "@/components/portfolio/portfolio-ui";
import { EducationItemCard } from "@/components/portfolio/sections/education-item-card";
import { educationItems } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <ContentSection id="education" className="pt-0 pb-10">
      <SectionHeading eyebrow="Where I've studied" title="Education" />

      <div className="mt-8 space-y-8">
        {educationItems.map((item) => (
          <EducationItemCard key={`${item.school}-${item.start}-${item.title}`} item={item} />
        ))}
      </div>
    </ContentSection>
  );
}
