export const business = {
  headline: "Interior Design & Turnkey Contracting",
  supporting: "From planning and civil work to services coordination, custom furniture, finishing, and final handover — we manage your interior project from start to finish.",
  address: "Shop-3, Floor-GRD, 6/6A, Aga Irani Building, Balashet Madurkar Marg, Elphinstone Railway Station (West), Delisle Road, Mumbai – 400013.",
  email: "infinitespace09@gmail.com",
};

export const workshopMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`;
export const workshopDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address)}`;

export const processSteps = [
  { title: "Consultation & Site Visit", description: "Discuss the space, requirements and practical site conditions." },
  { title: "Requirements & BOQ Preparation", description: "Define the required work and prepare a bill of quantities and quotation." },
  { title: "Planning & Design Coordination", description: "Coordinate layouts, design decisions and the agreed execution scope." },
  { title: "Material Selection & Procurement", description: "Select finishes and materials, then coordinate procurement for the project." },
  { title: "Civil Work & Services Coordination", description: "Bring civil work, electrical and plumbing requirements together on site." },
  { title: "Furniture Production & Finishing", description: "Coordinate custom furniture, carpentry, painting and polishing." },
  { title: "Installation & Quality Checks", description: "Install the agreed work and check workmanship and finishing details." },
  { title: "Final Inspection & Handover", description: "Review completed work, address finishing items and hand over the space." },
];

export const serviceGroups = [
  { title: "Residential Interior Contracting", summary: "Practical, coordinated execution for homes and apartments.", items: ["Complete residential interior execution", "Modular kitchens and wardrobes", "Custom furniture and carpentry", "Finishing and installation"] },
  { title: "Commercial & Retail Fit-Outs", summary: "Interior execution for workplaces, retail outlets and salons.", items: ["Retail outlets and salon interiors", "Office and commercial spaces", "Custom counters, furniture and fixtures", "Interior fit-out coordination"] },
  { title: "Turnkey Contracting", summary: "The required interior workstreams brought together under one coordinated project scope.", items: ["Civil and masonry work", "Electrical and plumbing coordination", "POP and gypsum ceilings", "Painting and polishing", "Modular and loose furniture", "Site coordination and installation", "Final finishing, inspection and handover"] },
];

// Original company-content revision 667e637 includes the + suffix on all four counters.
export const companyStatistics = [
  { value: 70, label: "Projects completed" },
  { value: 50, label: "Happy clients" },
  { value: 15, label: "Years experience" },
  { value: 20, label: "Team members" },
];
export const individualServices = [
  { title: "Furniture Work", group: 0, detail: "Custom furniture, carpentry, furniture production and installation." },
  { title: "Civil Work", group: 2, detail: "Civil and masonry work coordinated within the agreed interior scope." },
  { title: "Electrical Work", group: 2, detail: "Electrical work and lighting requirements coordinated on site." },
  { title: "Plumbing Work", group: 2, detail: "Plumbing requirements coordinated with civil work and finishing." },
  { title: "POP & Gypsum", group: 2, detail: "POP work and gypsum ceilings within the agreed project requirements." },
  { title: "Paint & Polish", group: 2, detail: "Painting, polishing and final finishing." },
  { title: "Modular Furniture", group: 0, detail: "Modular kitchens, wardrobes and custom storage." },
  { title: "Turnkey Interiors", group: 2, detail: "Material selection, procurement, site coordination, installation, inspection and handover for residential and commercial interiors." },
];

export function pageHead(title: string, description: string, path: string) {
  const fullTitle = `${title} — Infinite Space Interiors`;
  return { meta: [
    { title: fullTitle }, { name: "description", content: description },
    { property: "og:title", content: fullTitle }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:url", content: `https://infinite-space-design.lovable.app${path}` },
  ], links: [{ rel: "canonical", href: `https://infinite-space-design.lovable.app${path}` }] };
}