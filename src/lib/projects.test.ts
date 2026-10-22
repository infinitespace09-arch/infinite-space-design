/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { projects, filterProjects } from "./projects";
describe("Project catalogue", () => {
  test("Retail shows the genuine TONI&GUY salon and retains its Commercial classification", () => {
    expect(filterProjects("Retail").map(project => project.id)).toEqual(["toni-guy-salon-andheri"]);
    expect(filterProjects("Commercial").some(project => project.id === "toni-guy-salon-andheri")).toBe(true);
  });
  test("all 143 existing photographs remain in 15 distinct projects", () => {
    expect(projects).toHaveLength(15);
    expect(projects.flatMap(project => project.images)).toHaveLength(143);
    expect(new Set(projects.map(project => project.name)).size).toBe(15);
    expect(new Set(projects.flatMap(project => project.images)).size).toBe(143);
  });
  test("Rim Zim Clinic — Vasai Road is one Commercial project with ten photos", () => {
    const matches = filterProjects("Commercial").filter(project => project.name === "Rim Zim Clinic \u2014 Vasai Road");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.images).toHaveLength(10);
    expect(matches[0]?.location).toBe("Vasai Road");
    expect(filterProjects("Retail")).toHaveLength(1);
  });
  test("Anil Bhai — Santacruz is one Residential project with four photos", () => {
    const matches = filterProjects("Residential").filter(project => project.name === "Anil Bhai — Santacruz");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.images).toHaveLength(4);
    expect(matches[0]?.location).toBe("Santacruz");
  });
  test("TONI&GUY Salon — Andheri is Commercial with three photos", () => {
    const project = filterProjects("Commercial").find(project => project.name === "TONI&GUY Salon — Andheri");
    expect(project?.category).toBe("Commercial");
    expect(project?.images).toHaveLength(3);
    expect(project?.location).toBe("Andheri");
  });
  test("all filters partition projects without empty or overlapping categories", () => {
    expect(filterProjects("All Projects")).toHaveLength(15);
    expect(filterProjects("Residential")).toHaveLength(9);
    expect(filterProjects("Commercial")).toHaveLength(6);
    expect(filterProjects("Residential").every(project => project.category === "Residential")).toBe(true);
    expect(filterProjects("Commercial").every(project => project.category === "Commercial")).toBe(true);
  });
});