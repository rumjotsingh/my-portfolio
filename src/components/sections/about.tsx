"use client";

import Image from "next/image";
import { Brain, Code2, Lightbulb, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import {
  aboutContent,
  highlightCards,
  siteConfig,
  stats,
} from "@/data/portfolio";

const iconMap = {
  code: Code2,
  brain: Brain,
  lightbulb: Lightbulb,
  zap: Zap,
};

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About Me"
          title="Engineer who ships real products"
          description={siteConfig.tagline}
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp delay={0.1}>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-1 rounded-[20px] bg-primary/10" />
              <div className="relative overflow-hidden rounded-[20px] border border-border bg-card shadow-premium-lg">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/profile.png"
                    alt={`${siteConfig.name} — Software Engineer`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
                <div className="border-t border-border p-5 text-center">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {siteConfig.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{siteConfig.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[20px] border border-border bg-card p-6 shadow-premium">
              <h3 className="font-heading text-sm font-semibold text-foreground">
                Education
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground">
                {siteConfig.education.degree}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteConfig.education.institution}
              </p>
              <div className="mt-3 flex gap-4 text-sm">
                <span>
                  <span className="text-muted-foreground">CGPA: </span>
                  <span className="font-semibold text-primary">
                    {siteConfig.education.cgpa}
                  </span>
                </span>
                <span>
                  <span className="text-muted-foreground">Grad: </span>
                  <span className="font-semibold text-foreground">
                    {siteConfig.education.graduation}
                  </span>
                </span>
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp className="mb-8 space-y-4">
              <p className="leading-relaxed text-muted-foreground">{aboutContent.intro}</p>
              <p className="leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Career Goals: </span>
                {aboutContent.goals}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Technical Interests: </span>
                {aboutContent.interests}
              </p>
            </FadeUp>

            <StaggerContainer className="grid gap-4 sm:grid-cols-2" staggerDelay={0.08}>
              {highlightCards.map((card) => {
                const Icon = iconMap[card.icon as keyof typeof iconMap];
                return (
                  <StaggerItem key={card.title}>
                    <div className="group rounded-[20px] border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium-lg">
                      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeUp delay={0.3} className="mt-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[20px] border border-border bg-card p-4 text-center shadow-premium"
                  >
                    <p className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
                      {stat.numeric ? (
                        <AnimatedCounter value={stat.numeric} suffix="+" />
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
