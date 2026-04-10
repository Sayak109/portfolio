import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";

import { AboutContactActions } from "@/components/portfolio/sections/about-contact-actions";
import { ContentSection, HeroLogoCard } from "@/components/portfolio/portfolio-ui";
import { aboutStats, profile, socialLinks } from "@/lib/portfolio-data";

export function AboutSection() {
  const actionButtonClass =
    "inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]";

  const linkedinHref = socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "https://linkedin.com";
  const githubHref = socialLinks.find((link) => link.label === "GitHub")?.href ?? "https://github.com";

  return (
    <ContentSection id="about" className="pb-10 pt-2 sm:pt-4 lg:pt-5">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-center lg:gap-3 xl:gap-6">
        <div className="py-4 lg:pr-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm tracking-[0.12em] text-[#74c8ff]">
            <ArrowRight className="size-4 text-[#a88beb]" />
            <span className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-transparent">
              Available for new opportunities
            </span>
          </p>
          <h1 className="mt-6 bg-[linear-gradient(135deg,#34c7ff_0%,#8A94FF_38%,#A88BEB_68%,#F8BBD0_100%)] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="mt-6 max-w-none text-base leading-8 text-white/76 sm:text-lg sm:leading-9">
            I&apos;m Sayak Panda, a MERN Stack Developer who builds production-ready web
            applications from backend architecture to frontend delivery. I specialize in designing
            scalable REST APIs, integrating complex third-party services, and writing code that
            performs well under real-world conditions. My work covers the full stack from database
            design and query optimization to building responsive interfaces with React.js and
            Next.js. I take ownership of what I build and I&apos;m focused on writing systems that
            are clean, secure, and built to last.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className={actionButtonClass}>
              View My Work
              <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className={actionButtonClass}>
              <Mail className="size-4" />
              Contact Me
            </a>
            <a href={profile.resumeDownloadUrl} download className={actionButtonClass}>
              <ArrowDownToLine className="size-4" />
              Resume
            </a>
          </div>

          <AboutContactActions
            email={profile.email}
            phone={profile.phone}
            linkedinHref={linkedinHref}
            githubHref={githubHref}
          />
        </div>
        <HeroLogoCard className="mx-auto lg:translate-x-0" />
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <div className="mx-auto grid max-w-5xl justify-items-center gap-x-6 gap-y-8 text-center sm:grid-cols-2 xl:grid-cols-4">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <p className="bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium tracking-[0.08em] text-white/58 sm:text-sm">
                {stat.label}
              </p>
              <div className="mx-auto mt-4 h-px w-20 max-w-full bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
