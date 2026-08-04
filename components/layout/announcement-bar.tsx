"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { Container } from "@/components/common/container";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type AnnouncementBarProps = {
  message?: string | null;
  href?: string;
  className?: string;
};

function AnnouncementBar({
  message = siteConfig.announcement,
  href,
  className,
}: AnnouncementBarProps) {
  const [dismissedMessage, setDismissedMessage] = React.useState<string | null>(
    null
  );

  if (!message || dismissedMessage === message) {
    return null;
  }

  const content = (
    <p className="text-center text-sm font-medium text-white">{message}</p>
  );

  return (
    <div
      data-slot="announcement-bar"
      className={cn("relative bg-primary text-white", className)}
    >
      <Container className="flex items-center justify-center py-2.5 pr-10">
        {href ? (
          <Link
            href={href}
            className="transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {content}
          </Link>
        ) : (
          content
        )}
        <button
          type="button"
          onClick={() => setDismissedMessage(message)}
          className="absolute right-4 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Dismiss announcement"
        >
          <X className="size-4" />
        </button>
      </Container>
    </div>
  );
}

export { AnnouncementBar };
