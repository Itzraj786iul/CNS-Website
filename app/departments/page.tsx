import { DepartmentsPageContent } from "@/components/departments/departments-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Departments",
  description:
    "Explore CNS departments — neurology, neurosurgery, psychiatry, rehabilitation, critical care, diagnostics, and more.",
  path: "/departments",
});

export default function DepartmentsPage() {
  return <DepartmentsPageContent />;
}
