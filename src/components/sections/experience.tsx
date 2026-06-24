"use client";

import { StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { experience } from "@/data/portfolio";

const typeColors: Record<string, string> = {
  Internship: "bg-sky-50 text-sky-700 border-sky-200",
  Freelance: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Personal Venture": "bg-violet-50 text-violet-700 border-violet-200",
  Hackathon: "bg-amber-50 text-amber-700 border-amber-200",
};

export function Experience() {
  return (
    <section id="experience" className="bg-card px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="Experience"
          title="My journey so far"
          description="From internships to hackathons, here's a timeline of my professional growth and hands-on experience."
        />

        <div className="relative">
          <div
            className="absolute top-0 left-[7px] h-full w-px bg-border sm:left-6 lg:left-1/2 lg:-translate-x-px"
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-10" staggerDelay={0.12}>
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <StaggerItem key={`${item.title}-${item.period}`}>
                  <div
                    className={`relative pl-8 sm:pl-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:pl-0 ${
                      isLeft ? "" : "lg:[&>div:last-child]:order-first"
                    }`}
                  >
                    <div
                      className="absolute top-6 left-0 size-3.5 rounded-full border-[3px] border-card bg-primary sm:left-4 lg:left-1/2 lg:-translate-x-1/2"
                      aria-hidden="true"
                    />

                    <div className={isLeft ? "lg:pr-10 lg:text-right" : "lg:col-start-2 lg:pl-10"}>
                      <div className="rounded-[20px] border border-border bg-background p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg">
                        <div
                          className={`mb-3 flex flex-wrap items-center gap-2 ${
                            isLeft ? "lg:justify-end" : ""
                          }`}
                        >
                          <span
                            className={`rounded-lg border px-2.5 py-0.5 text-xs font-medium ${
                              typeColors[item.type] ?? "bg-muted text-muted-foreground"
                            }`}
                          >
                            {item.type}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item.period}
                          </span>
                        </div>

                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">
                          {item.company}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>

                        <div
                          className={`mt-4 flex flex-wrap gap-2 ${
                            isLeft ? "lg:justify-end" : ""
                          }`}
                        >
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
