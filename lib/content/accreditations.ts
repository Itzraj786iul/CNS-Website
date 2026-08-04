/**
 * Accreditation & trust badges.
 *
 * TODO: Enable entries only after client provides verified accreditation documents.
 * Set `enabled: true` and add logo path once approved.
 */

export type AccreditationType =
  | "nabh"
  | "iso"
  | "icmr"
  | "medical-association"
  | "university-affiliation"
  | "award";

export type AccreditationItem = {
  id: string;
  type: AccreditationType;
  label: string;
  /** Short descriptor — avoid unverified claims */
  description?: string;
  /** When false, item is hidden */
  enabled: boolean;
  /** Path to logo in /public — e.g. /images/trust/nabh.svg */
  logoSrc?: string | null;
  todo?: string;
};

export const accreditations: AccreditationItem[] = [
  {
    id: "nabh",
    type: "nabh",
    label: "NABH",
    description: "National accreditation",
    enabled: false,
    logoSrc: null,
    todo: "Enable after NABH certificate is confirmed by client",
  },
  {
    id: "iso",
    type: "iso",
    label: "ISO",
    description: "Quality management",
    enabled: false,
    logoSrc: null,
    todo: "Enable after ISO certification is confirmed by client",
  },
  {
    id: "icmr",
    type: "icmr",
    label: "ICMR",
    description: "Research recognition",
    enabled: false,
    logoSrc: null,
    todo: "Enable after ICMR affiliation is confirmed by client",
  },
  {
    id: "medical-association",
    type: "medical-association",
    label: "Medical Associations",
    enabled: false,
    logoSrc: null,
    todo: "Add association logos after client approval",
  },
  {
    id: "university-affiliation",
    type: "university-affiliation",
    label: "University Affiliations",
    enabled: false,
    logoSrc: null,
    todo: "Add university partnership logos after client approval",
  },
  {
    id: "awards",
    type: "award",
    label: "Awards & Recognition",
    enabled: false,
    logoSrc: null,
    todo: "Enable only for verified awards provided by client",
  },
];

export function getEnabledAccreditations() {
  return accreditations.filter((item) => item.enabled);
}
