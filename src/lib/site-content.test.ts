/// <reference types="bun" />
import { expect, test } from "bun:test";
import { business, companyStatistics, workshopMapUrl, workshopDirectionsUrl } from "./site-content";
test("recovered project total retains the original value", () => {
  expect(companyStatistics.find(stat => stat.label === "Projects completed")?.value).toBe(70);
});
test("15 is the recovered years of experience, not a client count", () => {
  expect(companyStatistics.find(stat => stat.label === "Years experience")?.value).toBe(15);
});
test("recovered client total retains the original value", () => {
  expect(companyStatistics.find(stat => stat.label === "Happy clients")?.value).toBe(50);
});
test("recovered team total retains the original value", () => {
  expect(companyStatistics.find(stat => stat.label === "Team members")?.value).toBe(20);
});
test("map and directions use the exact workshop address rather than coordinates", () => {
  expect(business.address).toBe("Shop-3, Floor-GRD, 6/6A, Aga Irani Building, Balashet Madurkar Marg, Elphinstone Railway Station (West), Delisle Road, Mumbai – 400013.");
  expect(new URL(workshopMapUrl).searchParams.get("q")).toBe(business.address);
  expect(new URL(workshopDirectionsUrl).searchParams.get("destination")).toBe(business.address);
});