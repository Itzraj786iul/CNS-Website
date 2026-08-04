"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 items-center bg-background py-20 md:py-28">
      <Container className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-destructive">
          Something went wrong
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-cns-navy sm:text-5xl">
          We hit an unexpected error
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Our team has been notified. Please try again, or return to the
          homepage while we resolve the issue.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            size="lg"
            className="h-12 px-6"
            aria-label="Try again"
          >
            <RefreshCw />
            Try Again
          </Button>
          <Button
            nativeButton={false}
            render={
              <Link href="/">
                <Home />
                Back to Homepage
              </Link>
            }
            variant="outline"
            size="lg"
            className="h-12 border-cns-border px-6"
          />
        </div>
      </Container>
    </section>
  );
}
