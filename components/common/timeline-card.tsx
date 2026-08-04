import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TimelineCardProps = {
  year: string;
  title: string;
  description?: string;
  className?: string;
  isLast?: boolean;
};

function TimelineCard({
  year,
  title,
  description,
  className,
  isLast = false,
}: TimelineCardProps) {
  return (
    <div
      data-slot="timeline-card"
      className={cn("relative flex gap-4 pb-4", className)}
    >
      <div className="flex flex-col items-center">
        <div className="flex size-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />
        {!isLast ? (
          <div className="mt-1.5 w-px flex-1 bg-border" aria-hidden="true" />
        ) : null}
      </div>

      <Card className="flex-1 card-premium card-premium-hover ring-0">
        <CardContent className="space-y-1 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            {year}
          </p>
          <h3 className="card-title-compact">{title}</h3>
          {description ? (
            <p className="card-desc-compact">{description}</p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}

export { TimelineCard };
