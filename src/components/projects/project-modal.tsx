"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";
import { getProjectIcon } from "@/lib/project-icons";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusColors: Record<string, string> = {
  Production: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Deployed: "bg-sky-50 text-sky-700 border-sky-200",
  Completed: "bg-slate-50 text-slate-700 border-slate-200",
  "In Development": "bg-amber-50 text-amber-700 border-amber-200",
};

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold text-foreground">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  const Icon = getProjectIcon(project.icon);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto rounded-[20px] border-border p-0 sm:max-w-3xl"
        showCloseButton
      >
        {project.image && project.featured && (
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              className="object-cover object-top"
              sizes="768px"
            />
          </div>
        )}

        <div className="border-b border-border bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8">
          <DialogHeader>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <Badge
                className={cn(
                  "rounded-lg border font-mono text-xs",
                  statusColors[project.status]
                )}
              >
                {project.status}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {project.category}
              </span>
            </div>
            <DialogTitle className="font-heading text-2xl font-semibold sm:text-3xl">
              {project.name}
            </DialogTitle>
            <p className="text-muted-foreground">{project.description}</p>
          </DialogHeader>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <SectionBlock title="Problem">{project.problem}</SectionBlock>
          <SectionBlock title="Solution">{project.solution}</SectionBlock>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Architecture
            </h4>
            <p className="mt-2 rounded-xl border border-border bg-muted/30 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {project.architecture}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Key Features
            </h4>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.impact && project.impact.length > 0 && (
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                Impact Metrics
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.impact.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Challenges Faced
            </h4>
            <ul className="mt-2 space-y-1">
              {project.challenges.map((c) => (
                <li key={c} className="text-sm text-muted-foreground">
                  • {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Lessons Learned
            </h4>
            <ul className="mt-2 space-y-1">
              {project.lessons.map((l) => (
                <li key={l} className="text-sm text-muted-foreground">
                  • {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Technologies Used
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-border pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/30"
              >
                <GitHubIcon className="size-4" />
                GitHub Repository
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
