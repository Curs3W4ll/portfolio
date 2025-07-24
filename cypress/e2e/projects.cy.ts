describe("Viewing projects archive", () => {
  beforeEach(() => {
    cy.visit("/projects");
  });

  it("should have a sticky header row", () => {
    cy.viewport(1050, 200);
    let initialPosition: JQuery.Coordinates;

    cy.getByData("header-row").then((el) => {
      initialPosition = el.position();
    });

    cy.scrollTo("bottom", { duration: 50 });

    cy.getByData("header-row").should((el) => {
      // Should not be equal because sticky elements have offsets equivalent to the scroll amount
      expect(el.position()).not.deep.equal(initialPosition);
    });
  });

  it("should redirect to home page", () => {
    cy.getByData("back-button").click();
    cy.location("pathname").should("eq", "/");
  });
});
