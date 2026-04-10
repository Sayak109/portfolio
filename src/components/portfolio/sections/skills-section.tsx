import { ContentSection, SectionHeading } from "@/components/portfolio/portfolio-ui";
import { skillGroups } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <ContentSection id="skills" className="relative overflow-hidden pt-0 pb-12">
      <div className="absolute inset-x-0 top-10 h-40 bg-[radial-gradient(circle_at_20%_30%,rgba(138,148,255,0.12),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(248,187,208,0.1),transparent_28%),radial-gradient(circle_at_55%_100%,rgba(52,199,255,0.08),transparent_36%)] blur-3xl" />

      <div className="relative">
        <SectionHeading eyebrow="What I work with" title="Skills" />

        <div className="mx-auto mt-14 max-w-6xl space-y-11">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-4">
                <span className="h-8 w-1 rounded-full bg-[linear-gradient(180deg,#34c7ff_0%,#8A94FF_42%,#F8BBD0_100%)] shadow-[0_0_18px_rgba(138,148,255,0.22)]" />
                <h3 className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_54%,#F8BBD0_100%)] bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-[2rem]">
                  {group.title}
                </h3>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-[36px] items-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,30,0.94),rgba(11,13,19,0.94))] px-5 py-[11px] font-mono text-sm text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_52%,#F8BBD0_100%)] hover:text-[#11131a] hover:shadow-[0_10px_28px_rgba(168,139,235,0.24)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
