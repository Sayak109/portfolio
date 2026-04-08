import { ContentSection, SectionHeading } from "@/components/portfolio/portfolio-ui";

export function SectionShell({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <ContentSection id={id} className="pt-0 pb-10">
      <SectionHeading eyebrow={`My ${title.toLowerCase()} section`} title={title} />
    </ContentSection>
  );
}
