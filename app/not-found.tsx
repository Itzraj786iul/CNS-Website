import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description:
    "The page you requested could not be found at the Center for Neuroscience website.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center bg-background py-12 md:py-16">
      <Container className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-cns-navy sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          The page you are looking for may have been moved, removed, or is
          temporarily unavailable. Let us help you find the right path.
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/">
                <Home />
                Back to Homepage
              </Link>
            }
            size="lg"
            className="h-12 w-full px-6 sm:w-auto"
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/contact">
                <ArrowLeft />
                Contact Support
              </Link>
            }
            variant="outline"
            size="lg"
            className="h-12 w-full border-cns-border px-6 sm:w-auto"
          />
        </div>
      </Container>
    </section>
  );
}
