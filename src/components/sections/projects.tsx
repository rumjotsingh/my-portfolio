"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { ProjectModal } from "@/components/projects/project-modal";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { type Project, projects } from "@/data/portfolio";
import { getProjectIcon } from "@/lib/project-icons";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  Production: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Deployed: "bg-sky-50 text-sky-700 border-sky-200",
  Completed: "bg-slate-50 text-slate-700 border-slate-200",
  "In Development": "bg-amber-50 text-amber-700 border-amber-200",
};

function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const Icon = getProjectIcon(project.icon);

  if (project.image) {
    return (
      <div className={cn("relative aspect-[16/10] w-full overflow-hidden bg-muted", className)}>
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100",
        className
      )}
    >
      <div className="flex size-16 items-center justify-center rounded-2xl bg-white text-primary shadow-premium">
        <Icon className="size-8" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const isReversed = index % 2 === 1;
  const Icon = getProjectIcon(project.icon);

  return (
    <FadeUp delay={index * 0.1}>
      <motion.article
        className={cn(
          "group grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
          isReversed && "lg:[direction:rtl]"
        )}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3 }}
      >
        <button
          type="button"
          onClick={() => onOpen(project)}
          className={cn("text-left", isReversed && "lg:[direction:ltr]")}
        >
          <div className="overflow-hidden rounded-[20px] border border-border shadow-premium-lg transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(14,165,233,0.12)]">
            <ProjectVisual project={project} />
          </div>
        </button>

        <div className={cn(isReversed && "lg:[direction:ltr]")}>
          <p className="font-mono text-sm font-medium text-primary">
            Featured Case Study {String(index + 1).padStart(2, "0")}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                {project.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">{project.category}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Problem
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Solution
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          {project.impact && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.impact.map((metric) => (
                <span
                  key={metric}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              View Case Study
              <ArrowUpRight className="size-4" />
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/30"
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
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </FadeUp>
  );
}

function ProjectGridCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const Icon = getProjectIcon(project.icon);

  return (
    <StaggerItem>
      <motion.button
        type="button"
        onClick={() => onOpen(project)}
        className="group flex h-full w-full flex-col rounded-[20px] border border-border bg-card p-5 text-left shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium-lg"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary">
              {project.name}
            </h3>
          </div>
          <Badge
            className={cn(
              "shrink-0 rounded-lg border font-mono text-[10px]",
              statusColors[project.status]
            )}
          >
            {project.status}
          </Badge>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.name} GitHub`}
            >
              <GitHubIcon className="size-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink className="size-4" />
            </a>
          )}
          <span className="ml-auto text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            View details →
          </span>
        </div>
      </motion.button>
    </StaggerItem>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Projects"
          title="Complete project showcase"
          description="From production CRM platforms to full-stack marketplaces — 11+ real projects with live demos and case studies."
        />

        <div className="mb-20">
          <h3 className="mb-10 font-heading text-2xl font-semibold text-foreground">
            Featured Projects
          </h3>
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-10 font-heading text-2xl font-semibold text-foreground">
            All Projects
            <span className="ml-3 font-mono text-base font-normal text-muted-foreground">
              ({projects.length})
            </span>
          </h3>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
            {projects.map((project) => (
              <ProjectGridCard key={project.id} project={project} onOpen={handleOpen} />
            ))}
          </StaggerContainer>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
