"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function DesktopHeaderNavigation() {
  const [activeHref, setActiveHref] = useState<string>(navItems[0]?.href ?? "#about");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    const updateNavigationState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));

      let nextActiveHref: string = navItems[0]?.href ?? "#about";

      for (const item of navItems) {
        const sectionId = item.href.replace("#", "");
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
          continue;
        }

        if (sectionElement.getBoundingClientRect().top <= 148) {
          nextActiveHref = item.href;
        }
      }

      setActiveHref(nextActiveHref);
    };

    const handleViewportChange = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateNavigationState();
      });
    };

    updateNavigationState();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <>
      <nav className="hidden items-center gap-1 justify-self-center rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
        {navItems.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                isActive
                  ? "bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] text-[#11131a]"
                  : "text-white/72 hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/6">
        <div
          className="h-full bg-[linear-gradient(90deg,#34c7ff_0%,#8A94FF_38%,#A88BEB_68%,#F8BBD0_100%)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
