import { FadeUp } from "@/components/shared/fade-up";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <FadeUp className={cn("mb-16", align === "center" && "text-center", className)}>
      <p className="mb-3 font-mono text-sm font-medium tracking-wider text-primary uppercase">
        {label}
      </p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
