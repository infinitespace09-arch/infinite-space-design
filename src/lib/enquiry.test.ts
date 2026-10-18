/// <reference types="bun" />
import { expect, test } from "bun:test";
import { enquirySchema, enquiryWhatsAppUrl, projectTypes } from "./enquiry";
const enquiry = {name:"Test Enquiry",email:"test@example.com",phone:"+91 9324029464",type:"Residential" as const,location:"Mumbai",budget:"Not decided",message:"Interior execution for a home."};
test("all five requested project types are accepted", () => {
  expect(projectTypes).toEqual(["Residential","Commercial","Retail","Full Turnkey Contracting","Other"]);
  for(const type of projectTypes) expect(enquirySchema.safeParse({...enquiry,type}).success).toBe(true);
});
test("missing required information and invalid contact details are rejected", () => {
  for(const field of ["name","email","phone","type","location","message"]) expect(enquirySchema.safeParse({...enquiry,[field]:""}).success).toBe(false);
  expect(enquirySchema.safeParse({...enquiry,email:"invalid"}).success).toBe(false);
  expect(enquirySchema.safeParse({...enquiry,phone:"abc"}).success).toBe(false);
});
test("enquiry handoff targets the verified WhatsApp number and includes entered requirements", () => {
  const url = new URL(enquiryWhatsAppUrl(enquiry));
  expect(url.origin + url.pathname).toBe("https://wa.me/919324029464");
  expect(url.searchParams.get("text")).toContain("Interior execution for a home.");
  expect(url.searchParams.get("text")).toContain("Location: Mumbai");
});