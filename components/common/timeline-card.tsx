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
      className={cn("relative flex gap-6 pb-10", className)}
    >
      <div className="flex flex-col items-center">
        <div className="flex size-3 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />
        {!isLast ? (
          <div className="mt-2 w-px flex-1 bg-cns-border" aria-hidden="true" />
        ) : null}
      </div>

      <Card className="flex-1 card-premium card-premium-hover ring-0">
        <CardContent className="space-y-2 px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            {year}
          </p>
          <h3 className="font-heading text-lg font-semibold text-cns-navy">
            {title}
          </h3>
          {description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}

export { TimelineCard };
