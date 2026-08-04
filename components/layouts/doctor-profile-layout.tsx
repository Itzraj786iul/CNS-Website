import * as React from "react";

import type { DoctorProfile } from "@/components/doctors/data";
import { DetailPageLayout } from "@/components/layouts/detail-page-layout";
import { CardGridSection, CardGridItem } from "@/components/common/sections";
import { DoctorProfileCard } from "@/components/doctors/doctor-profile-card";

type DoctorProfileLayoutProps = {
  doctor: DoctorProfile;
  relatedDoctors?: DoctorProfile[];
  cta?: React.ComponentProps<typeof DetailPageLayout>["cta"];
  children?: React.ReactNode;
};

/**
 * Shell for future /doctors/[slug] pages.
 * Composes existing doctor cards and detail layout without new visual design.
 */
function DoctorProfileLayout({
  doctor,
  relatedDoctors = [],
  cta,
  children,
}: DoctorProfileLayoutProps) {
  return (
    <DetailPageLayout
      hero={{
        title: doctor.name,
        description: doctor.designation,
        eyebrow: doctor.qualification,
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Doctors", href: "/doctors" },
          { label: doctor.name },
        ],
      }}
      sidebar={<DoctorProfileCard doctor={doctor} variant="detailed" />}
      cta={cta}
      related={
        relatedDoctors.length > 0 ? (
          <CardGridSection
            embedded
            heading={{
              eyebrow: "Related Specialists",
              title: "You May Also Consult",
              align: "center",
            }}
            density="listing"
          >
            {relatedDoctors.map((related) => (
              <CardGridItem key={related.id}>
                <DoctorProfileCard doctor={related} variant="standard" />
              </CardGridItem>
            ))}
          </CardGridSection>
        ) : undefined
      }
    >
      {children}
    </DetailPageLayout>
  );
}

export { DoctorProfileLayout };
