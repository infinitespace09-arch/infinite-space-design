/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { projects, filterProjects } from "./projects";
describe("Project catalogue", () => {
  test("Retail shows the genuine TONI&GUY salon and retains its Commercial classification", () => {
    expect(filterProjects("Retail").map(project => project.id)).toEqual(["toni-guy-salon-andheri"]);
    expect(filterProjects("Commercial").some(project => project.id === "toni-guy-salon-andheri")).toBe(true);
  });
  test("all 143 existing photographs and four Sujit crops remain in 16 distinct projects", () => {
    expect(projects).toHaveLength(16);
    expect(projects.flatMap(project => project.images)).toHaveLength(147);
    expect(new Set(projects.map(project => project.name)).size).toBe(16);
    expect(new Set(projects.flatMap(project => project.images)).size).toBe(147);
    expect(projects.filter(project => project.id !== "sujit-dahisar").flatMap(project => project.images)).toHaveLength(143);
  });
  test("Sujit — Dahisar contains four separate crops in reading order under Residential", () => {
    const matches = filterProjects("Residential").filter(project => project.name === "Sujit — Dahisar");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.location).toBe("Dahisar");
    expect(matches[0]?.images.map(image => image.split("/").pop())).toEqual(["sujit-dahisar-bedroom-01.png", "sujit-dahisar-bedroom-02.png", "sujit-dahisar-bedroom-03.png", "sujit-dahisar-bedroom-04.png"]);
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
    expect(filterProjects("All Projects")).toHaveLength(16);
    expect(filterProjects("Residential")).toHaveLength(10);
    expect(filterProjects("Commercial")).toHaveLength(6);
    expect(filterProjects("Residential").every(project => project.category === "Residential")).toBe(true);
    expect(filterProjects("Commercial").every(project => project.category === "Commercial")).toBe(true);
  });
});