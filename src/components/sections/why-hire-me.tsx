"use client";

import { Brain, Layout, Lightbulb, Shield, Target, Zap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { whyHireMe } from "@/data/portfolio";

const iconMap = {
  target: Target,
  shield: Shield,
  layout: Layout,
  brain: Brain,
  zap: Zap,
  lightbulb: Lightbulb,
};

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="bg-card px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Why Hire Me"
          title="What I bring to your team"
          description="A combination of production experience, technical depth, and a relentless focus on shipping impactful products."
          align="center"
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {whyHireMe.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-[20px] border border-border bg-background p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium-lg">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
