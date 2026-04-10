import { BookOpenText, GraduationCap, MapPin, Trophy } from "lucide-react";

import type { EducationItem } from "@/lib/portfolio-data";

function splitLocation(location: string) {
  const separatorIndex = location.indexOf(",");

  if (separatorIndex === -1) {
    return {
      primary: location,
      secondary: "",
    };
  }

  return {
    primary: location.slice(0, separatorIndex + 1),
    secondary: location.slice(separatorIndex + 1).trim(),
  };
}

export function EducationItemCard({ item }: { item: EducationItem }) {
  const locationParts = splitLocation(item.location);

  return (
    <article className="grid gap-4 lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-3 xl:grid-cols-[188px_minmax(0,1fr)]">
      <div className="relative lg:pb-6">
        <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-px lg:bg-[linear-gradient(180deg,rgba(138,148,255,0.25),rgba(168,139,235,0.85),rgba(248,187,208,0.25))]" />
        <div className="hidden lg:block lg:absolute lg:-right-[10px] lg:top-1">
          <span className="block size-5 rounded-full border-2 border-[#8A94FF] bg-[#05070b] shadow-[0_0_0_4px_rgba(138,148,255,0.12)]" />
          <span className="absolute inset-[5px] rounded-full bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)]" />
        </div>

        <div className="space-y-2.5 pr-4 text-center lg:pr-5 lg:text-right">
          <div>
            <p className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-base font-semibold tracking-[0.1em] text-transparent sm:text-[1.05rem]">
              {item.start}
            </p>
            <p className="mt-1 text-[13px] text-white/58 sm:text-sm lg:text-right">{item.end}</p>
          </div>

          <div className="flex items-start justify-center gap-2 text-[13px] text-white/45 sm:text-sm lg:justify-end">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[#8A94FF]" />
            <span className="text-center leading-5 lg:text-right">
              <span className="block">{locationParts.primary}</span>
              {locationParts.secondary ? <span className="block">{locationParts.secondary}</span> : null}
            </span>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,15,25,0.94),rgba(10,11,19,0.92))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#a88beb]/28 hover:shadow-[0_24px_90px_rgba(168,139,235,0.18)] sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.18),transparent_40%)] opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(138,148,255,0.14),rgba(248,187,208,0.08))] text-[#cfd0ff] shadow-[0_0_30px_rgba(138,148,255,0.08)]">
            <GraduationCap className="size-6" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-[2rem]">
              {item.school}
            </h3>

            <p className="mt-3 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_52%,#F8BBD0_100%)] bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
              {item.title}
            </p>

            <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/48 sm:text-base">
              <BookOpenText className="size-4 text-[#a88beb]" />
              {item.department}
            </p>

            <div className="mt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#a88beb]/18 bg-[rgba(168,139,235,0.12)] px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-[#d9c9ff]">
                <Trophy className="size-3.5" />
                {item.performance}
              </span>
            </div>

            {item.highlights.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2.5">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#8A94FF]/16 bg-[rgba(16,18,28,0.92)] px-3.5 py-2 text-xs text-[#cfd5e5] transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_52%,#F8BBD0_100%)] hover:text-[#11131a] hover:shadow-[0_10px_28px_rgba(168,139,235,0.24)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
