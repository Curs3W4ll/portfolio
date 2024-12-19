describe("Displaying home page", () => {
  beforeEach(() => {
    cy.intercept("https://api.storyblok.com/**/profile*").as("storyblok-profile");
    cy.intercept("https://api.storyblok.com/**/about*").as("storyblok-about");
    cy.visit("/");
  });

  context("Profile", () => {
    it("should display profile details", () => {
      cy.getByData("profile").should("be.visible");
    });

    it("should display social links", () => {
      cy.getByData("social-link").should("have.length.gt", 0);
    });

    it.only("should be sticky on large screens", () => {
      cy.viewport(1050, 700);
      let initialPosition: JQuery.Coordinates;

      cy.wait("@storyblok-profile");
      cy.wait("@storyblok-about");

      cy.getByData("profile-section").then((el) => {
        initialPosition = el.position();
      });

      cy.scrollTo("bottom", { duration: 50 });

      cy.getByData("profile-section").should((el) => {
        // Should not be equal because sticky elements have offsets equivalent to the scroll amount
        expect(el.position()).not.deep.equal(initialPosition);
      });
    });
  });

  it("should display description", () => {
    cy.getByData("about").should("be.visible");
  });
});
