import * as React from "react";

import { PageTransition } from "@/components/common/page-transition";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <PageTransition className="flex flex-1 flex-col">{children}</PageTransition>
      <Footer />
    </>
  );
}

export { MainLayout };
