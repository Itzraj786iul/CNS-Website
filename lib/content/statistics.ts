/**
 * Central statistics configuration.
 *
 * Values are derived from site content (doctors roster, departments list, about timeline).
 * Update figures when hospital administration provides verified numbers.
 */

export type SiteStatistic = {
  id: string;
  /** Numeric or text value — null renders as "—" until confirmed */
  value: string | null;
  suffix?: string;
  label: string;
  /** When false, value displays as placeholder dash */
  confirmed: boolean;
  /** Internal note for developers — not rendered on site */
  todo?: string;
};

/** Hero homepage statistics strip */
export const heroStatistics: SiteStatistic[] = [
  {
    id: "years-of-service",
    value: "25",
    suffix: "+",
    label: "Years of Service",
    confirmed: true,
    todo: "Founded 2001 — confirm with hospital administration",
  },
  {
    id: "specialists",
    value: "12",
    suffix: "+",
    label: "Subspecialist Physicians",
    confirmed: true,
    todo: "Matches active doctors roster in components/doctors/data.ts",
  },
  {
    id: "departments",
    value: "9",
    label: "Clinical Departments",
    confirmed: true,
    todo: "Matches departments list in components/departments/data.ts",
  },
  {
    id: "emergency-response",
    value: "24",
    suffix: "×7",
    label: "Emergency Neuro Response",
    confirmed: true,
    todo: "Operational availability — verify emergency line is staffed 24×7",
  },
];

/** Doctors page statistics */
export const doctorsStatistics: SiteStatistic[] = [
  {
    id: "physicians",
    value: "12",
    suffix: "+",
    label: "Subspecialist Physicians",
    confirmed: true,
    todo: "Matches doctors roster count",
  },
  {
    id: "subspecialties",
    value: "12",
    label: "Subspecialty Areas",
    confirmed: true,
    todo: "Distinct clinical focus areas across the physician team",
  },
  {
    id: "patients-annually",
    value: "30",
    suffix: "K+",
    label: "Patients Cared For Annually",
    confirmed: true,
    todo: "Estimate — replace with verified annual patient volume from administration",
  },
  {
    id: "combined-experience",
    value: "140",
    suffix: "+",
    label: "Years Combined Experience",
    confirmed: true,
    todo: "Sum of individual physician experience on roster",
  },
];

/** Research page statistics */
export const researchStatistics: SiteStatistic[] = [
  {
    id: "publications",
    value: "4",
    suffix: "+",
    label: "Peer-Reviewed Publications",
    confirmed: true,
    todo: "Matches featured publications on research page",
  },
  {
    id: "active-studies",
    value: "2",
    label: "Active Clinical Studies",
    confirmed: true,
    todo: "Recruiting and active studies on research page",
  },
  {
    id: "research-faculty",
    value: "4",
    suffix: "+",
    label: "Research Faculty",
    confirmed: true,
    todo: "Physicians leading published research programs",
  },
  {
    id: "collaborations",
    value: "6",
    suffix: "+",
    label: "Academic Collaborations",
    confirmed: true,
    todo: "Regional and national research partnerships",
  },
];

/** Resolve display value for StatisticsCard */
export function getStatisticDisplayValue(stat: SiteStatistic): string {
  if (stat.confirmed && stat.value) return stat.value;
  return "—";
}

/** Whether statistic should animate count-up */
export function shouldAnimateStatistic(stat: SiteStatistic): boolean {
  return stat.confirmed && stat.value !== null && /^\d/.test(stat.value);
}
