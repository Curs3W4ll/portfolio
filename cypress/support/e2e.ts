// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  const featureFlags = [
    "display-resume",
    "display-projects-archive",
    "display-animated-eyes",
    "display-language-switcher",
    "display-theme-switcher",
  ];

  cy.intercept("https://api.storyblok.com/**/profile*").as("storyblok-profile");
  cy.intercept("https://api.storyblok.com/**/about*").as("storyblok-about");
  cy.intercept("https://api.storyblok.com/**/*projects-preview*").as("storyblok-projects-preview");
  cy.intercept("https://api.storyblok.com/**/*experiences*").as("storyblok-experiences");

  cy.fixture("UnleashFeatureFlags.json").then((data) => {
    let i: number;
    for (i = 1; i < featureFlags.length; i++) {
      data.toggles.push({ ...data.toggles[0] });
    }

    i = 0;
    featureFlags.forEach((ff) => {
      data.toggles[i].name = ff;
      i++;
    });

    cy.intercept("GET", "https://unleash-proxy-erno.onrender.com/proxy*", data).as("unleash");
  });
});
