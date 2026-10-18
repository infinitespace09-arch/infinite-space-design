import { z } from "zod";
export const projectTypes = ["Residential", "Commercial", "Retail", "Full Turnkey Contracting", "Other"] as const;
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  phone: z.string().trim().regex(/^\+?[\d\s()-]{8,20}$/, "Please enter a valid phone number."),
  type: z.enum(projectTypes, { errorMap: () => ({ message: "Please select a project type." }) }),
  location: z.string().trim().min(2, "Please enter the project location.").max(200),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please add at least 10 characters about your project.").max(3000),
});
export function enquiryWhatsAppUrl(data: z.infer<typeof enquirySchema>) {
  const message = `Project enquiry — Infinite Space Interiors\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProject type: ${data.type}\nLocation: ${data.location}\nApproximate budget: ${data.budget || "Not specified"}\nRequirements: ${data.message}`;
  return `https://wa.me/919324029464?text=${encodeURIComponent(message)}`;
}