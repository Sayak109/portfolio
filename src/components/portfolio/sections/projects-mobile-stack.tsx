"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CalendarDays, CalendarRange, ChevronDown, ExternalLink, LayoutPanelTop, Store } from "lucide-react";

import type { PortfolioProjectItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function MobileProjectIcon({ project }: { project: PortfolioProjectItem }) {
  if (project.logoSrc?.trim()) {
    return (
      <Image
        src={project.logoSrc}
        alt={`${project.title} logo`}
        width={34}
        height={34}
        className="h-[34px] w-[34px] object-contain"
      />
    );
  }

  if (project.iconKey === "calendar") {
    return <CalendarRange className="size-5" />;
  }

  if (project.iconKey === "layout") {
    return <LayoutPanelTop className="size-5" />;
  }

  return <Store className="size-5" />;
}

export function ProjectsMobileStack({ projects }: { projects: readonly PortfolioProjectItem[] }) {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      {projects.map((project) => {
        const liveDemoUrl =
          ("liveUrl" in project && typeof project.liveUrl === "string" ? project.liveUrl : undefined) ??
          ("sourceUrl" in project && typeof project.sourceUrl === "string" ? project.sourceUrl : undefined);
        const isExpanded = expandedProjectId === project.id;

        return (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,13,21,0.96),rgba(9,10,16,0.98))] shadow-[0_18px_55px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#34c7ff_0%,#8A94FF_42%,#A88BEB_72%,#F8BBD0_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.1),transparent_36%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative p-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-[16px] border border-[#8A94FF]/16 bg-[linear-gradient(135deg,rgba(138,148,255,0.12),rgba(248,187,208,0.08))] text-[#d5ddff] shadow-[0_0_24px_rgba(138,148,255,0.08)]">
                  <MobileProjectIcon project={project} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.45rem] font-semibold tracking-tight text-white">{project.title}</h3>

                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 text-sm text-white/46">
                      <CalendarDays className="size-4 text-[#a88beb]" />
                      {project.period}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[#8A94FF]/18 bg-[rgba(138,148,255,0.1)] px-3 py-1 text-[0.7rem] tracking-[0.14em] text-[#eee6ff]">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs tracking-[0.12em] text-white/72">
                  {project.role}
                </span>
              </div>

              <p className="mt-5 text-[15px] leading-8 text-white/68">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2.5 border-t border-white/8 pt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[10px] border border-[#8A94FF]/16 bg-[rgba(16,18,28,0.92)] px-3 py-1.5 text-xs text-[#cfd5e5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setExpandedProjectId((current) => (current === project.id ? null : project.id))}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/74 transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
                >
                  {isExpanded ? "Hide Details" : "See Details"}
                  <ChevronDown className={cn("size-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                </button>

                {liveDemoUrl ? (
                  <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/74 transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
                  >
                    Live Demo
                    <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/34">
                    Live Demo
                    <ExternalLink className="size-4" />
                  </span>
                )}
              </div>

              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-out",
                  isExpanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="min-h-0">
                  <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="mb-4 text-xs uppercase tracking-[0.26em] text-white/36">Project Details</p>
                    <ul className="space-y-3">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-7 text-white/66">
                          <span className="mt-2.5 size-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {liveDemoUrl ? (
                      <a
                        href={liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-sm font-semibold text-transparent"
                      >
                        View live project
                        <ArrowRight className="size-4 text-[#d8b8ff]" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
