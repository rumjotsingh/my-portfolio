"use client";

import { useState } from "react";
import { Download, Mail, Send } from "lucide-react";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons/social";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/portfolio";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "rumjot-singh",
    href: siteConfig.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "rumjotsingh",
    href: siteConfig.github,
    icon: GitHubIcon,
  },
  {
    label: "LeetCode",
    value: "Rumjot",
    href: siteConfig.leetcode,
    icon: LeetCodeIcon,
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-card px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Contact"
          title="Let's build something together"
          description="Open to Software Engineering, Frontend, Full Stack, and AI Engineering roles. Let's connect."
          align="center"
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => (
            <FadeUp key={link.label}>
              <a
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-[20px] border border-border bg-background px-5 py-3 shadow-premium transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-premium-lg"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <link.icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">{link.value}</p>
                </div>
              </a>
            </FadeUp>
          ))}

          <FadeUp delay={0.1}>
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeFileName}
              className="group flex items-center gap-3 rounded-[20px] border border-border bg-background px-5 py-3 shadow-premium transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-premium-lg"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Download className="size-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Resume</p>
                <p className="text-sm font-medium text-foreground">Download PDF</p>
              </div>
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl rounded-[20px] border border-border bg-background p-8 shadow-premium-lg"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-12 rounded-xl border-border bg-card"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="h-12 rounded-xl border-border bg-card"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="resize-none rounded-xl border-border bg-card"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
