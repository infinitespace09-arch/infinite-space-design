/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { projects, filterProjects } from "./projects";
describe("Project catalogue", () => {
  test("Retail shows the genuine TONI&GUY salon and retains its Commercial classification", () => {
    expect(filterProjects("Retail").map(project => project.id)).toEqual(["toni-guy-salon-andheri"]);
    expect(filterProjects("Commercial").some(project => project.id === "toni-guy-salon-andheri")).toBe(true);
  });
  test("all 150 existing photographs and the nine Sujit shots remain in 17 distinct projects", () => {
    expect(projects).toHaveLength(17);
    expect(projects.flatMap(project => project.images)).toHaveLength(159);
    expect(new Set(projects.map(project => project.name)).size).toBe(17);
    expect(new Set(projects.flatMap(project => project.images)).size).toBe(159);
    expect(projects.filter(project => project.id !== "sujit-dahisar").flatMap(project => project.images)).toHaveLength(150);
  });
  test("Sujit — Dahisar contains the four crops plus the kitchen and living photos under Residential", () => {
    const matches = filterProjects("Residential").filter(project => project.name === "Sujit — Dahisar");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.location).toBe("Dahisar");
    expect(matches[0]?.images.map(image => image.split("/").pop())).toEqual([
      "sujit-dahisar-bedroom-01.png", "sujit-dahisar-bedroom-02.png", "sujit-dahisar-bedroom-03.png", "sujit-dahisar-bedroom-04.png",
      "sujit-dahisar-kitchen-01.jpg", "sujit-dahisar-kitchen-02.jpg", "sujit-dahisar-living-01.png", "sujit-dahisar-living-02.png", "sujit-dahisar-living-03.png",
    ]);
  });
  test("Mohan Ji — Dahisar is one Residential project with seven photos", () => {
    const matches = filterProjects("Residential").filter(project => project.name === "Mohan Ji \u2014 Dahisar");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.images.map(image => image.split("/").pop())).toEqual([
      "mohan-ji-dahisar-living-01.png", "mohan-ji-dahisar-living-02.png", "mohan-ji-dahisar-living-03.png",
      "mohan-ji-dahisar-kitchen-01.jpg", "mohan-ji-dahisar-kitchen-02.jpg",
      "mohan-ji-dahisar-bedroom-01.png", "mohan-ji-dahisar-bedroom-02.png",
    ]);
    expect(matches[0]?.location).toBe("Dahisar");
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
    expect(filterProjects("All Projects")).toHaveLength(17);
    expect(filterProjects("Residential")).toHaveLength(11);
    expect(filterProjects("Commercial")).toHaveLength(6);
    expect(filterProjects("Residential").every(project => project.category === "Residential")).toBe(true);
    expect(filterProjects("Commercial").every(project => project.category === "Commercial")).toBe(true);
  });
});