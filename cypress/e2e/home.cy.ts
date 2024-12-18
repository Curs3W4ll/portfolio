describe("Displaying home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display profile details", () => {
    cy.getByData("profile").should("be.visible");
  });

  it("should display description", () => {
    cy.getByData("about").should("be.visible");
  });

  it("should display social links", () => {
    cy.getByData("social-link").should("have.length.gt", 0);
  });
});
