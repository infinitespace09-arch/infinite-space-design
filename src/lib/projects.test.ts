import { describe, expect, test } from "bun:test";
import { projects, filterProjects } from "./projects";
describe("Project catalogue", () => {
  test("all 133 existing photographs remain in 14 distinct projects", () => {
    expect(projects).toHaveLength(14);
    expect(projects.flatMap(project => project.images)).toHaveLength(133);
    expect(new Set(projects.map(project => project.name)).size).toBe(14);
    expect(new Set(projects.flatMap(project => project.images)).size).toBe(133);
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
    expect(filterProjects("All Projects")).toHaveLength(14);
    expect(filterProjects("Residential")).toHaveLength(9);
    expect(filterProjects("Commercial")).toHaveLength(5);
    expect(filterProjects("Residential").every(project => project.category === "Residential")).toBe(true);
    expect(filterProjects("Commercial").every(project => project.category === "Commercial")).toBe(true);
  });
});