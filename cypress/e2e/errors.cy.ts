describe("Handling errors", () => {
  it("should handle not found URL", () => {
    cy.visit("/unknown", { failOnStatusCode: false });

    cy.contains("404");
  });

  it("should redirect to home page", () => {
    cy.visit("/unknown", { failOnStatusCode: false });

    cy.getByData("go-back-home").click();
    cy.location("pathname").should("eq", "/");
  });
});
