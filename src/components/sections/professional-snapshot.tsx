"use client";

import { StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { professionalSnapshot } from "@/data/portfolio";

export function ProfessionalSnapshot() {
  return (
    <section
      id="snapshot"
      className="border-y border-border bg-card px-6 py-24 lg:px-8 lg:py-32"
      aria-label="Professional Snapshot for recruiters"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Professional Snapshot"
          title="At a glance"
          description="Structured overview optimized for recruiters, hiring managers, and AI resume-screening systems."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <StaggerContainer className="lg:col-span-2" staggerDelay={0.05}>
            <div className="flex flex-wrap gap-2">
              {professionalSnapshot.roles.map((role) => (
                <StaggerItem key={role}>
                  <span className="inline-block rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-premium transition-colors hover:border-primary/30 hover:bg-primary/5">
                    {role}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
            {professionalSnapshot.metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="rounded-[20px] border border-border bg-background p-5 text-center shadow-premium">
                  <p className="font-heading text-2xl font-semibold text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
