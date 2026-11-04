"use client";

import type { ReactNode } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/data";

type ResumeDownloadProps = {
  className?: string;
  children?: ReactNode;
  source?: string;
};

export function ResumeDownload({
  className = "btn-secondary text-sm",
  children,
  source = "unknown",
}: ResumeDownloadProps) {
  const { resume } = siteConfig;

  return (
    <a
      href={resume.href}
      download={resume.filename}
      className={className}
      onClick={() => trackPortfolioEvent("resume_download", { source })}
    >
      {children ?? resume.label}
    </a>
  );
}
