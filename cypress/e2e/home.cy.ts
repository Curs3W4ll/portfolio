describe("Displaying home page", () => {
  beforeEach(() => {
    cy.viewport(1920, 600);
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
      cy.wait("@storyblok-experiences");
      cy.wait("@storyblok-projects-preview");

      cy.getByData("profile").then((el) => {
        initialPosition = el.position();
      });

      cy.scrollTo("bottom", { duration: 50 });

      cy.getByData("profile").should((el) => {
        // Should not be equal because sticky elements have offsets equivalent to the scroll amount
        expect(el.position()).not.deep.equal(initialPosition);
      });
    });
  });

  context("NavBar", () => {
    it("Should move to anchor when clicking on it", () => {
      cy.getByData("anchor-experience").click();

      cy.hash().should("eq", "#experience");
      cy.getByData("anchor-experience").should("have.class", "font-bold");
      cy.getByData("anchor-about").should("not.have.class", "font-bold");
      cy.get("#experience").then((el) => {
        expect(el[0]?.getBoundingClientRect()?.top).equal(0);
      });

      cy.getByData("anchor-about").click();

      cy.hash().should("eq", "#about");
      cy.getByData("anchor-about").should("have.class", "font-bold");
      cy.getByData("anchor-experience").should("not.have.class", "font-bold");
      cy.get("#about").then((el) => {
        expect(el[0]?.getBoundingClientRect()?.top).equal(0);
      });
    });
  });

  context("About", () => {
    it("should display description", () => {
      cy.wait("@storyblok-about");
      cy.getByData("about").should("be.visible");
    });
  });

  context("Experiences", () => {
    it("should display experiences", () => {
      cy.wait("@storyblok-experiences");
      cy.getByData("experience").should("have.length.gt", 0);
    });
  });

  context("Projects preview", () => {
    it("should display projects preview", () => {
      cy.wait("@storyblok-projects-preview");
      cy.getByData("project").should("have.length.gt", 0);
    });

    it("should redirect to projects archive", () => {
      cy.wait("@storyblok-projects-preview");

      cy.getByData("projects-archive-button").click();

      cy.location("pathname").should("eq", "/projects");
    });
  });

  context("Eyes popup", () => {
    beforeEach(() => {
      cy.wait("@unleash");
    });

    it("should be able to show and hide popup when clicking on it", () => {
      cy.getByData("popup").should("not.be.visible");

      cy.getByData("eyes").click();
      cy.getByData("popup").should("be.visible");

      cy.getByData("eyes").click();
      cy.getByData("popup").should("not.be.visible");
    });

    context("Language switcher", () => {
      it("should change language when selecting", () => {
        cy.getByData("eyes").click();

        cy.getByData("lang-en").should("have.class", "underline");
        cy.getByData("lang-fr").should("not.have.class", "underline");

        cy.getByData("lang-fr").click();

        cy.getByData("lang-en").should("not.have.class", "underline");
        cy.getByData("lang-fr").should("have.class", "underline");
        cy.getCookie("i18n_redirected").should("have.property", "value", "fr");
        cy.location("pathname").should("eq", "/fr");
      });

      it("should automatically detect language from cookies", () => {
        cy.setCookie("i18n_redirected", "fr");
        cy.visit("/");
        cy.wait("@unleash");

        cy.getByData("lang-en").should("not.have.class", "underline");
        cy.getByData("lang-fr").should("have.class", "underline");
        cy.getCookie("i18n_redirected").should("have.property", "value", "fr");
        cy.location("pathname").should("eq", "/fr");
      });
    });

    context("Theme switcher", () => {
      it("should change theme when selecting", () => {
        cy.getByData("eyes").click();

        cy.getByData("theme-name").should("have.text", "system");
        cy.getByData("change-theme-button").click();
        cy.getByData("theme-name").should("have.text", "dark");
        cy.get("html").should("have.class", "dark");
        cy.getByData("change-theme-button").click();
        cy.getByData("theme-name").should("have.text", "light");
        cy.get("html").should("have.class", "light");
      });
    });
  });
});
