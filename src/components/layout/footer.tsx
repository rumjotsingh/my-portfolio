import { Mail } from "lucide-react";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/portfolio";

const socialLinks = [
  { href: siteConfig.github, icon: GitHubIcon, label: "GitHub" },
  { href: siteConfig.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
  { href: siteConfig.leetcode, icon: LeetCodeIcon, label: "LeetCode" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <link.icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>

        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <span className="font-medium text-foreground">Next.js</span> and{" "}
          <span className="font-medium text-foreground">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
