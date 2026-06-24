"use client";

import { StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          description="A comprehensive stack spanning frontend, backend, databases, AI, and developer tools."
        />

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title} className="h-full">
              <div className="group flex h-[330px] w-full flex-col rounded-[20px] border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium-lg sm:h-[350px] sm:p-8">
                <h3 className="shrink-0 font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="mt-5 flex flex-1 flex-wrap content-start gap-2 sm:mt-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 group-hover:border-primary/10 hover:border-primary/30 hover:bg-primary/5 hover:text-primary sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
