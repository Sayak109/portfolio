"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CalendarRange, ExternalLink, LayoutPanelTop, Sparkles, Store, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_DELAY = 10_000;
const DESKTOP_STAGE_MAX = 920;
const MOBILE_STAGE_MAX = 360;

type RadialOrbitalIconKey = "store" | "calendar" | "layout";

export interface RadialOrbitalTimelineItem {
  id: number;
  title: string;
  shortTitle: string;
  date: string;
  content: string;
  role: string;
  category: string;
  iconKey: RadialOrbitalIconKey;
  logoSrc?: string;
  relatedIds: readonly number[];
  energy: number;
  techStack: readonly string[];
  details: readonly string[];
  sourceUrl?: string;
  liveUrl?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: readonly RadialOrbitalTimelineItem[];
}

function OrbitIcon({
  iconKey,
  className,
}: {
  iconKey: RadialOrbitalIconKey;
  className?: string;
}) {
  if (iconKey === "calendar") {
    return <CalendarRange className={className} />;
  }

  if (iconKey === "layout") {
    return <LayoutPanelTop className={className} />;
  }

  return <Store className={className} />;
}

function ProjectNodeGraphic({
  item,
  active,
}: {
  item: RadialOrbitalTimelineItem;
  active: boolean;
}) {
  if (item.logoSrc?.trim()) {
    return (
      <Image
        src={item.logoSrc}
        alt={`${item.title} logo`}
        width={active ? 34 : 26}
        height={active ? 34 : 26}
        className={cn(
          "relative object-contain",
          active ? "h-[34px] w-[34px]" : "h-[26px] w-[26px]"
        )}
      />
    );
  }

  return <OrbitIcon iconKey={item.iconKey} className="relative size-4 sm:size-[1.1rem]" />;
}

function ProjectActionButtons({
  liveDemoUrl,
  onOpenDetails,
}: {
  liveDemoUrl?: string;
  onOpenDetails?: () => void;
}) {
  const hasLiveDemo = Boolean(liveDemoUrl);

  return (
    <div className="flex flex-wrap gap-3 border-t border-white/8 pt-4">
      {onOpenDetails ? (
        <button
          type="button"
          onClick={onOpenDetails}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/74 transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
        >
          See Details
          <ArrowRight className="size-4" />
        </button>
      ) : null}

      {hasLiveDemo ? (
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
  );
}

function ProjectOrbitCard({
  item,
  compact = false,
  onOpenDetails,
}: {
  item: RadialOrbitalTimelineItem;
  compact?: boolean;
  onOpenDetails?: () => void;
}) {
  const liveDemoUrl = item.liveUrl ?? item.sourceUrl;

  return (
    <Card className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,11,17,0.97),rgba(7,8,13,0.96))] shadow-[0_16px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#8A94FF_0%,#A88BEB_48%,#F8BBD0_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.1),transparent_30%)]" />

      <CardHeader className={cn("relative space-y-4", compact ? "p-5" : "p-6 sm:p-7")}>
        <div className="flex items-start justify-between gap-3">
          <Badge className="border-[#8A94FF]/18 bg-[rgba(138,148,255,0.1)] px-3 py-1 text-[0.7rem] tracking-[0.14em] text-[#eee6ff]">
            {item.category}
          </Badge>

          <span className="inline-flex items-center gap-2 text-sm text-white/46">
            <CalendarDays className="size-4 text-[#a88beb]" />
            {item.date}
          </span>
        </div>

        <div>
          <CardTitle
            className={cn(
              "bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_52%,#F8BBD0_100%)] bg-clip-text text-transparent",
              compact ? "text-xl" : "text-[1.75rem]"
            )}
          >
            {item.title}
          </CardTitle>
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs tracking-[0.12em] text-white/72">
              {item.role}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className={cn("relative space-y-5", compact ? "px-5 pb-5 pt-0" : "px-6 pb-6 pt-0 sm:px-7 sm:pb-7")}>
        <p className="text-sm leading-7 text-white/68 sm:text-[15px]">{item.content}</p>

        <div className="border-t border-white/8 pt-4">
          <div className="flex flex-wrap gap-2.5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-[#8A94FF]/16 bg-[rgba(16,18,28,0.92)] px-3 py-1.5 text-xs text-[#cfd5e5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <ProjectActionButtons liveDemoUrl={liveDemoUrl} onOpenDetails={onOpenDetails} />
      </CardContent>
    </Card>
  );
}

function ProjectDetailsModal({
  item,
  width,
  compact = false,
  onClose,
}: {
  item: RadialOrbitalTimelineItem;
  width: number;
  compact?: boolean;
  onClose: () => void;
}) {
  const liveDemoUrl = item.liveUrl ?? item.sourceUrl;

  return (
    <div className="absolute inset-0 z-50 bg-transparent">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width }}
      >
        <Card className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(10,11,17,0.985),rgba(7,8,13,0.98))] shadow-[0_20px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#8A94FF_0%,#A88BEB_48%,#F8BBD0_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,148,255,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(248,187,208,0.08),transparent_30%)]" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/72 transition hover:border-transparent hover:bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] hover:text-[#11131a]"
          >
            <X className="size-4" />
          </button>

          <CardHeader className={cn("relative space-y-5", compact ? "p-5 pr-16" : "p-6 pr-16 sm:p-7 sm:pr-16")}>
            <div className="flex items-start justify-between gap-3">
              <Badge className="border-[#8A94FF]/18 bg-[rgba(138,148,255,0.1)] px-3 py-1 text-[0.7rem] tracking-[0.14em] text-[#eee6ff]">
                {item.category}
              </Badge>

              <span className="inline-flex items-center gap-2 text-sm text-white/46">
                <CalendarDays className="size-4 text-[#a88beb]" />
                {item.date}
              </span>
            </div>

            <div>
              <CardTitle
                className={cn(
                  "bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_52%,#F8BBD0_100%)] bg-clip-text text-transparent",
                  compact ? "text-[1.45rem]" : "text-[1.9rem]"
                )}
              >
                {item.title}
              </CardTitle>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs tracking-[0.12em] text-white/72">
                  {item.role}
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className={cn("relative space-y-6", compact ? "px-5 pb-5 pt-0" : "px-6 pb-6 pt-0 sm:px-7 sm:pb-7")}>
            <p className="text-sm leading-7 text-white/68 sm:text-[15px]">{item.content}</p>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/36">Project Details</p>
              <ul className="space-y-3">
                {item.details.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-white/66">
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/8 pt-4">
              <div className="flex flex-wrap gap-2.5">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-[#8A94FF]/16 bg-[rgba(16,18,28,0.92)] px-3 py-1.5 text-xs text-[#cfd5e5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ProjectActionButtons liveDemoUrl={liveDemoUrl} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(DESKTOP_STAGE_MAX);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [modalProjectId, setModalProjectId] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const pulseTimeoutRef = useRef<number | null>(null);
  const safeActiveIndex = activeIndex >= timelineData.length ? 0 : activeIndex;
  const [cardHeight, setCardHeight] = useState(308);
  const modalOpen = modalProjectId !== null;

  useEffect(() => {
    const updateWidth = () => {
      const nextWidth = stageRef.current?.clientWidth ?? DESKTOP_STAGE_MAX;
      setContainerWidth(nextWidth);
    };

    updateWidth();

    const resizeObserver =
      typeof ResizeObserver !== "undefined" && stageRef.current ? new ResizeObserver(updateWidth) : null;

    if (resizeObserver && stageRef.current) {
      resizeObserver.observe(stageRef.current);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
      resizeObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (pulseTimeoutRef.current) {
        window.clearTimeout(pulseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateCardHeight = () => {
      const nextHeight = cardRef.current?.offsetHeight;

      if (nextHeight) {
        setCardHeight(nextHeight);
      }
    };

    updateCardHeight();

    const resizeObserver =
      typeof ResizeObserver !== "undefined" && cardRef.current ? new ResizeObserver(updateCardHeight) : null;

    if (resizeObserver && cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    window.addEventListener("resize", updateCardHeight);

    return () => {
      window.removeEventListener("resize", updateCardHeight);
      resizeObserver?.disconnect();
    };
  }, [safeActiveIndex]);

  useEffect(() => {
    if (timelineData.length <= 1 || modalOpen) {
      return undefined;
    }

    const autoAdvanceTimer = window.setTimeout(() => {
      const nextIndex = (safeActiveIndex + 1) % timelineData.length;
      const nextItem = timelineData[nextIndex];
      const nextPulseEffect: Record<number, boolean> = {};

      nextPulseEffect[nextItem.id] = true;
      nextItem.relatedIds.forEach((relatedId) => {
        nextPulseEffect[relatedId] = true;
      });

      setActiveIndex(nextIndex);
      setPulseEffect(nextPulseEffect);

      if (pulseTimeoutRef.current) {
        window.clearTimeout(pulseTimeoutRef.current);
      }

      pulseTimeoutRef.current = window.setTimeout(() => {
        setPulseEffect({});
      }, 1_200);
    }, AUTO_ADVANCE_DELAY);

    return () => {
      window.clearTimeout(autoAdvanceTimer);
    };
  }, [modalOpen, safeActiveIndex, timelineData]);

  if (timelineData.length === 0) {
    return null;
  }

  const isCompact = containerWidth < 640;
  const stageWidth = Math.min(containerWidth, isCompact ? MOBILE_STAGE_MAX : DESKTOP_STAGE_MAX);
  const ringDiameter = isCompact ? Math.min(stageWidth - 10, 320) : Math.min(stageWidth - 28, 744);
  const radius = ringDiameter / 2;
  const nodeSize = isCompact ? 44 : 56;
  const centerX = stageWidth / 2;
  const centerY = isCompact ? radius + 44 : radius + 72;
  const cardCenterY = isCompact ? centerY : centerY - 22;
  const stageHeight = Math.max(isCompact ? ringDiameter + 140 : ringDiameter + 170, centerY + cardHeight / 2 + 48);
  const activeItem = timelineData[safeActiveIndex] ?? timelineData[0];
  const modalItem = timelineData.find((item) => item.id === modalProjectId) ?? null;
  const cardWidth = Math.min(isCompact ? stageWidth - 92 : 420, stageWidth - (isCompact ? 92 : 132));
  const topNodeBottom = centerY - radius + nodeSize / 2;
  const connectorTop = topNodeBottom + 18;
  const connectorHeight = Math.max(18, cardCenterY - cardHeight / 2 - connectorTop - 8);

  const triggerPulseEffect = (item: RadialOrbitalTimelineItem) => {
    const nextPulseEffect: Record<number, boolean> = {
      [item.id]: true,
    };

    item.relatedIds.forEach((relatedId) => {
      nextPulseEffect[relatedId] = true;
    });

    setPulseEffect(nextPulseEffect);

    if (pulseTimeoutRef.current) {
      window.clearTimeout(pulseTimeoutRef.current);
    }

    pulseTimeoutRef.current = window.setTimeout(() => {
      setPulseEffect({});
    }, 1_200);
  };

  const handleProjectSelect = (index: number) => {
    const selectedItem = timelineData[index];

    if (!selectedItem || modalOpen) {
      return;
    }

    setActiveIndex(index);
    triggerPulseEffect(selectedItem);
  };

  return (
    <div className="relative mx-auto w-full">
      <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(138,148,255,0.18)_0%,rgba(168,139,235,0.12)_40%,transparent_72%)] blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-48 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,187,208,0.12)_0%,rgba(168,139,235,0.08)_44%,transparent_75%)] blur-3xl" />

      <div ref={stageRef} className="relative mx-auto w-full max-w-6xl">
        <div className="relative mx-auto" style={{ width: stageWidth, height: stageHeight }}>
          <div
            className="absolute rounded-full border border-white/8"
            style={{
              width: ringDiameter,
              height: ringDiameter,
              left: centerX - radius,
              top: centerY - radius,
            }}
          />

          <div
            className="absolute rounded-full border border-white/[0.04]"
            style={{
              width: ringDiameter * 0.46,
              height: ringDiameter * 0.46,
              left: centerX - ringDiameter * 0.23,
              top: centerY - ringDiameter * 0.23,
            }}
          />

          <div
            className="absolute rounded-full bg-[radial-gradient(circle,rgba(248,187,208,0.34)_0%,rgba(168,139,235,0.28)_40%,rgba(138,148,255,0.18)_72%,transparent_100%)] blur-2xl"
            style={{
              width: isCompact ? 86 : 112,
              height: isCompact ? 86 : 112,
              left: centerX - (isCompact ? 43 : 56),
              top: centerY - (isCompact ? 43 : 56),
            }}
          />

          <div
            className="absolute flex items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_48%,#F8BBD0_100%)] shadow-[0_0_40px_rgba(168,139,235,0.22)]"
            style={{
              width: isCompact ? 68 : 84,
              height: isCompact ? 68 : 84,
              left: centerX - (isCompact ? 34 : 42),
              top: centerY - (isCompact ? 34 : 42),
            }}
          >
            {!modalOpen ? <div className="absolute inset-[-10px] rounded-full border border-white/10 opacity-70 animate-ping" /> : null}
            <div className="absolute inset-[10px] rounded-full bg-white/58 backdrop-blur-sm" />
            <Sparkles className="relative size-5 text-[#2b2440] sm:size-6" />
          </div>

          {!isCompact ? (
            <div
              className="absolute left-1/2 w-px bg-[linear-gradient(180deg,rgba(138,148,255,0.7),rgba(248,187,208,0.14))]"
              style={{
                top: connectorTop,
                height: connectorHeight,
              }}
            />
          ) : null}

          {timelineData.map((item, index) => {
            const step = 360 / timelineData.length;
            const angle = -90 + (index - safeActiveIndex) * step;
            const radian = (angle * Math.PI) / 180;
            const nodeX = centerX + radius * Math.cos(radian);
            const nodeY = centerY + radius * Math.sin(radian);
            const isActive = index === safeActiveIndex;
            const isPulsing = Boolean(pulseEffect[item.id]);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleProjectSelect(index)}
                className="absolute cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  left: nodeX,
                  top: nodeY,
                  transform: `translate(-50%, -50%) scale(${isActive ? 1.22 : 1})`,
                  zIndex: isActive ? 30 : 10,
                }}
              >
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-all duration-700",
                    !modalOpen && isPulsing ? "animate-pulse opacity-100" : isActive ? "opacity-100" : "opacity-35"
                  )}
                  style={{
                    width: isActive ? nodeSize + 26 : nodeSize + 18,
                    height: isActive ? nodeSize + 26 : nodeSize + 18,
                    background:
                      "radial-gradient(circle, rgba(168,139,235,0.3) 0%, rgba(248,187,208,0.16) 46%, rgba(138,148,255,0) 72%)",
                  }}
                />

                <span
                  className={cn(
                    "relative flex items-center justify-center rounded-full border-2 transition-all duration-300",
                    isActive
                      ? "border-transparent bg-[linear-gradient(135deg,#8A94FF_0%,#A88BEB_50%,#F8BBD0_100%)] text-[#11131a] shadow-[0_0_34px_rgba(168,139,235,0.28)]"
                      : !modalOpen && isPulsing
                        ? "border-[#d8cdff] bg-[#0a0c13] text-white shadow-[0_0_24px_rgba(168,139,235,0.16)]"
                        : "border-white/16 bg-[#05070b] text-white/74"
                  )}
                  style={{ width: nodeSize, height: nodeSize }}
                >
                  {!isActive ? <span className="absolute inset-[1px] rounded-full bg-[#07090f]" /> : null}
                  <ProjectNodeGraphic item={item} active={isActive} />
                </span>

                {!isActive ? (
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.8rem)] -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white/46 transition-all duration-300">
                    {item.shortTitle}
                  </span>
                ) : null}
              </button>
            );
          })}

          <div
            className="absolute"
            style={{
              left: centerX,
              top: cardCenterY,
              width: cardWidth,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              key={activeItem.id}
              ref={cardRef}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: modalOpen ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectOrbitCard
                item={activeItem}
                compact={isCompact}
                onOpenDetails={() => {
                  setModalProjectId(activeItem.id);
                  setPulseEffect({});

                  if (pulseTimeoutRef.current) {
                    window.clearTimeout(pulseTimeoutRef.current);
                  }
                }}
              />
            </motion.div>
          </div>

          {modalItem ? (
            <ProjectDetailsModal
              item={modalItem}
              width={Math.min(isCompact ? stageWidth - 28 : 850, stageWidth - 36)}
              compact={isCompact}
              onClose={() => setModalProjectId(null)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
