/// <reference types='cypress' />

describe("MyApp Application", () => {
  it("Getting the main title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains(/Learning/);
  });

  it("Hello world message", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").contains("Hello World");
  });

  it("Input tag", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input");
  });
});
