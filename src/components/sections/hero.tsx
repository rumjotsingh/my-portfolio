"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { AnimatedGrid } from "@/components/shared/animated-grid";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { availabilityBadges, heroTechBadges, siteConfig } from "@/data/portfolio";

const floatingPositions = [
  { top: "18%", left: "8%", delay: 0 },
  { top: "25%", right: "10%", delay: 0.5 },
  { top: "55%", left: "5%", delay: 1 },
  { top: "60%", right: "8%", delay: 1.5 },
  { top: "40%", left: "15%", delay: 0.8 },
  { top: "35%", right: "18%", delay: 1.2 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      <AnimatedGrid />

      {heroTechBadges.map((badge, i) => {
        const pos = floatingPositions[i % floatingPositions.length];
        return (
          <motion.div
            key={badge}
            className="absolute hidden rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-medium text-muted-foreground shadow-premium lg:block"
            style={{ top: pos.top, left: pos.left, right: pos.right }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: pos.delay + 0.8, duration: 0.5 },
              scale: { delay: pos.delay + 0.8, duration: 0.5 },
              y: { delay: pos.delay + 1.3, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {badge}
          </motion.div>
        );
      })}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          {availabilityBadges.map((badge, i) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-premium sm:text-sm sm:px-4 sm:py-2"
            >
              {i === 0 && (
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
              )}
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="mb-4 font-mono text-sm font-medium tracking-wider text-primary uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {siteConfig.title}
        </motion.p>

        <motion.h1
          className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Turning{" "}
          <span className="text-primary">Ideas Into Reality</span>
          <br />
          Through Code & Craft
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frontend & Full-Stack Developer building modern interfaces, scalable apps,
          and products that go from concept to production.
        </motion.p>

        <motion.p
          className="mx-auto mt-3 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {siteConfig.location}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <MagneticButton href="#projects">
            <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-premium transition-all hover:bg-primary/90 hover:shadow-premium-lg">
              <Sparkles className="size-4" />
              View Projects
            </span>
          </MagneticButton>
          <MagneticButton href="#contact">
            <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground shadow-premium transition-all hover:border-primary/30 hover:shadow-premium-lg">
              Contact Me
            </span>
          </MagneticButton>
          <MagneticButton href={siteConfig.resumeUrl} download={siteConfig.resumeFileName}>
            <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground shadow-premium transition-all hover:border-primary/30 hover:shadow-premium-lg">
              <Download className="size-4" />
              Download Resume
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-2 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {heroTechBadges.slice(0, 6).map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { delay: 1, duration: 2, repeat: Infinity },
        }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
