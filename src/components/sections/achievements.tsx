"use client";

import { Award, Code2, Medal, Rocket, Trophy, Zap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { achievements } from "@/data/portfolio";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  certificate: Award,
  rocket: Rocket,
  zap: Zap,
  code: Code2,
};

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Achievements"
          title="Milestones & recognition"
          description="Academic excellence, competitive programming, production impact, and technical events."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={achievement.title}>
                <div className="group flex h-full gap-5 rounded-[20px] border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium-lg">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
