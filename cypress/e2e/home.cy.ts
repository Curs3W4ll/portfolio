describe("Displaying home page", () => {
  beforeEach(() => {
    cy.viewport(1920, 600);
    cy.intercept("https://api.storyblok.com/**/profile*").as("storyblok-profile");
    cy.intercept("https://api.storyblok.com/**/about*").as("storyblok-about");
    cy.intercept("https://api.storyblok.com/**/*experiences*").as("storyblok-experiences");
    cy.visit("/");
  });

  context("Profile", () => {
    it("should display profile details", () => {
      cy.getByData("profile").should("be.visible");
    });

    it("should display social links", () => {
      cy.getByData("social-link").should("have.length.gt", 0);
    });

    it("should be sticky on large screens", () => {
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

  context("NavBar", () => {
    it("Should move to anchor when clicking on it", () => {
      cy.getByData("anchor-experience").click();

      cy.hash().should("eq", "#experience");
      cy.getByData("anchor-experience").should("have.class", "text-white font-bold");
      cy.getByData("anchor-about").should("not.have.class", "text-white font-bold");
      cy.get("#experience").then((el) => {
        expect(el[0].getBoundingClientRect().top).equal(0);
      });

      cy.getByData("anchor-about").click();

      cy.hash().should("eq", "#about");
      cy.getByData("anchor-about").should("have.class", "text-white font-bold");
      cy.getByData("anchor-experience").should("not.have.class", "text-white font-bold");
      cy.get("#about").then((el) => {
        expect(el[0].getBoundingClientRect().top).equal(0);
      });
    });
  });

  it("should display description", () => {
    cy.getByData("about").should("be.visible");
  });
});
