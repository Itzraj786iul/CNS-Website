"use client";

import { motion } from "framer-motion";

import { departmentsContent } from "@/components/departments/data";
import { DepartmentDetailCard } from "@/components/departments/department-detail-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { fadeUp } from "@/lib/motion";
import { getCardGridClass } from "@/lib/card-variants";

function DepartmentsGridSection() {
  return (
    <Section variant="default" spacing="default" className="!pt-6">
      <AnimatedSection stagger className={getCardGridClass("standard")}>
        {departmentsContent.departments.map((dept) => (
          <motion.div key={dept.title} variants={fadeUp}>
            <DepartmentDetailCard
              variant="standard"
              title={dept.title}
              description={dept.description}
              icon={dept.icon}
              iconVariant={dept.iconVariant}
              treatments={[...dept.treatments]}
              href={dept.href}
            />
          </motion.div>
        ))}
      </AnimatedSection>
    </Section>
  );
}

export { DepartmentsGridSection };
