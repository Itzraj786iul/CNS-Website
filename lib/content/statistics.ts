/**
 * Central statistics configuration.
 *
 * TODO: Replace placeholder values with verified figures from hospital administration
 * before publishing. Set `confirmed: true` only after client approval.
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
    value: null,
    suffix: "+",
    label: "Years of Service",
    confirmed: false,
    todo: "Confirm years of operation with hospital administration",
  },
  {
    id: "specialists",
    value: null,
    suffix: "+",
    label: "Subspecialist Physicians",
    confirmed: false,
    todo: "Confirm active physician count with medical director",
  },
  {
    id: "departments",
    value: null,
    label: "Clinical Departments",
    confirmed: false,
    todo: "Confirm department count with administration",
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
    value: null,
    suffix: "+",
    label: "Subspecialist Physicians",
    confirmed: false,
    todo: "Confirm with HR / medical director",
  },
  {
    id: "subspecialties",
    value: null,
    label: "Subspecialty Areas",
    confirmed: false,
    todo: "Confirm subspecialty list with medical director",
  },
  {
    id: "patients-annually",
    value: null,
    suffix: "+",
    label: "Patients Cared For Annually",
    confirmed: false,
    todo: "Requires verified annual patient volume from administration",
  },
  {
    id: "combined-experience",
    value: null,
    suffix: "+",
    label: "Years Combined Experience",
    confirmed: false,
    todo: "Requires verified aggregate experience figure",
  },
];

/** Research page statistics */
export const researchStatistics: SiteStatistic[] = [
  {
    id: "publications",
    value: null,
    suffix: "+",
    label: "Peer-Reviewed Publications",
    confirmed: false,
    todo: "Confirm publication count with research department",
  },
  {
    id: "active-studies",
    value: null,
    label: "Active Clinical Studies",
    confirmed: false,
    todo: "Confirm with research ethics committee",
  },
  {
    id: "research-faculty",
    value: null,
    suffix: "+",
    label: "Research Faculty",
    confirmed: false,
    todo: "Confirm with research department",
  },
  {
    id: "collaborations",
    value: null,
    suffix: "+",
    label: "Academic Collaborations",
    confirmed: false,
    todo: "Confirm institutional partnerships with administration",
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
