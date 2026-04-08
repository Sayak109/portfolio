"use client";

import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Building2, Clock3, MapPin } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/lib/portfolio-data";

export function ExperienceItemCard({ item }: { item: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="grid gap-4 lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-3 xl:grid-cols-[188px_minmax(0,1fr)]">
      <div className="relative lg:pb-6">
        <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-px lg:bg-[linear-gradient(180deg,rgba(138,148,255,0.25),rgba(168,139,235,0.85),rgba(248,187,208,0.25))]" />
        <div className="hidden lg:block lg:absolute lg:-right-[10px] lg:top-1">
          <span className="block size-5 rounded-full border-2 border-[#8A94FF] bg-[#05070b] shadow-[0_0_0_4px_rgba(138,148,255,0.12)]" />
          <span className="absolute inset-[5px] rounded-full bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)]" />
        </div>

        <div className="space-y-3 pr-4 text-center">
          <div>
            <p className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-lg font-semibold tracking-[0.12em] text-transparent">
              {item.start}
            </p>
            <p className="mt-1 inline-flex items-center justify-center gap-2 text-sm text-white/58 lg:justify-start">
              <Clock3 className="size-4 text-[#a88beb]" />
              {item.end}
            </p>
          </div>

          <p className="inline-flex items-center justify-center gap-2 text-sm text-white/45 lg:justify-start">
            <MapPin className="size-4 text-[#8A94FF]" />
            {item.location}
          </p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,25,0.94),rgba(10,11,19,0.92))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#a88beb]/28 hover:shadow-[0_24px_90px_rgba(168,139,235,0.18)] sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.18),transparent_40%)] opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(138,148,255,0.14),rgba(248,187,208,0.08))] text-[#cfd0ff] shadow-[0_0_30px_rgba(138,148,255,0.08)]">
            {item.logoSrc ? (
              <Image
                src={item.logoSrc}
                alt={`${item.company} logo`}
                width={46}
                height={46}
                className="h-12 w-12 object-contain"
              />
            ) : (
              <Building2 className="size-6" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-[2rem]">
              {item.company}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
                {item.role}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a88beb]/18 bg-[rgba(168,139,235,0.12)] px-2.5 py-1 text-xs font-medium text-[#d9c9ff]">
                <BriefcaseBusiness className="size-3.5" />
                {item.employmentType}
              </span>
            </div>

            <p className="mt-5 max-w-4xl text-[12px] leading-7 text-white/66 sm:text-[14px]">
              {item.summary}
            </p>

            <button
              type="button"
              onClick={() => setIsExpanded((value) => !value)}
              className="mt-7 inline-flex items-center gap-2 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-sm font-semibold text-transparent transition hover:brightness-125"
            >
              {isExpanded ? "Hide details" : item.ctaLabel}
              <ArrowRight className={cn("size-4 text-[#d8b8ff] transition-transform duration-300", isExpanded && "rotate-90")} />
            </button>

            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isExpanded ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <ul className="space-y-3 rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  {item.details.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-white/68">
                      <span className="mt-2.5 size-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
