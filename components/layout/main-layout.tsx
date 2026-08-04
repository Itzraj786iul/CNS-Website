import * as React from "react";

import { LightboxProvider } from "@/components/common/lightbox";
import { FloatingActions } from "@/components/layout/floating-actions";
import { PageLoadingBar } from "@/components/layout/page-loading-bar";
import { RouteTransition } from "@/components/layout/route-transition";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <LightboxProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <PageLoadingBar />
      <AnnouncementBar />
      <Navbar />
      <RouteTransition className="flex flex-1 flex-col">
        <main
          id="main-content"
          className="flex flex-1 flex-col pb-[calc(4.25rem+max(0.5rem,env(safe-area-inset-bottom)))] md:pb-0"
        >
          {children}
        </main>
      </RouteTransition>
      <Footer />
      <FloatingActions />
    </LightboxProvider>
  );
}

export { MainLayout };
