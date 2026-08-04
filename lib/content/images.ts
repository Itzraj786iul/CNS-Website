/**
 * CNS photography system — semantic paths for client-ready image replacement.
 *
 * Drop JPG/WEBP files into /public/images/{category}/ using the filenames below.
 * Components render a branded fallback when files are not yet uploaded.
 */

export const IMAGE_CATEGORIES = {
  hospitalExterior: "hospital-exterior",
  reception: "reception",
  consultationRoom: "consultation-room",
  mriSuite: "mri-suite",
  ctScanRoom: "ct-scan-room",
  icu: "icu",
  operationTheatre: "operation-theatre",
  emergency: "emergency",
  patientCare: "patient-care",
  neuroRehabilitation: "neuro-rehabilitation",
  doctors: "doctors",
  waitingArea: "waiting-area",
  diagnostics: "diagnostics",
  pharmacy: "pharmacy",
  ambulance: "ambulance",
  advancedTechnology: "advanced-technology",
  events: "events",
  research: "research",
} as const;

export type ImageCategory = (typeof IMAGE_CATEGORIES)[keyof typeof IMAGE_CATEGORIES];

export type HospitalImageRef = {
  src: string;
  alt: string;
  category?: ImageCategory;
};

const BASE = "/images";

/** Doctor portrait slot — e.g. doctor-01.jpg */
export function doctorImagePath(index: number, ext: "jpg" | "webp" = "jpg") {
  return `${BASE}/doctors/doctor-${String(index).padStart(2, "0")}.${ext}`;
}

/** Facility / infrastructure image */
export function facilityImagePath(slug: string, ext: "jpg" | "webp" = "jpg") {
  return `${BASE}/facilities/${slug}.${ext}`;
}

/** Homepage section image */
export function homeImagePath(slug: string, ext: "jpg" | "webp" = "jpg") {
  return `${BASE}/home/${slug}.${ext}`;
}

/** Gallery image by category folder */
export function galleryImagePath(
  category: string,
  slug: string,
  ext: "jpg" | "webp" = "jpg"
) {
  return `${BASE}/gallery/${category}/${slug}.${ext}`;
}

/** Build image ref with category for fallback styling */
export function hospitalImage(
  src: string,
  alt: string,
  category?: ImageCategory
): HospitalImageRef {
  return { src, alt, category };
}

/** Shared aspect ratio classes for HospitalImage */
export const imageAspectClasses = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  gallery: "aspect-[4/5]",
} as const;

export type ImageAspect = keyof typeof imageAspectClasses;

/** Category display labels for fallback states (not medical claims) */
export const categoryLabels: Record<ImageCategory, string> = {
  "hospital-exterior": "Hospital Exterior",
  reception: "Reception",
  "consultation-room": "Consultation Room",
  "mri-suite": "MRI Suite",
  "ct-scan-room": "CT Scan Room",
  icu: "ICU",
  "operation-theatre": "Operation Theatre",
  emergency: "Emergency",
  "patient-care": "Patient Care",
  "neuro-rehabilitation": "Neuro Rehabilitation",
  doctors: "Physician Portrait",
  "waiting-area": "Waiting Area",
  diagnostics: "Diagnostics",
  pharmacy: "Pharmacy",
  ambulance: "Ambulance",
  "advanced-technology": "Advanced Technology",
  events: "Events",
  research: "Research",
};
