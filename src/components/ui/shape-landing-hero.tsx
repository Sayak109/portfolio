"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.10]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function ShapeField({ fixed = false }: { fixed?: boolean }) {
  const containerClass = fixed ? "fixed inset-0" : "absolute inset-0";

  return (
    <>
      <div className={cn(containerClass, "pointer-events-none overflow-hidden")}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04] blur-3xl" />

        <ElegantShape
          delay={0.3}
          width={860}
          height={180}
          rotate={12}
          gradient="from-indigo-500/[0.13]"
          className="left-[-22%] top-[14%] md:left-[-10%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={520}
          height={120}
          rotate={-15}
          gradient="from-amber-500/[0.12]"
          className="right-[8%] top-[12%] md:right-[12%] md:top-[12%]"
        />

        <ElegantShape
          delay={0.4}
          width={420}
          height={98}
          rotate={-9}
          gradient="from-violet-500/[0.10]"
          className="left-[4%] bottom-[8%] md:left-[10%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={210}
          height={62}
          rotate={22}
          gradient="from-cyan-500/[0.13]"
          className="left-[30%] top-[10%] md:left-[28%] md:top-[8%]"
        />

        <ElegantShape
          delay={0.7}
          width={760}
          height={200}
          rotate={-14}
          gradient="from-rose-500/[0.08]"
          className="right-[-18%] bottom-[4%] md:right-[-4%] md:bottom-[2%]"
        />
      </div>

      <div
        className={cn(
          containerClass,
          "pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/84"
        )}
      />
    </>
  );
}

export function ShapeLandingBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#030303]">
      <ShapeField fixed />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
      <ShapeField />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm tracking-wide text-white/60">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-white/40 sm:text-lg md:text-xl">
              Crafting exceptional digital experiences through innovative design and cutting-edge
              technology.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { HeroGeometric };
