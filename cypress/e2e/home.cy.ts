describe("Displaying home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render", () => {});

  it("should contains a main title", () => {
    cy.contains("Coming soon");
  });
});
