"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { doctorsContent } from "@/components/doctors/data";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FilterBar() {
  return (
    <Section variant="white" spacing="sm" className="!py-5">
      <AnimatedSection>
        <div className="flex flex-col gap-4 rounded-2xl border border-cns-border/80 bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="relative flex-1">
            <Search
              className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search by name or specialization..."
              aria-label="Search doctors"
              className={cn(
                "h-11 w-full rounded-full border border-cns-border bg-background pl-10 pr-4 text-sm",
                "text-cns-navy placeholder:text-muted-foreground",
                "outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              )}
              readOnly
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {doctorsContent.filterDepartments.map((dept, index) => (
              <button
                key={dept}
                type="button"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-cns-border bg-background text-cns-navy hover:border-primary/30 hover:bg-primary/5"
                )}
              >
                {dept}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden h-11 shrink-0 rounded-full border-cns-border px-4 lg:inline-flex"
          >
            <SlidersHorizontal />
            Filters
          </Button>
        </div>
      </AnimatedSection>
    </Section>
  );
}

export { FilterBar };
